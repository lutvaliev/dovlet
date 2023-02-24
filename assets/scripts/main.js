// Homepage top slider 
var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
});

var swiper = new Swiper(".mySwiperImg", {
    slidesPerView: 5,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-nextImg",
        prevEl: ".swiper-button-prevImg",
    },
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".mySwiperVideo", {
    slidesPerView: 5,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-nextVideo",
        prevEl: ".swiper-button-prevVideo",
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


var swiper = new Swiper(".mySwiperPhotos", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".nextPhoto",
        prevEl: ".prevPhoto",
    },
    autoplay: {
        delay: 2000,
    },
});

$('.events_tab').click(function (e) {
    //Toggle tab link
    $(this).addClass('active-tab').siblings().removeClass('active-tab');

    //Toggle target tab
    $($(this).attr('href')).addClass('active_slider').siblings().removeClass('active_slider');
});

$('.openMenu').click(function () {
    $(this).closest('.container').find('.nav_menu').toggleClass('showMenu')
})

// function Scrolldown() {
//     document.getElementById("documents1").scrollToBottom(0);
// }

// window.onload = Scrolldown;