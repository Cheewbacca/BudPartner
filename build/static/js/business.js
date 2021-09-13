$('document').ready(() => {
    $('.slider').each(function() {
        const slidesToShow = $(this).children().length - 1;
        const nextArrow = $(this).next('.business-slider__buttons').find('.nextArrow');
        const prevArrow = $(this).next('.business-slider__buttons').find('.prevArrow');

        $(this).slick({
            slidesToShow: slidesToShow,
            speed: 800,
            centerMode: true,
            variableWidth: true,
            nextArrow: nextArrow,
            prevArrow: prevArrow,
        });

        const imageArray = [];
        const sliderImg = $(this).find('.slider-img');
        const sliderScale = $(this).find('.slider-scale');

        sliderImg.each(function () {
            imageArray.push({
                src: $(this).attr('src'),
                alt: $(this).attr('alt'),
                title: $(this).attr('title'),
            });
        });

        sliderImg.on('click', { array: imageArray }, handleImgSliderClick);
        sliderScale.on('click', { array: imageArray }, handleImgSliderClick);
    });
});

