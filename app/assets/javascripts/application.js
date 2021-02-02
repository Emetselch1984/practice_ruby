//= require jquery3
//= require popper
//= require bootstrap
//= require libs/scroll-polyfill
//= require libs/scroll
//= require libs/text-animation

document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
});
