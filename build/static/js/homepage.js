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

function random(){
    return Math.floor(Math.random()*2) == 1 ? 1 : -1 * Math.floor((Math.random() * 11) + 1);
}

$.each($('.our-products__content ul li a:not(".subm")'), function(linkIndex){
    $(this).mouseover(function(){
        $.each($('.our-products__image-box').children(), function(imgIndex){
            $(this)[0].src = allImages[linkIndex][imgIndex];
            $(this)[0].style.top = `${random()}%`;
            $(this)[0].style.left = `${random()}%`;
            $(this)[0].style.right = `${random()}%`;
            $(this)[0].style.bottom = `${random()}%`;
        });
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

$(window).scroll(function() {
    const portfTop = $('.portfolio__wrapper').offset().top - window.innerHeight;
    const portfolio__galery = $('.portfolio__galery-body-column'); 
    if ($(window).scrollTop() > portfTop * 1.1) {
        portfolio__galery.addClass('parallax');
    }
});