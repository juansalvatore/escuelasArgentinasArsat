let grayArea = document.getElementById('close-popup')
let popup = document.getElementById('popup')
let cruz = document.getElementById('cruz')

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
  }, 300)
}

// layer.on('featureClick', function(e, latlng, pos, data, layer) {
//     console.log("mouse clicked polygon with data: " + data);
//   });
