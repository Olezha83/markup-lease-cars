const footerTitles = document.querySelectorAll('.footer__menu-title')
const footerMenus = document.querySelectorAll('.footer__menu-level-2')

footerTitles.forEach((item) => item.addEventListener('click', openMenu))

function openMenu(event) {
  const menuHead = event.currentTarget
  menuHead.nextElementSibling.classList.toggle('footer__menu-level-2_visible')
}
