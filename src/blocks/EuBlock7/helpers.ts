export const getProductsFromMenu = (menu: Record<string, any>) => {
  const products: any[] = []; //max product to select is 8 products

  const menus = menu?.activeMenuCategories as any[];
  const menuCount = menus.length;

  if (menuCount === 1) {
    return menus[0].menuItems;
  }

  for (let i = 0; i < 8; i++) {
    for (const item of menus) {
      if (products.length >= 8) {
        return products;
      }
      products.push(item.menuItems[i]);
    }
  }

  return products;
};
