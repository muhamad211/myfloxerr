

$(function () {

    AOS.init({
        easing: "ease-in-out-back",
        duration: 1000,   //The duration value can be anywhere between 50 and 3000
        delay: 100,
    });


    // $('.navbar .dropdown').hover(function () {
    //     $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    // }, function () {
    //     $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
    // });

    // ***** OR *****

    $('.navbar .dropdown').hover(function () {
        $(".dropdown-menu").stop(true, true).fadeIn(700);
    }, function () {
        $('.dropdown-menu').stop(true, true).fadeOut(200)
    });




    //  Owl Carousel 
    $('.clients-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').css('box-shadow', ' 0px 5px 4px rgba(0, 0, 0, 0.08)');
        } else {
            $('.navbar').css('box-shadow', 'none');
        }
    });


    $('.navbar a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body')
                .animate({
                    scrollTop: $(hash).offset().top - 100    // - 100 من عندي
                }, 800);
        }
    });


    

    





});




$(document).ready(function () {
    $('.venobox').venobox();
});




// Porfolio isotope and filter
$(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
        $('.venobox').venobox();
    });
});



