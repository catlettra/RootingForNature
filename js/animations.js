$(document).ready(function (){

    $(window).scroll(function () {
        $('.hero-text').each(function (i) {
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('animate__animated animate__fadeInDown');
            }
        })
    });

    $(window).scroll(function () {
        $('.section-w').each(function (i) {
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('animate__animated animate__slideInLeft');
            }
        })
    });

    $(window).scroll(function () {
        $('.animate-contacts').each(function (i) {
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('animate__animated animate__swing');
            }
        })
    });



});