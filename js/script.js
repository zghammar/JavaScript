//Input Values
let xValue = document.getElementById("xValue").value;
let yValue = document.getElementById("yValue").value;
let submit = document.getElementById("submit");

//Function
function calcPercentage(){
    if(xValue == "" || yValue == ""){
        alert("Daten eingeben!")
    }else{
        let result = (yValue/100) * xValue;
        return result;
    }
}

//Button click
document.getElementById("submit").onclick = calcPercentage();
