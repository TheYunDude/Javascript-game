let counter = document.getElementById("counter");
let count = 0;
let multiplier = 1;
let multiplierButton = document.getElementById("multiplier");
let multiplierCheck = document.getElementById("multiplier");

function up(){
  count += 1;
  counter.innerHTML = count;
  if (multiplierCheck.innerHTML == "Multiplier: 2") {
    count +=1;
    counter.innerHTML = count;
  }
  if (multiplierCheck.innerHTML == "Multiplier: 3") {
    count +=2;
    counter.innerHTML = count;
  }
  if (multiplierCheck.innerHTML == "Multiplier: 4") {
    count +=3;
    counter.innerHTML = count;
  }
  if (multiplierCheck.innerHTML == "Multiplier: 5") {
    count +=4;
    counter.innerHTML = count;
  }
}

function buyGrandma(){
  if (count >= 30) {
    count -= 30;
    counter.innerHTML = count;
    multiplier += 1;
    multiplierButton.innerHTML = "Multiplier: " + multiplier;
  } else {
    alert("not enough cookies");
  }
}