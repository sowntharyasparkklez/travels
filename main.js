


jQuery(document).ready(function ($) {
  var btn = $('#button');
  $('.ham-menu').on('click', function () {
    $('.vt-desktop-menu').toggle();
    $('.vt-desktop-menu').toggleClass('active');
  });

  $('.vt-desktop-menu ul li a').on('click', function () {
    $('.vt-desktop-menu').css('display', 'none');
    $('.vt-desktop-menu').toggleClass('active');
    $('.ham.ham6').removeClass('active')
  })

 

  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  var mixer = mixitup(".all-catagorys");
   $(".vt-category-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: $('.category-right-arrow'),
    nextArrow: $('.category-left-arrow'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".testimonial-slider-container").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: $('.about-left-arrow'),
    nextArrow: $('.about-right-arrow'),

  });

  AOS.refresh();

});
