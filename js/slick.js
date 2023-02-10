$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    
  });