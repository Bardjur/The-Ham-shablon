$(document).ready(function(){

  $(".cookie-popup").each(function() {
    var cookies = window.localStorage.getItem("cookie-popup");
    if (!cookies) {
      $(".cookie-popup").addClass("cookie-popup-open");
    }
  });

  $(window).scroll(function(){
// MAIN MENU SCROLL
    let headNav = $('header .navbar');
    if ($(this).scrollTop() > 123 && headNav.hasClass("nav-norm")){
      headNav.fadeOut( "300",function(){
        headNav.addClass("nav-scroll");
        headNav.removeClass("nav-norm");
        headNav.fadeIn('100');
      });
    } else if ($(this).scrollTop() <= 123 && headNav.hasClass("nav-scroll")){
      headNav.fadeOut( "300",function(){
        headNav.removeClass("nav-scroll");
        headNav.addClass("nav-norm");
        headNav.fadeIn('100');
      })
    }
// END MAIN MENU SCROLL

    $('.animation1').each(function(){
      var heightElem = $(this).height();
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+heightElem+100) {
        $(this).addClass('bounceInLeft');
      }
    });

    $('.animation2').each(function(){
      var heightElem = $(this).height();
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+heightElem+100) {
        $(this).addClass('bounceInRight');
      }
    });

    $('.animation3').each(function(){
      var heightElem = $(this).height();
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+heightElem+50) {
        $(this).addClass('bounceIn');
      }
    });
    
    $('.info-block').each(function(){
      var heightElem = $(this).height();
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+heightElem+100) {
        $(this).addClass('fadeInUp');
      }
    });


  })
  

  $('.slider-first-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dotsClass: 'nav-slider-first',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false
   });

  $('.slider-eleventh-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    dotsClass: 'nav-slider-eleventh'
    // asNavFor: '.nav-slider-eleventh-block'
   });
   $('.nav-slider-eleventh li button').text('');

});

function filter(a){
 $('.card-filter').isotope({ filter: a });
}

function setCookie(ev) {
  ev.preventDefault;
  localStorage.setItem("cookie-popup", 1);
  $(".cookie-popup").removeClass("cookie-popup-open");
}