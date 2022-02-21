function main() {
    const choiceHRight = document.querySelectorAll('.header__category-right span')    
    const selectBox = document.querySelectorAll('.select-box')
    const mainMenuIcon = document.querySelector('.main-menu-wrap__icon i')
    const mainMenu = document.querySelector('.main-menu-wrap .col')
      
    
    choiceHRight.forEach((element) => {
        element.onclick = function(e) {
            e.stopPropagation()
            selectBox.forEach((select) => {
                select.style.display = 'none'
            })
            this.nextElementSibling.style.display = 'block'
            // selectBox.style.display = selectBox.style.display ? 'none' : 'block' 
        }
    })
    
    
    mainMenuIcon.onclick = function() {
        mainMenu.classList.toggle('active-main-menu')
    }
    
    document.body.onclick = function() {
        selectBox.forEach((e) => {
            e.style.display = 'none'
        })
    }

    function addSelect(elements, pos, additionClass) {
        elements.forEach(e => {
            e.classList.remove(additionClass)
        })

        elements[pos].classList.add(additionClass)
    }
    
    function processBxPaper() {
        const bxPapers = document.querySelectorAll('.slider-wrap__bx-paper-item')
        const sliderWrap = document.querySelector('.slider-wrap')
        const angleLeft = document.querySelector('.slider-wrap__angle-left')
        const angleRight = document.querySelector('.slider-wrap__angle-right')
        const sliderItem = document.querySelectorAll('.slider__item')

        sliderWrap.onmouseover = function() {
            angleLeft.style.transform = 'translate(32px)'
            angleRight.style.transform = 'translate(-32px)'
        }

        sliderWrap.onmouseout = function() {
            angleLeft.style.transform = angleRight.style.transform = ''
        }

        bxPapers.forEach(function(e, i) {

            e.onclick = function() {

                bxPapers.forEach((e) => {
                    e.classList.remove('slider-wrap__bx-paper-item--active')

                })

                var leftPos = i * 1100

                sliderItem.forEach(e => {
                    e.style.left = '-' + leftPos + 'px'
                })
                
                this.classList.toggle('slider-wrap__bx-paper-item--active')
                // console.log(this)
            }
        })

        angleLeft.onclick = function(event) {
            event.preventDefault()
            sliderItem.forEach(e => {
                if (e.style.left == '0px' || !e.style.left)  {
                    var pos = 0
                } else {
                    var pos = Number.parseInt(e.style.left.slice(1, -2))
                }
                var posResult = pos - 1100 < 0 ? (bxPapers.length - 1) * 1100 : pos - 1100

                e.style.left = '-' + posResult + 'px'

                addSelect(bxPapers, (posResult / 1100) , 'slider-wrap__bx-paper-item--active')
            })
        }

        angleRight.onclick = function(event) {
            event.preventDefault()
            sliderItem.forEach(e => {
                if (e.style.left == '0px' || !e.style.left)  {
                    var pos = 0
                } else {
                    var pos = Number.parseInt(e.style.left.slice(1, -2))
                }
            
                var posResult = pos + 1100 > (bxPapers.length - 1) * 1100 ? 
                                0 : pos + 1100

                e.style.left = '-' + posResult + 'px'

                addSelect(bxPapers, (posResult / 1100), 'slider-wrap__bx-paper-item--active')
            })
        }
    }


    function processScroll() {
        const mainMenu = document.querySelector('.main-menu')
        const slider = document.querySelector('.slider')
        const siteBranding = document.querySelector('.site-branding')
        const header = document.querySelector('.header')

        const height = siteBranding.offsetHeight + header.offsetHeight
        
        document.onscroll = function() {
            if (document.documentElement.scrollTop >= height) {
                mainMenu.style.position = 'fixed'
                slider.style.marginTop = '60px'
            } else {
                mainMenu.style.position = ''
                slider.style.marginTop = ''
            }
        }
    }


    function processSliderLink() {
        const sliderLink = document.querySelectorAll('.slider__item-info-now-text')
        const sliderSpan = document.querySelectorAll('.slider__item-info-now-text span')      
        const sliderIcon = document.querySelectorAll('.slider__item-info-now-icon')

        sliderLink.forEach(function(e) {
            e.onmouseover = function() {
                e.children[0].style.transform = 'translateX(96px)'
                e.children[1].style.transform = 'translateX(-30px)'
            }

            e.onmouseout = function() {
                e.children[0].style.transform = e.children[1].style.transform = ''
            }
        })
    }


    function processSlider() {
        
    }

    processSlider()
    processScroll()
    processSliderLink()
    processBxPaper()
}

main()