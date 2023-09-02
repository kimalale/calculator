const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const numbers= document.querySelectorAll(".number");
const del = document.querySelector("#del");
const ac = document.querySelector("#ac");
const decimal = document.querySelector("#dot");
let number1;
let number2;

let selectedOperator;
let tempValue;
let click = 0;
let operatorValue;

equal.addEventListener('click', () => {
    if (click == 1)
    {
        click+=1;
        number2 = inputview.value;
        inputPreview.textContent += inputview.value;
        inputview.value = operate(number1, number2, selectedOperator);
        inputview.textContent = `=${inputview.value}`;


    }
    else{
        number2 = inputview.value;
        inputPreview.textContent = `${number1}${operatorValue}${inputview.value}`;
        inputview.value = operate(number1, number2, selectedOperator);
        inputview.textContent = `=${inputview.value}`;
    }

    console.log(inputview.textContent.length);
    console.log(inputview.textContent.slice(0 , 9));
    console.log(inputview.textContent.slice(9 , inputview.textContent.length - 1).length)
    if (inputview.textContent.length > 9)
    {
        inputview.textContent = `${inputview.textContent.slice(0 , 7)}e+${inputview.textContent.slice(7 , inputview.textContent.length - 1).length}`;
    }
})


operators.forEach((operator => {
    operator.addEventListener('click', () => {

        click +=1;

        selectedOperator = operator.getAttribute("id");

        operatorValue = operator.value;
        console.log(operatorValue);
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


    })
}));

console.log(selectedOperator);


const inputview = document.querySelector("#number-input");
inputview.textContent = '';


const inputPreview = document.querySelector("#inputPreview")
inputPreview.textContent ='';




numbers.forEach( number => {
    number.addEventListener('click', () => {
        if (inputview.textContent.length < 8)
        {
            if (inputview.textContent == '0') {inputview.textContent = '';}
            inputview.textContent += number.value;
            inputview.value = Number(inputview.textContent);
        }
    })

})

del.addEventListener('click', () => {
    tempValue = inputview.value.toString();

    inputview.textContent = tempValue.slice(0 , tempValue.length - 1);
    inputview.value = Number(inputview.textContent);
})

ac.addEventListener('click', () => {
    inputview.textContent = 0;
    inputview.value = 0;
    inputPreview.textContent = '';
})

decimal.addEventListener('click', () => {
    inputview.textContent += '.'
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

  const sum = function(...values) {
    let total = 0;
    values.map((val) => {
      total += Number(val);
      console.log(typeof val);
    })

    return total;
  };

  const multiply = function(...values) {
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

