let grayArea = document.getElementById('close-popup')
let popup = document.getElementById('popup')
let cruz = document.getElementById('cruz')
let map = document.getElementById('map')
console.log(map)

grayArea.addEventListener('click', () => {
    closePopup()
})
cruz.addEventListener('click', () => {
    closePopup()
})

closePopup = () => {
    popup.style.opacity = 0
    grayArea.style.opacity = 0
    setTimeout(() => {
        popup.style.display = 'none'
        grayArea.style.display = 'none'
    }, 300);
}