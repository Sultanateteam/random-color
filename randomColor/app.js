const body = document.querySelector('body')
const p = document.querySelector('.p')
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const container = document.querySelector('.container')
function rendomColor(){
    let color = '#'
    for(let i=0; i<6; i++){
        color+=values[Math.floor(Math.random()*16)]
    }
    return color
}
// console.log(`${rendomColor()} ${rendomColor()} ${deg()}`)

function setColor(){
    const degree = Math.round(Math.random()*360)
    const bgColor = `linear-gradient(${degree}deg, ${rendomColor()},  ${rendomColor()})`
    body.style.background = bgColor
    p.textContent = bgColor
}

setColor()

container.addEventListener('click', setColor)