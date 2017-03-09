$(document).ready(function() {

  //Dropdown Menu
  $(".nav-items").hide();
  $(".nav-icon").click(function(){
    $(".nav-items").slideToggle(300);
    return false;
  });
  $(".nav-items h4").click(function() {
    $(".nav-items").hide();
  });
  //loading Icon
  $(".loading-icon").hide(0).fadeIn(3000);
  $('.loading-icon h1').animate({"font-size": "-=32px"}, 'slow')
  .animate({"font-size": "+=32px"}, 'slow')
  $('.loading-icon hr').animate({"width": "0px"}, 'slow')
  .animate({"width": "+=55px"}, 'slow')
   function pulse(){
       $('.loading-icon h1').animate({"font-size": "-=5px"},'slow')
       .animate({"font-size": "+=5px"},'slow');
       $('.loading-icon hr').animate({"width": "-=25px"}, 'slow')
       .animate({"width": "+=25px"}, 'slow')
   }
   setInterval(pulse, 2000);
   pulse();

   //Homepage animations
   $("#contact-link").fadeIn(500).animate({left: '20px'},1000);
   $("#work-link").animate({right: '20px'},1000);
   $("#about-link").animate({bottom: '20px'},1000);
   $(".home-title h1").hide(0).fadeIn(1000);
   $(".home-title h3").hide(0).fadeIn(1000);
   //About Page animations
   $(".about-content-text h1,.about-content-text h3").animate({left: '0px'},1000);
   $(".about-content-text h2").animate({right: '0px'},1000);
   $(".about-img img").hide(0).fadeIn(1000);
   //Work Page Animations
   $(".title h1").animate({left: '0px'}, 1000);
   $(".work-items").animate({right: '0px'}, 1000);
   //Contact Page animations
   $(".contact-title h1").animate({left: "0px"}, 1500);
   $(".contact-info").hide(0).fadeIn(2000);
   $(".contact-table td").animate({right: '0px'}, 1500)
   $(".social li").animate({left: '0px'},1500);
  //Mobile Menu Load
  $(function(){
    $(".menu-page").hide();
    $(".open-menu, .close-menu").bind("click", function(){
      $(".menu-page").hide();
      if ($(this).attr("class") == "open-menu"){
      $(".menu-page").css("display","block");
      $(".home-page-mobile").css("display", "none");
      $(".container").css("display", "none");
      $(".contact-area").css("display", "none");
      $(".about").css("display", "none");
      $(".mobile-menu-link").hide();
    }
    else {
      $(".home-page-mobile").css("display", "block");
      $(".menu-page").css("display", "none");
      $(".container").css("display", "block");
      $(".contact-area").css("display", "block");
      $(".about").css("display", "block");
      $(".mobile-menu-link").show();
    }
    });
  });

   //Load About
   $(window).on('load', function(){
   $(".contents, .about").css("display", "none");
   $(".contents, .about").fadeIn(500);
   $("a.transition-about").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".contents").slideUp(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
    });
    //Load Contact
    $(window).on('load', function(){
    $(".contents, .contact-area").css("display", "none");
    $(".contents, .contact-area").fadeIn(500);
    $("a.transition-contact").click(function(event){
         event.preventDefault();
         linkLocation = this.href;
         $(".contents").animate({'margin-left':'1000px'},350,redirectPage);
     });

     function redirectPage() {
         window.location = linkLocation;
     }
     });
    //Load Work
    $(window).on('load', function(){
    $(".contents, .container").css("display", "none");
    $(".contents, .container").fadeIn(500);
    $("a.transition-work").click(function(event){
         event.preventDefault();
         linkLocation = this.href;
         $(".contents").animate({width:'toggle'},350,redirectPage);
     });

     function redirectPage() {
         window.location = linkLocation;
     }
     });

});
