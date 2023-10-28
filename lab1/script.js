// const url = 'https://randomuser.me/api/?results=10'; // 10 случайных "пользователей"

const errorsList = new Map([
    ['Incorrect coordinates or it isn`t number', 'Не корректно введены координаты или это не число'],
    ['Bad Request', 'Произошла ошибка на стороне сервера']
])

const form = document.getElementById('form2');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text')
const popupCloseBtn = document.getElementById('close-btn-popup')
let countScroll = 0;

function setPopup(info){
    overlay.classList.add('show')
    popupText.textContent = info
    popup.style.display = 'block'
    popupCloseBtn.addEventListener('click', () => {
        overlay.classList.remove('show')
        popup.style.display = 'none'
    })
}

function getErr(errText){
    if (errorsList.get(errText))
        return errorsList.get(errText)
    return errText
}

function validR(coordR){
    return coordR >= 1 && coordR <= 5 && coordR !== ''
}

function validX(coordX){
    return coordX >= -3 && coordX <= 3 && coordX !== ''
}

function validY(coordY){
    return (coordY === -2 || coordY === -1.5 || coordY === -1 || coordY === -0.5 || coordY === 0 || coordY === 0.5
        || coordY === 1 || coordY === 1.5 || coordY === 2)
}

function getRadioValueByName(elemRadio) {
    for(let i = 0; i < elemRadio.length; i++){
        if(elemRadio[i].checked)
            return elemRadio[i].value
    }
}
form.addEventListener('submit', function (event){

    event.preventDefault()

    const coordX = document.getElementById('coordX')
    const radiusR = document.getElementById('radiusR')

    const radio = document.getElementsByName('coordY');
    const coordY = getRadioValueByName(radio);

    if (!validX(coordX.value) || !validY(parseFloat(coordY)) || !validR(radiusR.value)){
        removeIfExists('errMessage')
        const formHTML = document.getElementById('form2');
        appendBeforeError('Неверно введены координаты', formHTML);
        return;
    }


    const formData = new FormData();
    formData.append('coordX', parseFloat(coordX.value))
    formData.append('coordY', coordY)
    formData.append('radiusR', radiusR.value)
    fetch('lab1/script.php', {
        method: 'POST',
        body: formData
    }).then((res) => {

        if (res.status !== 200){
            console.log(res.statusText)
            setPopup(getErr(res.statusText))
            return Promise.reject(res.status)
        }

        res.json().then((res) => {

            removeIfExists('errMessage')

            scrollTable(res['R'], res['X'], res['Y'], res['state'], res['date'], res['time'], document.querySelectorAll('#table-out > tr'), 0, 5, countScroll)
            countScroll++

            printPoint(res['R'], res['X'], res['Y'])

        })
    }).catch((err) => console.warn(err))

})


function removeIfExists(elemId){
    const el = document.getElementById(elemId)
    if (el) el.remove()
}

function scrollTable(R, X, Y, res, curTime, workTime, collectionElem, startCount, quantityElem, nowCount){
    if (nowCount >= startCount + quantityElem && nowCount !== startCount)
        collectionElem[0].remove()

    appendBody(R, X, Y, res, curTime, workTime)
}

function appendBeforeError(text, elemHTML) {
    const errHTML = document.createElement('h4')
    errHTML.style.color = 'red';
    errHTML.textContent = text;
    errHTML.id = 'errMessage'

    elemHTML.before(errHTML)
}

function appendBody(r, x, y, res, curTime, workTime){
    const tableOut = document.getElementById('table-out');
    const tr = document.createElement('tr')
    const one = document.createElement('td')
    one.textContent = r
    const two = document.createElement('td')
    two.textContent = x
    const three = document.createElement('td')
    three.textContent = y
    const four = document.createElement('td')
    four.textContent = res
    const five = document.createElement('td')
    five.textContent = curTime
    const six = document.createElement('td')
    six.textContent = workTime

    tableOut.append(tr)
    tr.append(one)
    tr.append(two)
    tr.append(three)
    tr.append(four)
    tr.append(five)
    tr.append(six)
}


