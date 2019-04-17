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
  if(currentSlide){
    $('.menu li:nth-child(' + (currentSlide) + ')').addClass('slide-active');
  }
  else{
  $('.menu li .leaf .slide-active').removeClass('slide-active');
  }
});

$(".js-slick-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {

  $('.slick-current .home-tab-image').removeClass('animated fadeIn').hide();
  setTimeout(() => {
    $('.slick-current .home-tab-image').addClass('animated fadeIn').show();

  }, 1000);

});

$('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  if (currentSlide === 0) {
    $('ul li:nth-child(4)').removeClass('slide-active');
  }
});

$('a.previous').click(function(e) {
  $('.js-slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('li:nth-child(' + (currentSlide + 1) + ')').removeClass('slide-active');
    $('ul li:nth-child(' + (currentSlide) + ')').addClass('slide-active');
  });
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
