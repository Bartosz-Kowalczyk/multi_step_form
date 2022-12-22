function changeVisibility() {
    setTimeout(() => {
        document.getElementById('container').classList.add('active');
        document.getElementById('loader').classList.remove('active');
        document.getElementById('circle').classList.remove('active');
    }, 1000);

};

window.addEventListener('load', changeVisibility);

