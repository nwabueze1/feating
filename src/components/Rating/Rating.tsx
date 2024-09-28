import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useRatingStyles } from "./styles";

export const Rating = ({ variant = "filled" }: { variant: "filled" | "outline" }) => {
  const classes = useRatingStyles();
  return variant === "filled" ? <AiFillStar className={classes.rating} /> : <AiOutlineStar className={classes.rating} />;
};
