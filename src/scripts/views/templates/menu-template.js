const DetailMenu = (menus) => {
  const menuDom = menus.map((menu) => `<li tabindex="0">${menu.name}</li>`);
  return menuDom.join('');
};

export default DetailMenu;
