var slider = $('.slider');

function sliderInit() {
    slider.slick({
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1
    });
}

$('.carousel').carousel({
    interval: 4000,
    pause: 'hover'
});

$(function () {
    // Auto play modal video
    $(".video-player").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto =
                videoSRC +
                "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + " iframe").attr("src", videoSRCauto);
        $(theModal + " button.close").click(function () {
            $(theModal + " iframe").attr("src", videoSRC);
        });
    });
});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('#year').text(new Date().getFullYear());

if (slider) {
    sliderInit();
}