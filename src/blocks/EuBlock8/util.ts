export const getScrollAmount = (container: HTMLElement, layout: string, md: boolean, sm: boolean, onlyLg: boolean): number => {
  const itemWidth = (container.querySelector(".item") as HTMLElement)?.offsetWidth || 0;

  if (layout === "layout-5") {
    if (onlyLg) return itemWidth + 20;
    if (md) {
      return itemWidth + 40;
    } else {
      const multiplier = md || sm ? 1 : 2;
      return (itemWidth + 40) * multiplier;
    }
  }

  return itemWidth + 40;
};
