function validate() {
    let pswrd = document.getElementById('pswrd').value;
    let textScore;
    let textLen = '';
    let textSpc = '';
    let textUppandloww = '';
    let textNums = '';
    let score = 0; // от 0 до 4
    let len;
    let spc;
    let uppandloww;
    let nums;
    let fl = true;
    let nm = [0,1,2,3,4,5,6,7,8,9]
    // длина, спец.символы, строчные и заглавные буквы, цифры
    // проверки
    if(pswrd === '' || pswrd === null || pswrd === undefined){
        textScore = 'Вы не ввели пароль'
        fl = false
        console.log('numb')
    }
    else if(pswrd.length < 8){
        textScore = 'Пароль меньше 8 символов'
        fl = false
        console.log('<8')
    }
    if(fl === true){
        if(pswrd.length >= 20){
            len = true;
            console.log('len')
        }
        pswrd.split('').forEach((l)=>{
            if(l.toUpperCase() === l.toLowerCase() && nm.includes(l-0) === false){
                spc = true;
                console.log('spc')
            }
            if(nm.includes(l-0) === true){
                nums = true;
                console.log('nums')
            }
        })
        // console.log(pswrd)
        if(pswrd.toLowerCase() !== pswrd && pswrd.toUpperCase() !== pswrd){
            uppandloww = true;
            console.log('uppandloww')
        }
        if(len === true){score += 1}
        if(spc === true){score += 1}
        if(nums === true){score += 1}
        if(uppandloww === true){score += 1}
    // вывод
        switch(score){
            case 0:
                textScore = 'очень слабый пароль';
                console.log('0')
                break;
            case 1:
                textScore = 'слабый пароль';
                console.log('1')
                break;
            case 2:
                textScore = 'средний пароль';
                console.log('2')
                break;
            case 3:
                textScore = 'достаточно надежный пароль';
                console.log('3')
                break;
            case 4:
                textScore = 'очень надежный пароль';
                console.log('4')
                break;
        }
        if(len !== true){
            textLen = 'Длина пароля меньше 20 символов <br>'
        }
        if(spc !== true){
            textSpc = 'В пароле отсутствуют спец.символы, например "! @ # $ %" <br>'
        }
        if(nums !== true){
            textNums = 'В пароле нет цифр <br>'
        }
        if(uppandloww !== true){
            textUppandloww = 'В пароле все буквы одного регистра <br>'
        }
        document.getElementById('score').innerHTML = textScore;
        document.getElementById('len').innerHTML = textLen;
        document.getElementById('spc').innerHTML = textSpc;
        document.getElementById('nums').innerHTML = textNums;
        document.getElementById('uppandloww').innerHTML = textUppandloww;
    }
    else{
        document.getElementById('score').innerHTML = textScore;
        document.getElementById('len').innerHTML = '';
        document.getElementById('spc').innerHTML = '';
        document.getElementById('nums').innerHTML = '';
        document.getElementById('uppandloww').innerHTML = '';
    }
}