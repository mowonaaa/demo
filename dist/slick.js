$('.movie-inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
          breakpoint: 500,
          settings: {
            infinite: true,
            dots: true,
            nextArrow: null,
            prevArrow: null,
          }
        }
    ]
});