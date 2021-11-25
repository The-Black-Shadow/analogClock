setInterval(setClock, 1000)

const hourHand = document.querySelector('[hour-hand]')
const minitueHand = document.querySelector('[minitue-hand]')
const secondHand = document.querySelector('[second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minitueRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minitueRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minitueHand, minitueRatio)
    setRotation(hourHand, hourRatio)
};

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()