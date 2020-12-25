$(function(){
  $('.blog__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]

  });
});
