let currProgress = 0;

function checkProgress(currProgress, plusValue) {
    let newProgress = currProgress + plusValue;
    if (newProgress <= 100) {
        return newProgress
    }  else {
       window.alert(`Текущее значение прогрессбара: ${currProgress}. Новое значение прогрессбара (${newProgress}) превысит максимально возможное (100). Выберите другую кнопку.`);
        return currProgress
    }

}

function writeProgressWidth(currProgress) {
    $('#my-progress-bar').attr('style', `width: ${currProgress}%;`);
    $('#my-progress-bar').attr('aria-valuenow', currProgress);
    $('#my-progress-bar').text(currProgress)
}

function plusOne() {
    // currProgress += 1;
    currProgress = checkProgress(currProgress, 1);
    writeProgressWidth(currProgress);
}

function plusThree() {
    // currProgress += 3;
    currProgress = checkProgress(currProgress, 3);
    writeProgressWidth(currProgress);
}

function plusSeven() {
    // currProgress += 7;
    currProgress = checkProgress(currProgress, 7);
    writeProgressWidth(currProgress);
}

function init() {
    $('#buttonPlusOne').click(plusOne);
    $('#buttonPlusThree').click(plusThree);
    $('#buttonPlusSeven').click(plusSeven);
    console.log('Скрипт загружен');
}

$(document).ready(init);