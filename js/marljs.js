/*EYE MOVEMENT*/
var eye1 = $('#eye1');
var eye2 = $('#eye2');
var pupil1 = $('#pupil1');
var pupil2 = $('#pupil2');

function eye1Movement(evt) {
   var eye1Offset = eye1.offset();
   var mouseX = evt.pageX;
   var mouseY = evt.pageY;
   var eye1CenterX = (eye1Offset.left) + (eye1.width() / 2);
   var eye1CenterY = (eye1Offset.top) + (eye1.height() / 2);
   var radians = Math.atan2(mouseX - eye1CenterX, mouseY -eye1CenterY);
   var degree = (radians * (180 / Math.PI) * -1);
   pupil1.css({
      '-webkit-transform' : 'rotate('+degree+'deg)',
      '-moz-transform' : 'rotate('+degree+'deg)',
      '-ms-transform' : 'rotate('+degree+'deg)',
      '-o-transform' : 'rotate('+degree+'deg)',
      'transform' : 'rotate('+degree+'deg)',
   });
}

function eye2Movement(evt) {
   var eye2Offset = eye2.offset();
   var mouseX = evt.pageX;
   var mouseY = evt.pageY;
   var eye2CenterX = (eye2Offset.left) + (eye2.width() / 2);
   var eye2CenterY = (eye2Offset.top) + (eye2.height() / 2);
   var radians = Math.atan2(mouseX - eye2CenterX, mouseY -eye2CenterY);
   var degree = (radians * (180 / Math.PI) * -1);
   pupil2.css({
      '-webkit-transform' : 'rotate('+degree+'deg)',
      '-moz-transform' : 'rotate('+degree+'deg)',
      '-ms-transform' : 'rotate('+degree+'deg)',
      '-o-transform' : 'rotate('+degree+'deg)',
      'transform' : 'rotate('+degree+'deg)',
   });
}


$(document).ready(function() {


   /*EYE MOVEMENT*/
   $(document).mousemove(eye1Movement);
   $(document).mousemove(eye2Movement);


   /*INTRO HOVERS*/
   $('.boxjob').click(function(event){
      $('.tolove').addClass('tolovemove');
      $('.tolove > h2').hide();
      $('.hand-container').css("opacity", "1");
      $('.boxmeetme > div > a').addClass('pulse');
      ga('send', 'event', 'intro job','click', 'intro');
   });
   $('.boxheart').click(function(event){
      $('.tolove').addClass('tolovemove');
      $('.tolove > h2').hide();
      $('.hand-container').css("opacity", "1");
      $('.boxmeetme > div > a').addClass('pulse');
      ga('send', 'event', 'intro heart','click', 'intro');
   });


   /*MENU*/

   $('#menu-open').click(function(event){
      $('#mini-nav').hide();
      $('#main-nav').css("display", "flex");
      ga('send', 'event', 'menu open','click', 'menu');
   })

   $('#menu-close').click(function(event){
      $('#main-nav').hide();
      $('#mini-nav').show();
      ga('send', 'event', 'menu close','click', 'menu');
   })

   $('#home-open').click(function(event){
      $('#main-nav').hide();
      $('#mini-nav').show();
      ga('send', 'event', 'from menu to home','click', 'menu');
   })

   $('#about-open').click(function(event){
      $('#main-nav').hide();
      $('#mini-nav').show();
      ga('send', 'event', 'from menu to about','click', 'menu');
   })

   $('#skills-open').click(function(event){
      $('#main-nav').hide();
      $('#mini-nav').show();
      ga('send', 'event', 'from menu to skills','click', 'menu');
   })


   $('#contact-open').click(function(event){
      $('#main-nav').hide();
      $('#mini-nav').show();
      ga('send', 'event', 'from menu to contact','click', 'menu');
   })

   /*ABOUT DETAILS*/

   //opening about modals
   $('#about-me').on('click', '.about-box', function(e){
      e.preventDefault();
      var $aboutDetails = $(this).next('.about-details')
      $aboutDetails.show();
      $aboutDetailsId = $aboutDetails.attr('id');
      ga('send', 'event', $aboutDetailsId,'click', 'about');

   })

   //closing about modals
   $('#about-me').on('click', '.about-details-close', function(e){
      e.preventDefault();
      $(this)
      .closest('.about-details')
      .not(':animated')
      .hide();
      ga('send', 'event', 'about modal close','click', 'about');
   })

   //closing modals by clicking outside the box
   $(".about-details").on('click', function(e) {
      if ($(e.target).closest('.about-details-box').length === 0){
         $(".about-details").slideUp();
         //scrolling with page-scroll plugin code
         $('html, body').stop().animate({
            scrollTop: ($('#about-me').offset().top - 1)
         }, 1250, 'easeInOutExpo');
         ga('send', 'event', 'about modal close outside modal','click', 'about');
      }
   });





   /*SKILL DETAILS*/

   //opening skills
   $('.skills').on('click', '.skill-click-area', function(e){
      e.preventDefault();
      var $clickedSkill = $(this).closest('.skill');
      $clickedSkill
      .hide()
      .next('.skill-details')
      .show();
      $clickedSkillId = $clickedSkill.attr('id');
      ga('send', 'event', $clickedSkillId,'click', 'skills');

   });

   //closing skills
   $('.skills').on('click', '.skill-close', function(e){
      e.preventDefault();
      var $skillToClose = $(this).closest('.skill-details');
      $skillToClose
      .hide()
      .prev('.skill')
      .show();
      ga('send', 'event', 'skill close','click', 'skills');

   });




   /*    COOKIE BANNER CLOSE*/
   $('#cookie-banner-close').click(function(event){
      $('.cookie-banner').hide();
      ga('send', 'event', 'cookie banner closed','click', 'general');


   })
});
