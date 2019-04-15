(function ($){
$('.js-slick-slider').each(function() {
  const $this = $(this);

  $this.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnHover: true,
    dots: false,
    arrows: false,
  });
  $(this).find('.start-slide').removeClass('start-slide');
});
})(jQuery);

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slick-slider').slick('slickGoTo', slideno - 1);
 });

 $('.menu').hover('li').hover(function(e){
   var index = $(this).data();
   var slideno = $(this).data('slide');
   $('.slick-slider').slick('slickGoTo', slideno +1);
 })

$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.menu li:nth-child('+(currentSlide - 1)+')').removeClass('slide-active');
  $('.menu li:nth-child(' + (currentSlide)+ ')').addClass('slide-active');
});

$(".js-slick-slider").on("beforeChange", function() {

   $('.home-image-tab').removeClass('animated fadeInLeft').hide();
   setTimeout(() => {
     $('.home-image-tab').addClass('animated fadeInLeft').show();

   }, 1000);

 })

$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  if(currentSlide === 0){
    $('ul li:nth-child(4)').removeClass('slide-active');
  }
});

 $('a.previous').click(function(e) {
$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('li:nth-child('+(currentSlide + 1)+')').removeClass('slide-active');
  $('ul li:nth-child(' + (currentSlide)+')').addClass('slide-active');
});
});
