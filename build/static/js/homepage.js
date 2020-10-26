function preloadImage(src){
    let img = new Image();
    img.src = src;
}

let allImages = [];
let imagesStack = [];

$.getJSON( "static/img/img.json", function( data ) {
    $.each(data.images, function(key, value){
        $.each(this, function(key, value) {
            preloadImage(value);
            imagesStack.push(value);
        });
        allImages.push(imagesStack);
        imagesStack = [];
    });
  });

$.each($('.our-products__content ul li a:not(".subm")'), function(linkIndex){
    $(this).mouseover(function(){
        if (linkIndex){
            $(this).addClass('active-link');
            $.each($('.our-products__image-box').children(), function(imgIndex){
                $(this).fadeOut(300, ()=>{
                    $(this)[0].src = allImages[linkIndex][imgIndex];
                    $(this).fadeIn();
                });

            });
        }
    });
    $(this).mouseleave(function(){
        if (linkIndex){
            $(this).removeClass('active-link');
            $.each($('.our-products__image-box').children(), function(imgIndex){
                $(this).fadeOut(300, ()=>{
                    $(this)[0].src = allImages[0][imgIndex];
                    $(this).fadeIn();
                });
            });
        }
    });
});

(function($) {
    $(function() {
            let a = 0;
            $(window).scroll(function() {
                let oTop = $('.numbers').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.numbers .numbers__item .text-block').each(function() {
                        let $this = $(this).find('.number'),
                            countTo = $this.attr('data-number');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2500,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                            }
                        });
                    });
                    a = 1;  
                }
            });
    });
})(jQuery);

$(window).scroll(function(event) {

    var currentWidth = $(window).width();

    const portfolio__galery = $('.portfolio__galery-body'); 

    if ($(window).scrollTop() > $('.portfolio__wrapper').offset().top - window.innerHeight && currentWidth > 768) {
        var scrolled = $(window).scrollTop();
        portfolio__galery.css({
            'transform' : 'translate(0px, ' + ( scrolled * 0.1 - window.innerHeight / 2 ) + 'px)'
        });
    }

});

if ($(window).width() <= 768){
    $('.top-section .active-link').appendTo($('.top-section .active-link').parent().siblings('.choose-us__content'));
}
