const tabBtns = document.querySelectorAll('.tabs__btn-item')
const tabItems = document.querySelectorAll('.tabs__content-item')

tabBtns.forEach((elem) => elem.addEventListener('click', openTab))

function openTab(event) {
  const btn = event.currentTarget
  const btnData = btn.dataset.button

  tabBtns.forEach((btn) => btn.classList.remove('tabs__btn-item_active'))
  btn.classList.add('tabs__btn-item_active')

  tabItems.forEach((item) => item.classList.remove('tabs__content-item_active'))

  document
    .querySelector(`#${btnData}`)
    .classList.add('tabs__content-item_active')
}
