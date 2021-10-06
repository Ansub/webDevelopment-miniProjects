const button = document.getElementById('btn')
const body = document.querySelector('body')

const colors = ['red','purple','orange', 'palegreen', 'peru', 'pink', 'plum', 'navy' ,'orchid','lime', 'lightsalmon']

button.addEventListener('click', () =>{
    const colorIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
})