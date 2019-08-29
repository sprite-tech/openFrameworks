$(function() {
  $(window).on('load resize', function() {
    var w = $(window).width();
    var h = w * 0.6;
    $('.top').css('height', h);
  }
});