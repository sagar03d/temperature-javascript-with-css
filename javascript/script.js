
function timeupdate(){
    setInterval("time()",1000);
}

function time(){
    var t = Date();
    document.getElementById("current-time").innerHTML = t;
}

function processForm() {

    // Vars
    var temperature = Number(document.tempForm.temp.value);
    var tempType;
    var result;


    // Condition Statement for computation
    for (var i = 0; i < document.tempForm.choice.length; i++) {

        if (document.tempForm.choice[i].checked) {
            tempType = document.tempForm.choice[i].value;
        }
    }

    if (tempType == 'fahrenheit') {
        result = temperature * 9 / 5 + 32;
    } else {
        result = (temperature - 32) * 5 / 9;
    }

    // Result
    document.tempForm.resultField.value = result;
}