// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
    var top__header = $('.top__header'),
        menu__icon = $('.menu__icon'),
        left__panel = $('.left__panel'),
        separation = $('.separation'),
        body = $('.home'),
        theme = $('#theme'),
        theme__switcher = $('.theme__switcher'),
        new__document = '#new__document',
        speed = 200;

    left__panel.hide();

    //menu switch
    menu__icon.on('click', function () {
        menu__icon.toggleClass('menu__open').toggleClass('menu__close');
        separation.removeClass('refresh');
        top__header.removeClass('refresh');

        if (menu__icon.hasClass('menu__close')) {
            left__panel.fadeIn(speed);
            separation.addClass('open');
            top__header.addClass('open');
            localStorage.setItem('menu', 'open');
        } else {
            left__panel.fadeOut(speed);
            separation.removeClass('open');
            top__header.removeClass('open');
            localStorage.setItem('menu', 'close');
        }
    });

    if (localStorage.getItem('menu') === 'open') {
        menu__icon.removeClass('menu__open').addClass('menu__close');
        left__panel.show();
        separation.addClass('open');
        top__header.addClass('open');
    } else {
        left__panel.hide();
        menu__icon.removeClass('menu__close').addClass('menu__open');
        separation.removeClass('open');
        top__header.removeClass('open');
    }

    theme__switcher.on('click', function () {
        body.toggleClass('dark__theme');
        if (body.hasClass('dark__theme')) {
            theme.addClass('dark__theme--switch');
            localStorage.setItem('theme', 'dark');
        } else {
            theme.removeClass('dark__theme--switch');
            localStorage.setItem('theme', 'light');
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        theme.addClass('dark__theme--switch');
        body.addClass('dark__theme');
    } else {
        theme.removeClass('dark__theme--switch');
        body.removeClass('dark__theme');
    }

    //    file creation
    
    new__document
});
