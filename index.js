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


$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('li:nth-child('+(currentSlide - 1)+')').removeClass('active');
  $('ul li:nth-child(' + (currentSlide)+ ')').addClass('active');
});

$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  if(currentSlide === 0){
    $('ul li:nth-child(4)').removeClass('active');
  }
});

 $('a.previous').click(function(e) {
$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('li:nth-child('+(currentSlide + 1)+')').removeClass('active');
  $('ul li:nth-child(' + (currentSlide)+')').addClass('active');
});
});
