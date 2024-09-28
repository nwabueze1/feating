import { useMediaQuery, useTheme } from "@mui/material";
import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, Dispatch, SetStateAction } from "react";
import { useSwipeAble } from "./styles";
import clx from "classnames";

type Props = {
  children: React.ReactNode;
  gap?: string;
  styles?: React.CSSProperties;
  classNames?: string;
};

export type SwipeAbleRef = {
  handleScroll: (delta: number) => void;
  smooth: boolean;
  setSmooth: Dispatch<SetStateAction<boolean>>;
  isEndReached: boolean;
  isStartReached: boolean;
};

export const SwipeAble = forwardRef<SwipeAbleRef, Props>(({ children, gap, styles, classNames }: Props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [smooth, setSmooth] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [isEndReached, setIsEndReached] = useState(false);
  const [isStartReached, setIsStartReached] = useState(true);
  const classes = useSwipeAble();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("lg"));

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsDragging(true);
    setLastX(e.clientX);
    e.currentTarget.style.cursor = "grabbing";
    setIsStartReached(false);
    setIsEndReached(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setSmooth(false);
      e.preventDefault();
      if (isDragging && containerRef.current) {
        const delta = e.clientX - lastX;
        containerRef.current.scrollLeft -= delta;
        setLastX(e.clientX);
      }

      if (!containerRef.current) return;
      const { scrollLeft, clientWidth, scrollWidth, offsetWidth } = containerRef.current;
      setIsStartReached(scrollLeft === 0);
      setIsEndReached(scrollLeft + clientWidth >= scrollWidth - offsetWidth);
    },
    [isDragging, lastX]
  );

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSmooth(false);
    e.preventDefault();
    setIsDragging(false);
    e.currentTarget.style.removeProperty("cursor");

    if (!containerRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth, offsetWidth } = containerRef.current;
    setIsStartReached(scrollLeft === 0);
    setIsEndReached(scrollLeft + clientWidth >= scrollWidth - offsetWidth);
  }, []);

  const handleScroll = (delta: number) => {
    delta > 0 ? setIsStartReached(false) : setIsEndReached(false);
    setSmooth(true);
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scrollAmount = xs ? 200 : container.clientWidth - 400;

    (container as any).scrollLeft += delta * scrollAmount;
    const { scrollLeft, clientWidth, scrollWidth } = container;
    setIsStartReached(scrollLeft === 0);
    setIsEndReached(scrollLeft + clientWidth >= scrollWidth);
  };

  useImperativeHandle(ref, () => ({
    handleScroll,
    setSmooth,
    smooth,
    isEndReached,
    isStartReached,
  }));

  return (
    <div
      className={clx(classes.container, classNames)}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ gap, scrollBehavior: smooth ? "smooth" : "revert-layer", ...styles }}
    >
      {children}
    </div>
  );
});

SwipeAble.displayName = "SwipeAble";
