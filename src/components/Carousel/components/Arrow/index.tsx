import clx from 'classnames';
import { CustomThemeProps } from '../../../../types';
import { useCarouselStyles } from '../../styles';
import { FC, useCallback, useEffect, useState } from 'react';
import { ArrowProps } from '../../type';
import { BlockStoreType } from '../../../../types';
import { useBlockSelector } from '../../../../helpers';

export const Arrow: FC<ArrowProps> = ({
  onChange,
  itemsPerSlide,
  itemsToSlide,
  cards,
  currentSlider,
  hasArrow = true,
}) => {
  const mainConfig  = useBlockSelector((state: BlockStoreType) => state);
  const classesCarousel = useCarouselStyles(mainConfig as CustomThemeProps);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(currentSlider ?? 0);
  }, [currentSlider]);
  const endNext =
    currentSlide + (itemsPerSlide ?? 0) - (itemsToSlide ?? 0) >=
    (cards?.length ?? 0) - 1;

  const endPrev =
    currentSlide + (itemsPerSlide ?? 0) - (itemsToSlide ?? 0) <=
    (itemsPerSlide ?? 0) - (itemsToSlide ?? 0);

  const prevSlide = useCallback(() => {
    const index =
      currentSlide + itemsPerSlide - itemsToSlide <=
      itemsPerSlide - itemsToSlide
        ? cards?.length - itemsPerSlide
        : currentSlide - itemsToSlide;
    setCurrentSlide(index);
    onChange(index);
  }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsToSlide]);

  const nextSlide = useCallback(() => {
    const index =
      currentSlide + itemsPerSlide - itemsToSlide >= cards?.length - 1
        ? 0
        : currentSlide + itemsToSlide;
    setCurrentSlide(index);
    onChange(index);
  }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsToSlide]);

  return (
    <div className={clx(classesCarousel.arrowContainer, { hasArrow })}>
      <div
        className={clx(classesCarousel.carouselPrevious)}
        onClick={prevSlide}
      >
        {!endPrev && (
          <div className={clx(classesCarousel.arrow)}>
            <div className={clx(classesCarousel.buttonArrow, 'prev')} />
          </div>
        )}
      </div>
      <div className={clx(classesCarousel.carouselNext)}>
        {!endNext && (
          <div className={clx(classesCarousel.arrow)} onClick={nextSlide}>
            <div className={classesCarousel.buttonArrow} />
          </div>
        )}
      </div>
    </div>
  );
};
