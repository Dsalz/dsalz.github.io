
$(document).ready(function() {  

  var pageDistance;
  
  $('.landing h1').fadeIn (1000);
   
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

  var stuffido = "=Web Developer.++++++=Web/Graphics Designer.++++++=Masked Vigilante.++++++"

  var stuffidoarr = stuffido.split('');

  var stuffindex = 0;

  var currentStuff = "";

  var startShowCase = setInterval(appendStuffIDo, 200);
  
  function appendStuffIDo(){


    currentStuff = (stuffidoarr[stuffindex] === ".")? currentStuff + '<span>.</span>' :(stuffidoarr[stuffindex] === "+")? currentStuff + "":(stuffidoarr[stuffindex] === "=")? "": currentStuff + stuffidoarr[stuffindex];   

    $('#stuffido').html(currentStuff); 

    stuffindex = (stuffindex === stuffido.length-1)? 0: stuffindex + 1;

  }


  
});