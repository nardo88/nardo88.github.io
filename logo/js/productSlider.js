

// ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА В КАРТОЧКЕ ТОВАРОВ

const productSlider = document.querySelector('.product-slider__section')

let productSwiper = new Swiper(productSlider, {
    slideClass: 'product-slider__item',
    wrapperClass: 'product-slider__wrapper',
  
})


// НАВИГАЦИЯ СЛАЙДЕРА КАРТОЧКИ ТОВАРОВ
const navigationItem = document.querySelectorAll('.navigation-product-slider__item')

navigationItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        productSwiper.slideTo(i)

        navigationItem.forEach(item => {
            item.classList.remove('active-nav-item')
        })

        item.classList.toggle('active-nav-item')
        
    })
})


// ФУНКЦИОНАЛ УКАЗАНИЯ КОЛИЧЕСТВА В КАРТОЧК ТОВАРОВ
const sumNavPrev = document.querySelector('.sum-nav__prev')
const sumNavNext = document.querySelector('.sum-nav__next')
const sumNavValue = document.querySelector('.sum-nav__value')

sumNavValue.value = 1

sumNavNext.addEventListener('click', () => {
    if (sumNavValue.value < 1){
        sumNavValue.value = 0
    }
    sumNavValue.value++
})

sumNavPrev.addEventListener('click', () => {
    if (sumNavValue.value > 1){
        sumNavValue.value--
    }
    if (sumNavValue.value < 1){
        sumNavValue.value = 1
    }
})

// ТАБЫ




const tabProductLink = document.querySelectorAll('.tab-product__link')
const tabProductContent = document.querySelectorAll('.tab-product__content-item')

tabProductLink.forEach((item, i) => {
    item.addEventListener('click', () => {
        tabProductLink.forEach(item => {
            item.classList.remove('tab-product__active-link')
        })

        item.classList.add('tab-product__active-link')

        tabProductContent.forEach(item => {
            item.classList.remove('active-tab-product')
        })

        tabProductContent[i].classList.add('active-tab-product')
    })
})

