const responsive ={
  0:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
}
$(document).ready(function(){

  $nav=$(".nav");
  $toggleCollapse=$(".toggle_collapse");
  $toggleCollapse.click(function(){
  $nav.toggleClass("collapse");
});
$(".owl-carousel").owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  dots:false,
  nav:true,
  navText:[$(".owl-nav-prev"),$(".owl-nav-next")],
  responsive:responsive

});
$('.move_up span').click(function(){
  $('html,body').animate({
    scrollTop:0
  },1000);
});
AOS.init();
});
