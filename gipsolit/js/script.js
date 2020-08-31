const slider = document.querySelector('.slider-reviews')

let mySwiper = new Swiper(slider, {
    slideClass: 'item-slider',
    wrapperClass: 'slider-reviews__wrapper',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-reviews__next',
        prevEl: '.slider-reviews__prev',
    }

})


const prevItem = document.querySelectorAll('.item-slider__prev-item')

prevItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        prevItem.forEach(item => {
            item.classList.remove('prev-item__active')
        })
        item.classList.add('prev-item__active')

    })
})