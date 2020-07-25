// catalog__nav-chart-item


document.addEventListener('click', (e) => {
    console.log('asdasdsad');
    if(!e.target.classList.contains('catalog__nav-chart-item')) return;
    if(!e.target.classList.contains('active')) {
        e.target.classList.add('active');
    } else {
        e.target.classList.remove('active');
    }
})