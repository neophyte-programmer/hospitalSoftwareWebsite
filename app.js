function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


var menu = document.getElementById("icon")
var items = document.getElementById("navbar")

items.style.right = "-360px"

menu.onclick = function () {
    if (items.style.right == "-360px") {
        items.style.right = "0px"
    }
    else {
        items.style.right = "-360px"
    }
}