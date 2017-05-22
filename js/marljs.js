$( document ).ready(function() {
    
    /*MENU*/

    $('#menu-open').click(function(event){
        $('#mini-nav').hide();
        $('#main-nav').css("display", "flex");
    })

    $('#menu-close').click(function(event){
        $('#main-nav').hide();
        $('#mini-nav').show();
    })

    $('#home-open').click(function(event){
        $('#main-nav').hide();
        $('#mini-nav').show();
    })

    $('#about-open').click(function(event){
        $('#main-nav').hide();
        $('#mini-nav').show();
    })

    $('#skills-open').click(function(event){
        $('#main-nav').hide();
        $('#mini-nav').show();
    })


    $('#contact-open').click(function(event){
        $('#main-nav').hide();
        $('#mini-nav').show();
    })

    /*ABOUT DETAILS*/

    $('#about1').click(function(event){
        $('#about1-details').show();
        ga('send', 'event', 'experience details','click', 'about');
    })

    $('#about1-close').click(function(event){
        $('#about1-details').hide();
    })

    $('#about2').click(function(event){
        $('#about2-details').show();
        ga('send', 'event', 'education details','click', 'about');
    })

    $('#about2-close').click(function(event){
        $('#about2-details').hide();
    })

    $('#about3').click(function(event){
        $('#about3-details').show();
        ga('send', 'event', 'passions details','click', 'about');
    })

    $('#about3-close').click(function(event){
        $('#about3-details').hide();
    })

    $('#about4').click(function(event){
        $('#about4-details').show();
        ga('send', 'event', 'what i am looking for','click', 'about');
    })

    $('#about4-close').click(function(event){
        $('#about4-details').hide();
    })



    /*CLOSING ABOUT DETAILS CLICK OUTSIDE MODAL*/

    $("html").click(function(event) {
            if (($('#about2-details').is(":visible")) && ($(event.target).closest('#about2-details').length === 0) && ($(event.target).closest('#about2').length === 0)) {
            $("#about2-details").hide();

        }
            if (($('#about3-details').is(":visible")) && ($(event.target).closest('#gabout3-details').length === 0) && ($(event.target).closest('#about3').length === 0)) {
            $("#about3-details").hide();

        }
            if (($('#about1-details').is(":visible")) && ($(event.target).closest('#about1-details').length === 0) && ($(event.target).closest('#about1').length === 0)) {
            $("#about1-details").hide();

        }
            if (($('#about4-details').is(":visible")) && ($(event.target).closest('#about4-details').length === 0) && ($(event.target).closest('#about4').length === 0)) {
            $("#about4-details").hide();

        }
    });
    
    /*SKILL DETAILS*/


    $('#skill1-button').click(function(event){
        $('#skill1').hide();
        $('#skill1-details').show();
    })

    $('#skill1-close').click(function(event){
        $('#skill1-details').hide();
        $('#skill1').show();
    })

    $('#skill2-button').click(function(event){
        $('#skill2').hide();
        $('#skill2-details').show();
    })

    $('#skill2-close').click(function(event){
        $('#skill2-details').hide();
        $('#skill2').show();
    })

    $('#skill3-button').click(function(event){
        $('#skill3').hide();
        $('#skill3-details').show();
    })

    $('#skill3-close').click(function(event){
        $('#skill3-details').hide();
        $('#skill3').show();
    })

    $('#skill4-button').click(function(event){
        $('#skill4').hide();
        $('#skill4-details').show();
    })

    $('#skill4-close').click(function(event){
        $('#skill4-details').hide();
        $('#skill4').show();
    })
    
});

