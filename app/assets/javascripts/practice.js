const child = document.querySelector('.child');
const cb = function (entries,observer){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('inview')
        } else {
            console.log('out view')
        }
    });
}
const io = new IntersectionObserver(cb);
io.observe(child);
