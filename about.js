const hamburgerbtn = document.querySelector('.hamburger-menu');
const hamburgeritems1 = document.querySelector('.hamburger-items1');
const hamburgeritems2 = document.querySelector('.hamburger-items2');
const hamburgeritems3 = document.querySelector('.hamburger-items3');
const menuListItems = document.querySelectorAll('.menu-list-items');
const menuList = document.querySelector('.menu-list');

hamburgerbtn.addEventListener('click', () => {
  hamburgeritems1.classList.toggle('hamburger-items1-active');
  hamburgeritems2.classList.toggle('hamburger-items2-active');
  hamburgeritems3.classList.toggle('hamburger-items3-active');
  menuList.classList.toggle('menu-list-active');
});

menuListItems.forEach((i) => {
  i.addEventListener('click', () => {
    menuList.classList.remove('menu-list-active');
    hamburgeritems1.classList.remove('hamburger-items1-active');
    hamburgeritems2.classList.remove('hamburger-items2-active');
    hamburgeritems3.classList.remove('hamburger-items3-active');
  });
});