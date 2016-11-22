$(document).ready(function() {

  $(function(){
    $('li:gt(0)').hide();
    setInterval(function(){
      $('ul li:first-child').fadeOut(0)
      .next('li').fadeIn(1000)
      .end().appendTo('.frames');}, 2500);
  });
  // http://www.oloblogger.com/2013/04/mas-sencillo-slider-jquery.html
});

// var num_img = $("li").length;
// var num_img = (num_img - 1) * 100;

// $("ul").animate({left: '-=100%'},500);
// $("ul").animate({left: '+='+ num_img +'%'},500);
