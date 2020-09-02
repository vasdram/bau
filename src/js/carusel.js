import 'owl.carousel';
// owl-carousel-partners
export const carusel = () => {
    $(document).ready(function(){
        $('.owl-carousel-1').owlCarousel({
            loop: true,
            items:1,
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:false,
        });

        $('.owl-carousel-2').owlCarousel({
            loop: true,
            items:4,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,   
            autoplayHoverPause:false,
            responsive : {
                0 : {
                    items:1,
                    center: true,
                    margin: 10
                },
                480 : {
                    items:2,
                },
                768 : {
                    items:3,
                },
                 1024 : {
                    items:4,
                    }
            }
        });
      });
} 

