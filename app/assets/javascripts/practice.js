// window.onloadは複数書くと上書きされてしまう
window.onload = function() {
    const child = document.querySelector('.child');
    const cb = function (entries,observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
                console.log('inview')
            } else {
                entry.target.classList.remove('inview');
                console.log('out view')
            }
        });

    }
    const options = {
        root: null,
        rootMargin: "-300px 0px",
        threshold: [0, 0.5, 1]
    };

    const io = new IntersectionObserver(cb,options);
    io.observe(child);


};
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const h1 = document.querySelector('h1');
    function hello() {
        alert('hello');
        // this.style.color = 'red';
    }
    function changeColor() {
        h1.style.color = 'red';
    }
    function changeBgColor() {
        h1.style.backgroundColor = 'green';
    }
    btn.addEventListener('click', changeColor);
    btn.addEventListener('click', changeBgColor);
    btn.removeEventListener('click', changeBgColor);
});

