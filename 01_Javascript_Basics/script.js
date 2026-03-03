function changeText() {
  document.getElementById("demo2").innerHTML = "Hello JavaScript!";
}

function lightson(){
  document.getElementById('myImage2').src='https://www.w3schools.com/js/pic_bulbon.gif';
}

function lightsoff(){
  document.getElementById('myImage2').src='https://www.w3schools.com/js/pic_bulboff.gif';
}

function makeBIG(){
  document.getElementById('styleDemo2').style.fontSize = '35px';
}

function makeRed(){
  document.getElementById('styleDemo2').style.color = 'red';
}

function hideMe(){
  document.getElementById('hideMe2').style.display = 'none';
}

function showMe(){
  document.getElementById('showMe2').style.display = 'block';
  document.getElementById('showMe2').style.fontSize = 'block';
}

//day 3
function calculateSum() {
  let x = 5;
  let y = 6;
  let sum = x + y; document.getElementById("calculate").innerHTML = "The sum is " + sum;
  
}

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

//ask them to write the code for multiply and divide

//challenge, how to make 3 number input
