//Input Values
var submit = document.getElementById("submit");


//Button click
submit.onclick = function calcPercentage(){
        let xValue = document.getElementById("xValue").value;
        let yValue = document.getElementById("yValue").value;
        let errorMessage = document.getElementById("error-message");
        let resultOutput = document.getElementById("result");
        if(xValue == "" || yValue == ""){
            errorMessage.innerHTML = "<span>Bitte Werte eingeben</span>";
            resultOutput.innerHTML = "<span></span>";
        }else{
            let result = xValue * 100 / yValue;
            let returnResult = xValue + " sind " + result + " Prozent von " + yValue;
            resultOutput.innerHTML = "<span>" + returnResult + "</span>";
            errorMessage.innerHTML = "<span></span>";
        }
}   

//Notenrechner

