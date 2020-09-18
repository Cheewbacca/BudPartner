$('document').ready(() => {
    const slider = $('#ourWorksSlider');
    // to avoid animation bug in slick slider (when slide from last to first)
    // set slidesToShow equal number of items - 1
    const slidesToShow = slider.children().length - 1;

    slider.slick({
        slidesToShow: slidesToShow,
        speed: 800,
        centerMode: true,
        variableWidth: true,
        nextArrow: $('#prevArrow'),
        prevArrow: $('#nextArrow'),
    });

});

const arrayOfSliderImgSrc = [];
$('.our-works__slider-img').each(function () {
    arrayOfSliderImgSrc.push({
        src: $(this).attr('src'),
        alt: $(this).attr('alt'),
        title: $(this).attr('title'),
    });
});

$('.our-works__slider-img').on('click', { array: arrayOfSliderImgSrc }, handleImgSliderClick);
$('.our-works__slider-scale').on('click', { array: arrayOfSliderImgSrc }, handleImgSliderClick);





