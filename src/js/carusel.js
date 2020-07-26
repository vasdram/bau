import 'owl.carousel';
// owl-carousel-partners
export const carusel = () => {
    $(document).ready(function(){
        $('.owl-carousel-1').owlCarousel({
            loop: true,
            items:1,
            nav:true,
        });

        $('.owl-carousel-2').owlCarousel({
            loop: true,
            items:4,
            nav:true,
            autoplay: true
        });
      });
} 

