$(document).ready(() => {
    const officeSlider = $('#officeSlider');
    // to avoid animation bug in slick slider (when slide from last to first)
    // set slidesToShow equal number of items - 1
    let slidesToShow = officeSlider.children().length - 1;

    officeSlider.slick({
        slidesToShow: slidesToShow,
        speed: 800,
        centerMode: true,
        variableWidth: true,
        nextArrow: $('#officePrevArrow'),
        prevArrow: $('#officeNextArrow'),
    });

    const saleStaffSlider = $('#saleStaffSlider');
    // to avoid animation bug in slick slider (when slide from last to first)
    // set slidesToShow equal number of items - 1
    slidesToShow = saleStaffSlider.children().length - 1;

    saleStaffSlider.slick({
        slidesToShow: slidesToShow,
        speed: 800,
        centerMode: true,
        variableWidth: true,
        nextArrow: $('#saleStaffPrevArrow'),
        prevArrow: $('#saleStaffNextArrow'),
    });
});