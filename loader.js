function changeVisibility() {
    setTimeout(() => {
        document.getElementById('container').classList.add('visible');
        document.getElementById('loader').classList.remove('visible');
        document.getElementById('circle').classList.remove('visible');
    }, 2000);

};

window.addEventListener('load', changeVisibility);

