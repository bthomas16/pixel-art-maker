var container = document.querySelector('.container')

var newColor = "white"
var paintBrush =

document.querySelector('.paint-container')
paintBrush.addEventListener('click', function(event) {
var colorBox = window.getComputedStyle(event.target)
  var color = colorBox.getPropertyValue("background-color")
  newColor = color
})

container.addEventListener('click', function(event) {
  console.log(event.target)
  if (event.target.classList.contains('fun')) {
    event.target.style.backgroundColor = newColor;
  }
})

var cellCount = 4900
for (i=1; i <= cellCount; i++) {
  var newCell = document.createElement('div')
    newCell.classList.add('fun')
    newCell.textContent = ""
    container.appendChild(newCell)
  }
