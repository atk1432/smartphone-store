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

}

main()