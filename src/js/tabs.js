export const tabsHandler = () => {
  const tabs = document.querySelectorAll('.card__options-tabs-item')
  const tabsItem = document.querySelectorAll('.card__options-item')
  document.addEventListener('click', (e) => {
    if( !e.target.classList.contains('card__options-tabs-item') ) return
    
    const id = e.target.getAttribute('data-id')

    tabs.forEach(tab => {
      if(tab.classList.contains('active')) {
        tab.classList.remove('active')
      }
    })

    tabsItem.forEach(tab => {
      if(tab.classList.contains('active')) {
        tab.classList.remove('active')
      }
    })

    e.target.classList.add('active')
    document.querySelector(`#${id}`).classList.add('active')
  
  })
}
