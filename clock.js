setInterval(setClock, 1000)

const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')

function setClock() {
    const curentDate = new Date();
    const secondsValue = curentDate.getSeconds() / 60
    const minutesValue = (secondsValue + curentDate.getMinutes()) / 60
    const hoursValue = (minutesValue + curentDate.getHours()) / 12
    handRotation(secondHand, secondsValue)
    handRotation(minuteHand, minutesValue)
    handRotation(hourHand, hoursValue)
}

function handRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360)
}   

setClock()