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
  
  let answer = (x / y).toFixed(4); 
  
  document.getElementById("result").innerHTML = "Answer: " + answer;
}