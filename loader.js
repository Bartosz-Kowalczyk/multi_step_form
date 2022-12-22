function changeVisibility() {
    document.getElementById('container').classList.add('active');
    document.getElementById('loader').classList.remove('active');
    document.getElementById('circle').classList.remove('active');
}

window.onload = function() {
    changeVisibility();
}


