(function($) {
  $(document).ready(function() {
    $('.js-slick-slider').each(function() {
      const $this = $(this);

      $this.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        dots: false,
        arrows: false,
      });
      $(this).find('.start-slide').removeClass('start-slide');
    });
  });

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slick-slider').slick('slickGoTo', slideno - 1);
});

$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  if ('.js-slick-slider slide-1'){
  $('menu li a.slide-active').removeClass('slide-active');
  };
});

if($('.js-slick-slider slide-1'){
  $('menu li a.slide-active').removeClass('slide-active');
});

$(".js-slick-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {

  $('.slick-current .home-tab-image').removeClass('animated fadeIn').hide();
  setTimeout(() => {
    $('.slick-current .home-tab-image').addClass('animated fadeIn').show();

  }, 1000);

});

$(".menu li").hover(function(e){
  var $this = $(this);
  if($this.index() === 0|| $this.is(':nth-child(1)')|| $this.is(':nth-child(2)')|| $this.is(':nth-child(3)')|| $this.is(':nth-child(4)')){
       e.preventDefault();
       var menuItem = $('li').index(this);
       $('.slick-slider').slick('slickGoTo', menuItem + 1);
     }
     });
   })(jQuery);
