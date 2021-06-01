$(function(){
$('.top__slider').slick({
  arrows:  false,
  dots: true,
  autoplay: true,
  fade:true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]

});


$('.reviews__slider').slick({
  arrows:  false,
  dots: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1141,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 846,
      settings: {
        slidesToShow: 2,
        
      }
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        
      }
    }
    
  ]
});

$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');

});

});