document.addEventListener('DOMContentLoaded', function () {

    (function () {
        'use strict'

        function headerFixed() {

            let el = q('.header'),
                w_top = window.pageYOffset,
                w_width = window.innerWidth

            if (w_width >= 1200) {
                if (w_top > 0) {
                    el.classList.add('scrolled')
                } else {
                    el.classList.remove('scrolled')
                }
            } else {
                el.classList.remove('scrolled')
            }

            function addShowAnimate(el) {
                el.classList.add('show-animate')
            }
        }

        window.addEventListener('scroll', headerFixed)
        window.addEventListener('load', headerFixed)
        window.addEventListener('resize', headerFixed)
    })();



    function q(selector) {
        return document.querySelector(selector);
    }

    function qq(selector) {
        return document.querySelectorAll(selector);
    }

});