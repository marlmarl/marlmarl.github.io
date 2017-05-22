$( document ).ready(function() {
    
    /*MENU*/

    $('#menu-open').click(function(event){
        $('#mini-nav').hide();
        $('#main-nav').css("display", "flex");
        ga('send', 'event', 'manu open','click', 'menu');
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
        ga('send', 'event', 'passions details','click', 'about');
    })

    $('#about3-close').click(function(event){
        $('#about3-details').hide();
        ga('send', 'event', 'passions close','click', 'about');
    })

    $('#about4').click(function(event){
        $('#about4-details').show();
        ga('send', 'event', 'what am i looking for','click', 'about');
    })

    $('#about4-close').click(function(event){
        $('#about4-details').hide();
        ga('send', 'event', 'what am i looking close','click', 'about');
    })



    /*CLOSING ABOUT DETAILS CLICK OUTSIDE MODAL*/

    $("html").click(function(event) {
        
            if (($('#about1-details').is(":visible")) && ($(event.target).closest('#about1-details').length === 0) && ($(event.target).closest('#about1').length === 0)) {
            $("#about1-details").hide();
            ga('send', 'event', 'experience close outside window','click', 'about');
            

        }
            if (($('#about2-details').is(":visible")) && ($(event.target).closest('#about2-details').length === 0) && ($(event.target).closest('#about2').length === 0)) {
            $("#about2-details").hide();
            ga('send', 'event', 'education close outside window','click', 'about');

        }
            if (($('#about3-details').is(":visible")) && ($(event.target).closest('#gabout3-details').length === 0) && ($(event.target).closest('#about3').length === 0)) {
            $("#about3-details").hide();
            ga('send', 'event', 'passions close outside window','click', 'about');

        }
            
            if (($('#about4-details').is(":visible")) && ($(event.target).closest('#about4-details').length === 0) && ($(event.target).closest('#about4').length === 0)) {
            $("#about4-details").hide();
            ga('send', 'event', 'whai am i close outside window','click', 'about');

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
        ga('send', 'event', 'desugn','click', 'skills');
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
    
});

