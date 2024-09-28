import { useEmptyStateStyles } from "./styles";

export const EmptyState = () => {
  const classes = useEmptyStateStyles();

  return (
    <article>
      <div className={classes.root}>
        <img src={"https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/336+1.svg"} alt={"empty cart"} />
        <p className={classes.description}>You do not have any item in your cart</p>
      </div>
    </article>
  );
};
