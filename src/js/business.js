$(document).ready(() => {
    const officeSlider = $('.officeSlider');
    // to avoid animation bug in slick slider (when slide from last to first)
    // set slidesToShow equal number of items - 1
    let slidesToShow = officeSlider.children().length - 1;

    officeSlider.slick({
        slidesToShow: slidesToShow,
        speed: 800,
        centerMode: true,
        variableWidth: true,
        nextArrow: $('.officePrevArrow'),
        prevArrow: $('.officeNextArrow'),
    });


    const saleStaffSlider = $('.saleStaffSlider');
    slidesToShow = saleStaffSlider.children().length - 1;

    saleStaffSlider.slick({
        slidesToShow: slidesToShow,
        speed: 800,
        centerMode: true,
        variableWidth: true,
        nextArrow: $('.saleStaffPrevArrow'),
        prevArrow: $('.saleStaffNextArrow'),
    });
});


let officeSliderImgArray = [];
let saleStaffSliderImgArray = [];

$('.business-slider__slider-img--office').each(function () {
    officeSliderImgArray.push({
        src: $(this).attr('src'),
        alt: $(this).attr('alt'),
        title: $(this).attr('title'),
    });
});
$('.business-slider__slider-img--saleStaff').each(function () {
    saleStaffSliderImgArray.push({
        src: $(this).attr('src'),
        alt: $(this).attr('alt'),
        title: $(this).attr('title'),
    });
});

console.log(officeSliderImgArray, saleStaffSliderImgArray);

$('.business-slider__slider-img--office').on('click', { array: officeSliderImgArray }, handleImgSliderClick);
$('.business-slider__slider-scale--office').on('click', { array: officeSliderImgArray }, handleImgSliderClick);

$('.business-slider__slider-img--saleStaff').on('click', { array: saleStaffSliderImgArray }, handleImgSliderClick);
$('.business-slider__slider-scale--saleStaff').on('click', { array: saleStaffSliderImgArray }, handleImgSliderClick);


