new WOW().init();



$(document).ready(function() {  
  var pageDistance;
  
  $('#humble-brag').fadeIn (1000, function () {
     $('#disclaimer').fadeIn (1000);
  });
   
  $(window).scroll(function (){
    pageDistance = $(this).scrollTop();
    var aboutHeight = $('.about').offset().top
    if(pageDistance > (aboutHeight - 100)){
      $("nav.navbar").removeClass("inlanding");
      $("nav.navbar").addClass("left-landing");
    }
    else {  
  $("nav.navbar").removeClass("left-landing");
      $("nav.navbar").addClass("inlanding");
    }
  });
  
  
  
});