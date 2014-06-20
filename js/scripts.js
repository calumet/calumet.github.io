// Calumet - Software Development Group
// Website, Styles, 2014

/*
Luis González
Duvan Vargas
Yadiana Laitón
Carlos Rojas
Danay Quintero
Diego Cacua
Juan Martínez
Liliana Rey
Mónica Cárdenas
Nestor Rodrigez
Patricia Patiño
Romel Pérez
*/

jQuery(document).ready(function ($) {
    
    // Who are using these projects?
    $('.whousingthese').bxSlider({
        slideWidth: 400,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 10,
        captions: true,
        onSliderLoad: function () {
            $('.whousingthese img').removeAttr('title');
        }
        //,mode: 'vertical'
    });

    // Gallery overview script
    $('#content-slides').slides({
        preload: true,
        generateNextPrev: true
    });

    // Parallax and Menu scroll script
    $('#nav, .menu').localScroll({offset: -70});
    $('#tech').parallax("50%", 0.3);
    $('#features').parallax("50%", 0.3);

    // Responsive Menu  
    $("#menu").click(function () {
        $("ul.menu").toggle();
    });

    // Intro slideshow Script
    $("#slide").responsiveSlides({
        maxwidth:12000,
        speed: 800
    });


    // Testimonials Script
    var currentPosition = 0;
    var slideWidth = 960;
    var slides = $('.team-slide');
    var numberOfSlides = slides.length;
    var slideShowInterval;
    var speed = 8000;

    slideShowInterval = setInterval(changePosition, speed);
    
    slides.wrapAll('<div id="slidesHolder"></div>')
    
    slides.css({ 'float' : 'left' });
    
    $('#slidesHolder').css('width', slideWidth * numberOfSlides);
    
    function changePosition() {
        if(currentPosition == numberOfSlides - 1) {
            currentPosition = 0;
        } else {
            currentPosition++;
        }
        moveSlide();
    }
    function moveSlide() {
        $('#slidesHolder').animate({'marginLeft' : slideWidth*(-currentPosition)});
    }


    // Lightbox gallery script
    $('.lightbox_trigger').click(function(e) {
        
        //prevent default action (hyperlink)
        e.preventDefault();
        
        //Get clicked link href
        var image_href = $(this).attr("href");
        
        /*  
        If the lightbox window HTML already exists in document, 
        change the img src to to match the href of whatever link was clicked
        
        If the lightbox window HTML doesn't exists, create it and insert it.
        (This will only happen the first time around)
        */
        
        if ($('#lightbox').length > 0) { // #lightbox exists
            
            //place href as img src value
            $('#content').html('<img src="' + image_href + '" />');
            
            //show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
        }
        
        else { //#lightbox does not exist - create and insert (runs 1st time only)
            
            //create HTML markup for lightbox window
            var lightbox = 
            '<div id="lightbox">' +
                '<p>Click to close</p>' +
                '<div id="content">' + //insert clicked link's href into img src
                    '<img src="' + image_href +'" />' +
                '</div>' +  
            '</div>';
                
            //insert lightbox HTML into page
            $('body').append(lightbox);
        }
        
    });

    //Click anywhere on the page to get rid of lightbox window
    $('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
        $('#lightbox').hide();
    });

});
