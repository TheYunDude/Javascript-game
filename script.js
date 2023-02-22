let counter = document.getElementById("counter");
let count = 0;
let multiplier = 1;
let multiplierButton = document.getElementById("multiplier");
let multiplierCheck = document.getElementById("multiplier");

function up(){
  count += multiplier
  counter.innerHTML = count
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
