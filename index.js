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
        transition: 750,
        pauseOnHover: true,
        dots: false,
        arrows: false,
        mobileFirst: true,
      });
      $(this).find('.start-slide').removeClass('start-slide');
    });


  $(window).on('resize', function(){
    $('.slick-slider').slick('resize');
  });

$('.nav-arrows a[data-slide]').click(function(event) {
  event.preventDefault();
  var slideno = $(this).data('slide');
  $('.slick-slider').slick('slickGoTo', slideno - 1);
});

$('.js-slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  $('.menu li a.slide-active').removeClass('slide-active');
  $('.menu li a').eq(nextSlide - 1).addClass('slide-active');
});

$('.js-slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  if($(nextSlide === 1)){
    $('.menu li.last.leaf a.slide-active').removeClass('slide-active');
  }
});

$('.js-slik-slider').on('setPosition', function (event, slick) {
	slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});

$(".js-slick-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {

  $('.slick-current .home-tab-image').removeClass('animated fadeIn').hide();
  setTimeout(() => {
    $('.slick-current .home-tab-image').addClass('animated fadeIn').show();

  }, 1000);

});

$(".menu li").mouseover(function(e){
  var $this = $(this);
  if($this.index() === 0|| $this.is(':nth-child(1)')|| $this.is(':nth-child(2)')|| $this.is(':nth-child(3)')|| $this.is(':nth-child(4)')){
       e.preventDefault();
       var menuItem = $('li').index(this);
       $('.slick-slider').slick('slickGoTo', menuItem + 1);
     }
     });
       });
   })(jQuery);
