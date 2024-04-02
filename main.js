


function allClear(){

 document.getElementById('display').value = "";

}

function deleteBtn(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

  function displayValue(values){
     document.getElementById('display').value +=values;
}

function calculate(){

    let displayValues = document.getElementById('display');
    if (displayValues.value === '') {
        alert('plase add values');
    } else {
       let resultValue =  eval(displayValues.value);
       displayValues.value = resultValue; 
    }
}