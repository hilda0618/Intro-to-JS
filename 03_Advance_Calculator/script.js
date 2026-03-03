function addNumbers() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  
  let x = Number(input1);
  let y = Number(input2);
  
  let answer = x + y;
  document.getElementById("result").innerHTML = "Answer: " + answer;
}

function subtractNumbers() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  
  let x = Number(input1);
  let y = Number(input2);
  
  let answer = x - y; 
  
  document.getElementById("result").innerHTML = "Answer: " + answer;
}

function multiplyNumbers() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  
  let x = Number(input1);
  let y = Number(input2);
  
  let answer = x * y; 
  
  document.getElementById("result").innerHTML = "Answer: " + answer;
}

function divideNumbers() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  
  let x = Number(input1);
  let y = Number(input2);
  
  if (y === 0) {
    document.getElementById("result").innerHTML = "🚨 ERROR: Cannot find remainder with zero!";
    return;
  }
  let answer = (x / y).toFixed(4); 
  
  document.getElementById("result").innerHTML = "Answer: " + answer;
}

//ask them to write the code for multiply and divide

//challenge, how to make 3 number input
// DAY 2

function powerNumbers() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  let x = Number(input1);
  let y = Number(input2);
  
  let answer = x ** y; 
  document.getElementById("result").innerHTML = "Answer: " + answer;
}

function moduloNumbers() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  let x = Number(input1);
  let y = Number(input2);
  
  // The Error Trap!
  if (y === 0) {
    document.getElementById("result").innerHTML = "🚨 ERROR: Cannot find remainder with zero!";
    return;
  }
  
  let answer = x % y; 
  document.getElementById("result").innerHTML = "Answer: " + answer;
  document.getElementById("result").style.color = "black";
}

function intDivideNumbers() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;
  let x = Number(input1);
  let y = Number(input2);
  
  // The Error Trap!
  if (y === 0) {
    document.getElementById("result").innerHTML = "🚨 ERROR: Cannot divide by zero!";
    document.getElementById("result").style.color = "red";
    return;
  }
  
  let answer = Math.floor(x / y); 
  document.getElementById("result").innerHTML = "Answer: " + answer;
  document.getElementById("result").style.color = "black";
}


function clearScreen() {
 
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  
  
  document.getElementById("result").innerHTML = "Answer: ???";
  document.getElementById("result").style.color = "black";
}