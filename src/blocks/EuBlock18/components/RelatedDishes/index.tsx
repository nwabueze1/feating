import { useBlockSelector } from "../../../../helpers";
import { BlockStoreType } from "../../../../types";
import { useRelatedDishes } from "./styles";
import { FC, useState } from "react";
import { RelatedDishesProps } from "./types";
import { Arrow, Card, Carousel } from "../../../../components";
import { useMediaQuery, useTheme } from "@mui/material";

export const RelatedDishes: FC<RelatedDishesProps> = ({  mode = "view", title, currency, relatedMenuData }) => {
  const mainConfig = useBlockSelector<BlockStoreType, BlockStoreType>((state) => state);
  const classes = useRelatedDishes(mainConfig);
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const slidesCount = sm ? 2 : lg ? 3 : 4;

  const handleChange = (data: number) => {
    setCurrentSlide(data);
  };

  const getDishes = () => {
    return relatedMenuData?.map((item, index: number) => (
      <Card
        key={index}
        title={item?.name}
        price={item?.price}
        image={item?.image}
        subtitle={item?.description}
        numberOfLines={2}
        mode={mode}
        currency={currency}
        action={{
          title: "View",
          href: item?.slug ?? "",
        }}
      />
    ));
  };

  return (
    <article className={classes.root}>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>{title}</h1>
        <div>
          <Arrow onChange={handleChange} itemsPerSlide={slidesCount} itemsToSlide={1} cards={getDishes()} currentSlider={currentSlide} />
        </div>
      </div>
      <Carousel cards={getDishes()} itemsPerSlide={slidesCount} itemsToSlide={1} currentSlider={currentSlide} arrow={false} onChange={handleChange} hasPointer={false} />
    </article>
  );
};
