function main() {
    const choiceHRight = document.querySelectorAll('.header__category-right span')    
    const selectBox = document.querySelectorAll('.select-box')

    choiceHRight.forEach((element) => {
        element.onclick = function(e) {
            e.stopPropagation()
            var selectBox = this.nextElementSibling
            selectBox.style.display = 'block'
            // selectBox.style.display = selectBox.style.display ? 'none' : 'block' 
        }
    })

    document.body.onclick = function() {
        selectBox.forEach((e) => {
            e.style.display = 'none'
        })
    }
}

main()