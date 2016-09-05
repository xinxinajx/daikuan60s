$(function () {
   $('.menu-one li').hover(function () {
       $(this).find('img').css('display','block');
       $(this).find('.menu-two').slideDown(500);
   },function () {
       $(this).find('.menu-two').slideUp(100);
       $(this).find('img').css('display','none');

   })
});