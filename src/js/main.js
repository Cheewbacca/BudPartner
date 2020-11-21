document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const header = $('header');
var lastScrollTop = 0;

$(window).scroll(function(event) {

    var currentWidth = $(window).width();

    if ($(window).scrollTop() > 700) {
        header.addClass('header__scroll');
        if (currentWidth > 768){
            $('.burger__wrapper-top ul li.nav_items img').attr('src', 'static/img/arrow-dark.svg');
        }
        header.children('nav').children('ul').children('li').addClass('heading-arrow');
        $('.contact-us .social-list').fadeIn(500, ()=>{ $('.contact-us .social-list').addClass('scrolled'); });
    } else {
        header.removeClass('header__scroll');
        $('.burger__wrapper-top ul li.nav_items img').attr('src', 'static/img/arrow.svg');
        header.children('nav').children('ul').children('li').removeClass('heading-arrow');
        $('.contact-us .social-list').fadeIn(500, ()=>{ $('.contact-us .social-list').removeClass('scrolled'); });
    }

    if ($(window).scrollTop() > $('footer').offset().top) {
        $('.contact-us .social-list').fadeIn(500, ()=>{ $('.contact-us .social-list').removeClass('scrolled'); });
    }

});

if ($(window).width() < 768){
    $('#burger').on('click', function(e){   
        e.preventDefault();
        $('.burger__wrapper').css('transform', 'translate(0)');
    });
}

$(window).on('resize', function(){
    if ($(window).width() < 768){
        $('#burger').on('click', function(e){   
            e.preventDefault();
            $('.burger__wrapper').css('transform', 'translate(0)');
        });
    }else {
        $('#burger').off('click');
    }
});

$('#cross').on('click', function(e){
    e.preventDefault();
    $('.burger__wrapper').css('transform', 'translate(100%)');
    e.stopPropagation();
});

$("#consultation_phone").inputmask({"mask": "(+380) 99-999-99-99"});