const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const numbers= document.querySelectorAll(".number");
let number1;
let number2;

let selectedOperator;
let click = 0;


equal.addEventListener('click', () => {
    if (click == 1)
    {
        click+=1;
        number2 = inputview.value;
        inputPreview.textContent += inputview.value; 
        inputview.value = operate(number1, number2, selectedOperator);
        inputview.textContent = inputview.value;
        
    }
    else{
        number2 = inputview.value;
        inputPreview.textContent += inputview.value; 
        inputview.value = operate(number1, number2, selectedOperator);
        inputview.textContent = inputview.value;
        
    }
})


operators.forEach((operator => {
    operator.addEventListener('click', () => {

        click +=1;

        
        if (click == 1)
        {
            number1 = inputview.value;
            inputPreview.textContent += inputview.value + operator.value;
            inputview.textContent = '';
        }
        else if (click == 2) {
            number2 = inputview.value;
            inputPreview.textContent += inputview.value;
            inputview.value = operate(number1, number2, selectedOperator);
            inputview.textContent = inputview.value;

        }
        else{
            inputview.textContent = '';
            number1 = inputview.value
            inputPreview.textContent = inputview.value + operator.value;
        }


        selectedOperator = operator.getAttribute("id");
        console.log(selectedOperator);
    })
}));

console.log(selectedOperator);


const inputview = document.querySelector("#number-input");
inputview.textContent = '';


const inputPreview = document.querySelector("#inputPreview")
inputPreview.textContent ='';




numbers.forEach( number => {
    number.addEventListener('click', () => {
        inputview.textContent += number.value;
        inputview.value = Number(inputview.textContent);
    })
    
})



function operate(firstNum, secondNum, operator)
{
    switch (operator){
        case 'multiply':
            return multiply(firstNum, secondNum);
        case 'plus':
            return add(firstNum, secondNum);
        case 'minus':
            return subtract(firstNum, secondNum);
        case 'divide': 
            return divide(firstNum, secondNum);
    }
}





const add = function(a, b) {
    return a + b;
  };
  
  const subtract = function(a, b) {
    return a - b;
  };
  

  
  const divide = function(a, b) {
    if (b > 0)
    {
        return a / b;
    }
    else {
        return NaN;
    }
    
  };
   
  const sum = function(values) {
    let total = 0;
    values.map((val) => {
      total += Number(val);
      console.log(typeof val);
    })
  
    return total;
  };
  
  const multiply = function(values) {
    let product = 1;
    values.map((val) => {
      product *= Number(val);
    })
    return product;
  };



//Converts a string operation to arithmetic operation
// function stringConveter(sampleString, operator) 
// {   
//     let firstValue = parseInt(sampleString);
//     let secondValue = parseInt(sampleString.slice(sampleString.indexOf(parseInt(sampleString)+1)));

//     let numbers = [firstValue, secondValue];
//     return numbers;
// }

