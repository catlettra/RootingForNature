$(document).ready(function (){

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

    $(window).scroll(function () {
        $('.title-leaf').each(function (i) {
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('opacity-0');
                $(this).addClass('animate__animated animate__fadeIn animate__slow');
            }
        })
    });

    $(window).scroll(function () {
        $('.drone-left').each(function (i) {
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('opacity-0');
                $(this).addClass('animate__animated animate__slideInLeft');
            }
        })
    });

    $(window).scroll(function () {
        $('.drone-right').each(function (i) {
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('opacity-0');
                $(this).addClass('animate__animated animate__slideInRight');
            }
        })
    });



});