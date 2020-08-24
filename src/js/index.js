import '../../node_modules/animate.css/animate.css'
import "jquery-mask-plugin"
import * as $ from 'jquery';

import './catalog.js';
import {carusel} from './carusel.js';
import {tabsHandler} from './tabs.js';
import {menuHandler} from './menu.js';
import {feedbackForm, orderCallForm, sertModal} from './modal.js';


import '../styles/styles.scss';



carusel()
tabsHandler()
menuHandler()


document.addEventListener('click', (e) => {
    
    
    if(e.target.classList.contains('header__phone-btn')) {
        e.preventDefault()
        orderCallForm.open()
    }

    if(e.target.classList.contains('header__mail-btn')) {
        e.preventDefault()
        feedbackForm.open()
    }

    if(e.target.classList.contains('sert__img-img')) {
      sertModal.open()
    }
})


$(window).on('load', function(){
  setTimeout(() => {
    document.querySelector('body').classList.add('loaded')
  }, 1000)
    
    if(!window.location.hash) return
    var top = $(`div[data-id="${window.location.hash}"]`).offset().top - 140;
    $('html,body').stop().animate({
      scrollTop: top
    }, 1000);
  });


  $('.doc-link').on('click', function(e) {
    
    var top = $(`div[data-id="${e.target.dataset.hash}"]`).offset().top - 140;
    $('html,body').stop().animate({
      scrollTop: top
    }, 1000);
  })