import 'owl.carousel';

export const carusel = () => {
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop: true,
            items:1,
            nav:true,
        });
      });
} 

