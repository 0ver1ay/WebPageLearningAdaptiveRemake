let hamburger = document.querySelector('.header__menu');
let overlay = document.querySelector('.overlay');
let mobile__menu = document.querySelector('.mobile__menu')

hamburger.addEventListener('click',function (){

    if (hamburger.classList.contains('open')) {
        hamburger.classList.remove('open')
        hamburger.classList.add('closed')

        overlay.classList.remove('visible')
        overlay.classList.add('invisible')
        overlay.classList.add('displaynone')

        mobile__menu.classList.remove('visible')
        mobile__menu.classList.add('invisible')
        mobile__menu.classList.add('displaynone')
    } else {
        hamburger.classList.remove('closed')
        hamburger.classList.remove('displaynone')
        hamburger.classList.add('open')

        overlay.classList.remove('invisible')
        overlay.classList.remove('displaynone')
        overlay.classList.add('visible')

        mobile__menu.classList.remove('invisible')
        mobile__menu.classList.remove('displaynone')
        mobile__menu.classList.add('visible')
    }
})


