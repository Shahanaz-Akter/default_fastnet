(function ($) {
    "use strict";
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });

    $(window).on("load", function (event) {
        $("#pre-loader").delay(800).fadeOut(500);
    });

    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199",
    });

    // Index 01 Testimonial Slider
    $(".testimonial-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        center: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
                center: false,
            },
            992: {
                items: 3,
            },
        }
    });

    $(".team-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        center: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
                center: false,
            },
            992: {
                items: 3,
            },
        }
    });

    // Index 02 Product Slider
    $(".product-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });

    // Index 02 Testimonial Slider
    $(".testimonial-slider-area-2").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        center: true,
        items: 1,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });

    // Index 03 Testimonial Slider
    $(".testimonial-slider-area-3").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 20,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
        }
    });

    // Video PopUp
    $(".video-popup").magnificPopup({
        type: "iframe",
    });

    // language select
    $("select").niceSelect();

    // Input Plus & Minus Number JS
    $('.input-counter').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // Tween Max
    $('.main-banner').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('span, .shape4, .shape5, .banner-text-area-1').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });

    $('.about-1').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('.container').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });

    $('.footer-group').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('.shape1, .shape2').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });


    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Go to Top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });

    //Barfiller 
    $(".progress-bar-area").appear(function () {
        $('#bar1').barfiller({
            duration: 2500,
        });
        $('#bar2').barfiller({
            duration: 2500,
        });
        $('#bar3').barfiller({
            duration: 2500,
        });
        $('#bar4').barfiller({
            duration: 2500,
        });
    });

    $('.js-tilt').tilt({
        perspective: 1500,
    })

    // Fun Facts Area
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }





})(jQuery);


// Custom JS

//   shorter way
//   $('.mobile_banking__').click(function{

//   }
$(document).ready(function () {

    var mobile_banking__ = $('.mobile_banking__');

    mobile_banking__.click(function () {

        var user_portal = $('.user_portal');
        var mobile_banking = $('.mobile_banking');
        var mobile_banking_class_present = mobile_banking.hasClass('d-none');

        // console.log(mobile_banking);
        console.log(mobile_banking_class_present);

        if (mobile_banking_class_present) {
            mobile_banking.removeClass('d-none');
            user_portal.addClass('d-none');

        }

    });


    var user_portal__ = $('.user_portal__');

    user_portal__.click(function () {

        var mobile_banking1 = $('.mobile_banking');
        var user_portal = $('.user_portal');
        var user_portal_class_present = user_portal.hasClass('d-none');


        // console.log(mobile_payment);
        console.log(user_portal_class_present);

        if (user_portal_class_present) {
            user_portal.removeClass('d-none');
            mobile_banking1.addClass('d-none');
        }
    });


    $('.bkash__').click(function () {
        var bkash = $('.bkash');
        var bkash_class_present = bkash.hasClass('d-none');
        console.log(bkash_class_present);

        var rocket = $('.rocket');

        var nogod = $('.nogod');



        if (bkash_class_present) {

            bkash.removeClass('d-none');
            rocket.addClass('d-none');
            nogod.addClass('d-none');
        }

    });

    $('.rocket__').click(function () {

        var rocket1 = $('.rocket');
        var rocket_class_present1 = rocket1.hasClass('d-none');
        console.log(rocket_class_present1);

        var bkash1 = $('.bkash');

        var nogod1 = $('.nogod');

        if (rocket_class_present1) {
            rocket1.removeClass('d-none');
            bkash1.addClass('d-none');
            nogod1.addClass('d-none');
        }

    });



    $('.nagad__').click(function () {



        var nogod2 = $('.nogod');
        var nogod_class_present2 = nogod2.hasClass('d-none');
        console.log(nogod_class_present2);


        var rocket2 = $('.rocket');

        var bkash2 = $('.bkash');

        if (nogod_class_present2) {
            nogod2.removeClass('d-none');
            rocket2.addClass('d-none');
            bkash2.addClass('d-none');
        }

    });



});
