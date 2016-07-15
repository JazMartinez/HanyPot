var mobileMenu = $('.open-menu');

mobileMenu.click(function () {
   if (mobileMenu.hasClass('open')) {
       mobileMenu.removeClass('open')
   } else {
       mobileMenu.addClass('open')
   }
});

var win = window.location.pathname;

function windowSize(){
    if ($(window).width() <= '768'){
        $('.hp-user').hide();
    } else {
        $('.hp-user').show();
    }
}

if (win == "/filter.html" || win == "/filterlogout.html") {
    var snapSlider = document.getElementById('slider');

    noUiSlider.create(snapSlider, {
        start: [ 18, 100 ],
        tooltips: [ wNumb({ decimals: 0 }), wNumb({ decimals: 0 }) ],
        connect: true,
        limit: 82,
        step: 1,
        range: {
            'min': [0],
            'max': [120]
        }
    });
}
if (win == "/index.html" || win == "/") {
    $('.hp-message').hide();
    $('.mobile-sidebar').hide();
} else {
    $(window).load(windowSize);
    $(window).resize(windowSize);
}


console.log(win);
$(document).ready(function () {
    //Анимация перехода страниц
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });
    //Выбор города
    var locationBtn = $('.hp-city'),
        cityChange  = $('.hp-location-items'),
        langChange  = $('.hp-language');

    locationBtn.click(function () {
        if (cityChange.css('height') == '420px') {
            cityChange.animate({height: "0", padding: "0"}, 400);
            langChange.fadeIn(400);
            locationBtn.removeClass('open')
        } else {
            cityChange.animate({height: "420px", padding: "25px 0 40px"}, 400);
            langChange.fadeOut(400);
            locationBtn.addClass('open')
        }
    });

    //Слайдер в личном кабинете
    $('#lk-photo-slider').sliderPro({
        width: 180,
        height: 166,
        arrows: true,
        fadeArrows: false,
        buttons: false,
        startSlide: 1,
        fade: false,
        loop: false,
        autoplay: false,
        centerImage: false,
        slideDistance: 10,
        visibleSize: '70%'
    });

    //Слайдер в игре

    //Слайдер стиля визиток
    $('#slider-styles').sliderPro({
        width: 350,
        height: 94,
        orientation: 'vertical',
        buttons: false,
        arrows: true,
        fadeArrows: false,
        startSlide: 2,
        allowScaleUp: false,
        loop: false,
        centerImage: false,
        slideDistance: 40,
        autoplay: false,
        visibleSize: '100%'
    });
    //Слайдер стиля визиток
    $('#info-slider').sliderPro({
        width: '100%',
        height: 384,
        buttons: false,
        arrows: true,
        fadeArrows: false,
        slideDistance: 30,
        autoplay: false,
        thumbnailWidth: 163,
        thumbnailHeight: 120,
        thumbnailArrows: false
    });
    //Сайдбар свернуть, развернуть
    var turnBtn = $('.turn'),
        sidebar = $('#sidebar');

    turnBtn.click(function () {
        if (sidebar.hasClass('sb-open')) {
            sidebar.removeClass('sb-open');
            sidebar.addClass('sb-close');
            turnBtn.text('Развернуть');
            turnBtn.addClass('open');
            $('.filter-items').addClass('sidebar-hide');
        } else {
            sidebar.removeClass('sb-close');
            sidebar.addClass('sb-open');
            turnBtn.text('Свернуть');
            turnBtn.removeClass('open');
            $('.filter-items').removeClass('sidebar-hide');
        }
    });
    //Шаги регистрации
    var stepOne = $('.step-one'),
        stepTwo = $('.step-two');

    stepOne.click(function () {
        $('#step-line section').addClass('two');
    });
    stepTwo.click(function () {
        $('#step-line section').removeClass('two');
    })
});

$(".input-phone").mask("+7 (999) 999-9999");

var continueBtn = $('.continue-reg'),
    stepOne = $('.hp-reg-step-one'),
    stepTwo = $('.hp-reg-step-two'),
    resetTel = $('.reset');

stepTwo.hide();

continueBtn.click(function () {
    if (stepOne.show()) {
        stepOne.fadeOut(400);
        setTimeout(function () {
            stepTwo.fadeIn(400)
        }, 400)
    }
});

resetTel.click(function () {
    $(this).prev('.input-phone').val('')
});
