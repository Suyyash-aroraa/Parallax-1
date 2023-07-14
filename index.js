let moon = document.getElementById('moon');
let bgLeft = document.querySelector('.bg-left');
let bgRight = document.querySelector('.bg-right');

document.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value < 1200){
        moon.style.top = (value * 1.25) + 'px';
    }
    
})