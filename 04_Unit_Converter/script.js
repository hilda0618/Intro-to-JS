// --- TEMPERATURE ---

function celsiusToF() {
  let c = Number(document.getElementById("celsius").value);
  let f = (c * 1.8) + 32;
  document.getElementById("tempResult").innerHTML = c + "°C is exactly " + f.toFixed(2) + "°F";
}

function fahrenheitToC() {
  let f = Number(document.getElementById("fahrenheit").value);
  // We MUST use parentheses here so subtraction happens before division!
  let c = (f - 32) / 1.8;
  document.getElementById("tempResult").innerHTML = f + "°F is exactly " + c.toFixed(2) + "°C";
}

// --- DISTANCE ---

function milesToKm() {
  let mi = Number(document.getElementById("miles").value);
  let km = mi * 1.60934;
  document.getElementById("distResult").innerHTML = mi + " miles is about " + km.toFixed(2) + " km";
}

function kmToMiles() {
  let km = Number(document.getElementById("kilometers").value);
  // The inverse of multiplying is dividing!
  let mi = km / 1.60934;
  document.getElementById("distResult").innerHTML = km + " km is about " + mi.toFixed(2) + " miles";
}

// --- WEIGHT ---

function poundsToKg() {
  let lbs = Number(document.getElementById("pounds").value);
  let kg = lbs / 2.20462;
  document.getElementById("weightResult").innerHTML = lbs + " lbs is about " + kg.toFixed(2) + " kg";
}

function kgToPounds() {
  let kg = Number(document.getElementById("kilograms").value);
  // The inverse of dividing is multiplying!
  let lbs = kg * 2.20462;
  document.getElementById("weightResult").innerHTML = kg + " kg is about " + lbs.toFixed(2) + " lbs";
}