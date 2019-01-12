$(document).ready(function(){

  // MAIN MENU SCROLL
  let headNav = $('header .navbar');
  $(window).scroll(function(){
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
  })
  // END MAIN MENU SCROLL

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

// MAIN SLIDER
$(function(){
  $('#camera_wrap_130').camera({
    height: '468',
    minHeight: '',
    pauseOnClick: true,
    hover: 1,
    fx: 'curtainTopLeft',  //'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
    loader: 'none',    //bar
    pagination: 0,     //true
    thumbnails: true,     //true
    thumbheight: 0,
    thumbwidth: 100,
    time: 7000,
    transPeriod: 400,
    alignment: 'center',
    autoAdvance: 1,
    mobileAutoAdvance: 1,
    portrait: 0,
    barDirection: 'leftToRight',
    lightbox: 'mediaboxck',
    fullpage: 0,      //true
    mobileimageresolution: '0',
    navigationHover: false,
    navigation: true,
    playPause: false,
    barPosition: 'bottom'
  });
});
// END MAIN SLIDER

function filter(a){
 $('.card-filter').isotope({ filter: a });
}