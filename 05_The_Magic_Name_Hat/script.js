// THE MEMORY LIS
let namesList = [];

// --- FUNCTION 1: Add a Name ---
function addName() {
  let newName = document.getElementById("nameInput").value;
  
  if (newName === "") {
    return; 
  }
  
  namesList.push(newName);
  document.getElementById("nameInput").value = "";
  
  document.getElementById("listDisplay").innerHTML = "Names in hat: " + namesList.join(", ");
  document.getElementById("winnerDisplay").innerHTML = "Waiting to draw...";
  document.getElementById("winnerDisplay").style.color = "black";
}

// --- FUNCTION 2: Delete a Specific Name ---
function deleteName() {
  let nameToRemove = document.getElementById("nameInput").value;
  
  // 1. SEARCH THE ARRAY: Find the exact seat number (index) of the name
  // If the computer cannot find the name, indexOf() always returns -1
  let indexPosition = namesList.indexOf(nameToRemove);
  
  // 2. THE ERROR TRAP: Check if the name actually exists before deleting
  if (indexPosition === -1) {
    document.getElementById("winnerDisplay").innerHTML = "🚨 ERROR: That name is not in the hat!";
    document.getElementById("winnerDisplay").style.color = "red";
    return;
  }
  
  // 3. REMOVE THE NAME: Start at the found index, cut out 1 item
  namesList.splice(indexPosition, 1);
  
  // 4. CLEAN UP THE SCREEN
  document.getElementById("nameInput").value = "";
  document.getElementById("winnerDisplay").innerHTML = "Name deleted!";
  document.getElementById("winnerDisplay").style.color = "orange";
  
  if (namesList.length === 0) {
    document.getElementById("listDisplay").innerHTML = "Names in hat: (Empty)";
  } else {
    document.getElementById("listDisplay").innerHTML = "Names in hat: " + namesList.join(", ");
  }
}

//FUNCTION 3: Empty the Entire Hat
function clearHat() {
  // Reset the array back to completely empty!
  namesList = []; 
  
  document.getElementById("nameInput").value = "";
  document.getElementById("listDisplay").innerHTML = "Names in hat: (Empty)";
  document.getElementById("winnerDisplay").innerHTML = "Waiting to draw...";
  document.getElementById("winnerDisplay").style.color = "black";
}

// Pick the Winner & Remove Them
function pickWinner() {
  if (namesList.length === 0) {
    document.getElementById("winnerDisplay").innerHTML = "🚨 ERROR: The hat is empty! Add more names.";
    document.getElementById("winnerDisplay").style.color = "red";
    return;
  }
  
  let randomIndex = Math.floor(Math.random() * namesList.length);
  let winner = namesList[randomIndex];
  
  namesList.splice(randomIndex, 1);
  
  document.getElementById("winnerDisplay").innerHTML = "🎉 The winner is: " + winner + "!";
  document.getElementById("winnerDisplay").style.color = "green";
  
  if (namesList.length === 0) {
    document.getElementById("listDisplay").innerHTML = "Names in hat: (Empty)";
  } else {
    document.getElementById("listDisplay").innerHTML = "Names in hat: " + namesList.join(", ");
  }
}