export const menuHandler = () => {
  const menu = document.querySelector('.menu')
  document.addEventListener('click', (e) => {
    if( !e.target.classList.contains('menu-burger') ) return

    if(!menu.classList.contains('menu_open')) {
      menu.classList.add('menu_open')
    }
  })

  document.addEventListener('click', (e) => {
    if( !e.target.classList.contains('menu__head-close') ) return

    if(menu.classList.contains('menu_open')) {
      menu.classList.remove('menu_open')
    }
  })
}
