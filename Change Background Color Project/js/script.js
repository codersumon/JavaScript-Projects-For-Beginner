Choose a random color
var button = document.querySelector('button')
var body = document.querySelector('body')
var colors = ['red', 'green', 'blue', 'pink', 'red', 'purple']

body.style.backgroundColor = 'orange'
button.addEventListener('click', changeBackground)

function changeBackground() {
    var colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}