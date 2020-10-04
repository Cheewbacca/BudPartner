/**
 * Function checks if window has already been created.
 * if yes - set current img as main in window, upadate handlers according to current array
 * and show window.
 * if not - create new window, create handlers and show it
 * Function has one more hidden parameter - array, passed using event.data. This is array of images to show in window!
 * @param {object} e click event
 */
function handleImgSliderClick(e) {
    e.stopPropagation();

    let imgArray = e.data.array;

    let currentSrc = $(this).attr('src');
    if (currentSrc === undefined) {
        currentSrc = $(this).prev('img').attr('src');
    }

    let imgData = imgArray.find(elem => elem.src === currentSrc);

    if ($('#sliderWindow').length === 0) {
        createWindowWithSliderImg(imgData, imgArray);
    } else {
        setImgDataToElem($('.slider-window__img'), imgData, false);
        showWindowAndUpdateHandlers(imgArray);
    }
}


/**
 * Function creates window for scaled slider
 * @param {object} imgData data of clicked img to show it on window opening
 * @param {Array} imgArray  array of images to list in new window
 */
function createWindowWithSliderImg(imgData, imgArray) {
    let windowHtml = `
    <div class="slider-window" id="sliderWindow">
        <img src="${imgData.src}" alt="${imgData.alt} title="${imgData.title}" class="slider-window__img">
        <div class="slider-window__buttons">
            <div class="rounded-button rounded-button--left" id="sliderWindowPrev"></div>
            <div class="rounded-button rounded-button--right" id="sliderWindowNext"></div>
        </div>
        <div class="slider-window__cross" id="sliderWindowCross"></div>
    </div>
    `;

    $('body').append(windowHtml);

    setHandlersForSliderWindow(imgArray);
}


function setHandlersForSliderWindow(imgArray) {
    $('html').on('click', '#sliderWindow', function (e) {
        if (e.target == this) {
            closeWindow();
        }
    });

    $('html').on('click', '#sliderWindowCross', closeWindow);

    $('html').on('click', '#sliderWindowPrev', { array: imgArray }, handlePrevButton);
    $('html').on('click', '#sliderWindowNext', { array: imgArray }, handleNextButton);

    $('html').on('keydown', { array: imgArray }, handleKeyClick);
}

function handleKeyClick(e) {
    e.preventDefault();
    switch (e.keyCode) {
        case 27: // esc
            closeWindow();
            break;
        case 37: // left arrow
            handlePrevButton(e);
            break;
        case 39: // right arrow
            handleNextButton(e);
            break;
    }
}

function handlePrevButton(e) {
    e.stopPropagation();
    let imgArray = e.data.array;
    let currentImgElem = $('.slider-window__img');
    let currentIndex = imgArray.findIndex(elem => elem.src === currentImgElem.attr('src'));
    if (imgArray[currentIndex - 1] !== undefined) {
        setImgDataToElem(currentImgElem, imgArray[currentIndex - 1]);
    } else {
        setImgDataToElem(currentImgElem, imgArray[imgArray.length - 1]);
    }
}


function handleNextButton(e) {
    e.stopPropagation();
    let imgArray = e.data.array;
    let currentImgElem = $('.slider-window__img');
    let currentIndex = imgArray.findIndex(elem => elem.src === currentImgElem.attr('src'));
    if (imgArray[currentIndex + 1] !== undefined) {
        setImgDataToElem(currentImgElem, imgArray[currentIndex + 1]);
    } else {
        setImgDataToElem(currentImgElem, imgArray[0]);
    }
}


function setImgDataToElem(elem, imgData, animate = true) {
    if (animate) {
        $(elem).fadeOut(400, function () {
            $(this).attr('src', imgData.src);
            $(this).attr('alt', imgData.alt);
            $(this).attr('title', imgData.title);

            $(this).fadeIn(400);
        });
    } else {
        $(elem).attr('src', imgData.src);
        $(elem).attr('alt', imgData.alt);
        $(elem).attr('title', imgData.title);
    }
}


function closeWindow() {
    $('#sliderWindow').hide();
    $('html').off('keydown', handleKeyClick);
}


function showWindowAndUpdateHandlers(imgArray) {
    $('#sliderWindow').show();
    $('html').on('keydown', { array: imgArray }, handleKeyClick);
}