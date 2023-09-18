let button = document.getElementById('button');
let count = 5;
let validFlag;
button.addEventListener('click', function (event){
    event.preventDefault()

    let coordX = document.getElementById('coordX')

    validFlag = coordX.value <= 3 && coordX.value >= -3 && coordX.value !== '';

    let radiusR = document.getElementById('radiusR')
    let rates = document.getElementsByName('coordY');
    let coordY;

    for(let i = 0; i < rates.length; i++){
        if(rates[i].checked){
            coordY = rates[i].value;

        }

    }

    if (validFlag) {
        let formData = new FormData();
        formData.append('coordX', parseFloat(coordX.value))
        formData.append('coordY', coordY)
        formData.append('radiusR', radiusR.value)
        fetch('lab1/script.php', {
            method: 'POST',
            body: formData
        }).then((res) => {
            return res.text().then((a) => {
                return a
            })

        }).then((res) => {
            console.log(res.split(';'))
            res = res.split(';')
            if (res[0] === 'Попал' || res[0] === 'Не попал') {
                if (document.getElementById('errMessage')) document.getElementById('errMessage').remove()
                if (count >= 10 && count !== 5) {
                    count++

                    document.getElementById((count - 5).toString()).remove()

                    appendBody(res[1], res[2], res[3], res[0], res[4], res[5], count.toString())
                    printPoint(res[1], res[2], res[3])
                } else {
                    count++

                    appendBody(res[1], res[2], res[3], res[0], res[4], res[5], count.toString())
                    printPoint(res[1], res[2], res[3])
                }

            } else {
                if (document.getElementById('errMessage')) document.getElementById('errMessage').remove()
                let formHTML = document.getElementById('form2')
                appendBeforeError(res[5], formHTML)
            }

        }).catch((err) => console.warn(err))
    }else {
        if (document.getElementById('errMessage')) document.getElementById('errMessage').remove()
        let formHTML = document.getElementById('form2')
        appendBeforeError('Не верно введена координата X', formHTML)
    }
})

function appendBeforeError(text, HTMlelem) {
    let errHTML = document.createElement('h4')
    errHTML.style.color = 'red';
    errHTML.textContent = text;
    errHTML.id = 'errMessage'

    HTMlelem.before(errHTML)
}

function appendBody(r, x, y, res, curTime, workTime, className){
    let tableOut = document.getElementById('table-out');
    let tr = document.createElement('tr')
    tr.id = className
    let one = document.createElement('td')
    one.className = className
    one.textContent = r
    let two = document.createElement('td')
    two.className = className
    two.textContent = x
    let three = document.createElement('td')
    three.className = className
    three.textContent = y
    let four = document.createElement('td')
    four.className = className
    four.textContent = res
    let five = document.createElement('td')
    five.className = className
    five.textContent = curTime
    let six = document.createElement('td')
    six.className = className
    six.textContent = workTime

    tableOut.append(tr)
    tr.append(one)
    tr.append(two)
    tr.append(three)
    tr.append(four)
    tr.append(five)
    tr.append(six)
}