function main() {
    const choiceHRight = document.querySelectorAll('.header__category-right span')    
    const selectBox = document.querySelectorAll('.select-box')
    const mainMenuIcon = document.querySelector('.main-menu-wrap__icon i')
    const mainMenu = document.querySelector('.main-menu-wrap .col')
    
    function processScroll() {
        const mainMenu = document.querySelector('.main-menu')
        const slider = document.querySelector('.slider')
        const siteBranding = document.querySelector('.site-branding')
        const header = document.querySelector('.header')

        const height = siteBranding.offsetHeight + header.offsetHeight
        console.log(height)

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
        const sliderLink = document.querySelector('.slider__item-info-now-text')
        const sliderSpan = document.querySelector('.slider__item-info-now-text span')      
        const sliderIcon = document.querySelector('.slider__item-info-now-icon')


        sliderLink.onmouseover = function() {
            sliderSpan.style.transform = 'translateX(-30px)'
            sliderIcon.style.transform = 'translateX(96px)'
        }
    
        sliderLink.onmouseout = function() {
            sliderSpan.style.transform = sliderIcon.style.transform = ''
        } 
    }

    processScroll()
    processSliderLink()


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


}

main()