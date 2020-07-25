import '../../node_modules/animate.css/animate.css'
import "jquery-mask-plugin"
import * as $ from 'jquery';

import {carusel} from './carusel.js';
import {tabsHandler} from './tabs.js';
import {menuHandler} from './menu.js';
import {feedbackForm, orderCallForm, sertModal} from './modal.js';


import '../styles/styles.scss';



carusel()
tabsHandler()
menuHandler()


document.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(e.target.classList.contains('header__phone-btn')) {
        orderCallForm.open()
    }

    if(e.target.classList.contains('header__mail-btn')) {
        orderCallForm.open()
    }

    if(e.target.classList.contains('sert__img-img')) {
        
        sertModal.open()
    }
})



