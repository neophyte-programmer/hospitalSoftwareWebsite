/*
$(function () {
    $(document).scroll(function(){
        var $nav = $('.nav')
        $nav.toggleClass('scroll', (this).scrollTop() > $nav.height())
    })
})
*/

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
