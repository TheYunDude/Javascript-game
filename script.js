let counter = document.getElementById("counter");
let multiplierButton = document.getElementById("multiplier");
let multiplierCheck = document.getElementById("multiplier");

let v = {
  count: 0,
  multiplier: 1
};

function up(){
  v.count += v.multiplier;
  counter.innerHTML = v.count;
}

function buyGrandma(){
  if (v.count >= 30) {
    v.count -= 30;
    counter.innerHTML = v.count;
    v.multiplier += 1;
    multiplierButton.innerHTML = "Multiplier: " + v.multiplier;
  } else {
    alert("not enough cookies");
  }
}

function save(){
  localStorage.setItem("variables", JSON.stringify(v));
  // TRY TO SAVE THE GAME
  try {
    localStorage.setItem('variables',JSON.stringify(v));
  }catch(err) {
    console.log('Cannot access localStorage - browser may be old or storage may be corrupt')
  }
  console.log('Game saved successfully');
}

function load(){
  v = JSON.parse(localStorage.getItem("variables"));

  counter.innerHTML = v.count;
  multiplierButton.innerHTML = "Multiplier: " + v.multiplier;
  console.log(v);
}