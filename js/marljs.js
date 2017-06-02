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
        $('.tolove > div').hide();
        $('.arrow').css("opacity", "1");
        $('.boxmeetme > div > a').addClass('pulse'); 
        ga('send', 'event', 'intro job','click', 'intro');
    });
    $('.boxheart').click(function(event){
        $('.tolove').addClass('tolovemove');
        $('.tolove > div').hide();
        $('.arrow').css("opacity", "1");
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

    $('#about1').click(function(event){
        $('#about1-details').show();
        ga('send', 'event', 'experience details','click', 'about');
    })

    $('#about1-close').click(function(event){
        $('#about1-details').hide();
        ga('send', 'event', 'experience close','click', 'about');
    })

    $('#about2').click(function(event){
        $('#about2-details').show();
        ga('send', 'event', 'education details','click', 'about');
    })

    $('#about2-close').click(function(event){
        $('#about2-details').hide();
        ga('send', 'event', 'education close','click', 'about');
    })

    $('#about3').click(function(event){
        $('#about3-details').show();
        ga('send', 'event', 'after hours details','click', 'about');
    })

    $('#about3-close').click(function(event){
        $('#about3-details').hide();
        ga('send', 'event', 'after hours close','click', 'about');
    })

    $('#about4').click(function(event){
        $('#about4-details').show();
        ga('send', 'event', 'what am i looking for','click', 'about');
    })

    $('#about4-close').click(function(event){
        $('#about4-details').hide();
        ga('send', 'event', 'what am i looking close','click', 'about');
    })



    /*CLOSING ABOUT DETAILS CLICK OUTSIDE DETAILS BOX*/

    $(".about-details").click(function(event) {
        if ($(event.target).closest('.about-details-box').length === 0){
            $(".about-details").hide();  
            //scrolling with page-scroll plugin code
            $('html, body').stop().animate({
            scrollTop: ($('#about-me').offset().top - 1)
        }, 1250, 'easeInOutExpo');
        }
    });
    

    
    /*SKILL DETAILS*/


    $('#skill1-button').click(function(event){
        $('#skill1').hide();
        $('#skill1-details').show();
        ga('send', 'event', 'code open','click', 'skills');
    })

    $('#skill1-close').click(function(event){
        $('#skill1-details').hide();
        $('#skill1').show();
        ga('send', 'event', 'code close','click', 'skills');
    })

    $('#skill2-button').click(function(event){
        $('#skill2').hide();
        $('#skill2-details').show();
        ga('send', 'event', 'design open','click', 'skills');
    })

    $('#skill2-close').click(function(event){
        $('#skill2-details').hide();
        $('#skill2').show();
        ga('send', 'event', 'design','click', 'skills');
    })

    $('#skill3-button').click(function(event){
        $('#skill3').hide();
        $('#skill3-details').show();
        ga('send', 'event', 'digital open','click', 'skills');
    })

    $('#skill3-close').click(function(event){
        $('#skill3-details').hide();
        $('#skill3').show();
        ga('send', 'event', 'digital close','click', 'skills');
    })

    $('#skill4-button').click(function(event){
        $('#skill4').hide();
        $('#skill4-details').show();
        ga('send', 'event', 'other skills open','click', 'skills');
    })

    $('#skill4-close').click(function(event){
        $('#skill4-details').hide();
        $('#skill4').show();
        ga('send', 'event', 'other skills close','click', 'skills');
    })
    
    
    /*    COOKIE BANNER CLOSE*/
    $('#cookie-banner-close').click(function(event){
        $('.cookie-banner').hide();
        ga('send', 'event', 'cookie banner closed','click', 'general');


     })
});

