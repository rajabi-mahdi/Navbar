window.onload = function () {
    document.querySelector('.burger span').addEventListener('click', function () {
        document.querySelector('.menu').classList.toggle('show-nav');
    })
}