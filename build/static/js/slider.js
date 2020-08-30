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