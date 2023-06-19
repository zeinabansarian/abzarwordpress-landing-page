$('.nnn').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3

        }
    }
})


$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5

        }
    }
})


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".nav").addClass("sticky");
    } else {
        $(".nav").removeClass("sticky");
    }
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".res-nav").addClass("sticky");
    } else {
        $(".res-nav").removeClass("sticky");
    }
});



$(".res-user-icon").click(function() {
    $(".panel").toggleClass("menu-res-open");
    $('.res-user-icon').toggleClass('menu-op');
});
$(".res-search-icon").click(function() {
    $(".search-drop").toggleClass("menu-res-open");
    $('.res-search-icon').toggleClass('menu-op');
});
$(".res-menu").click(function() {
    $(".resp-menu").toggleClass("dropmenu-res-open");
    $('.res-menu').toggleClass('menu-op');
});
$(".rotate-click").click(function() {
    $(this).find(".fa-chevron-right").toggleClass("rotate-js");
    $(this).find(".wordpress-drop").toggleClass("open-child");
});