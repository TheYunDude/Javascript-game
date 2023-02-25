let counter = document.getElementById("counter");
let multiplierButton = document.getElementById("multiplier");
let multiplierCheck = document.getElementById("multiplier");

let v = {
  count: 0,
  cps: 0,
  grandmaPrice: 30,
  slavePrice: 100,
  cpc: 1
};

function up(){
  v.count += v.cpc;
  counter.innerHTML = v.count;
}

function buyGrandma(){
  if (v.count >= v.grandmaPrice) {
    v.count -= v.grandmaPrice;
    counter.innerHTML = v.count;
    v.cps++;
    multiplierButton.innerHTML = "Cookies Per Second: " + v.cps;
    v.grandmaPrice = Math.round(v.grandmaPrice * 1.5);
    document.getElementById('grandmaPriceText').innerHTML = "Grandma Price: " + v.grandmaPrice;
  } else {
    alert("not enough cookies");
  }
}

function buySlave(){
  if (v.count >= v.slavePrice) {
    v.count -= v.slavePrice;
    counter.innerHTML = v.count;
    v.cps += 2;
    v.cpc++;
    multiplierButton.innerHTML = "Cookies Per Second: " + v.cps;
    v.slavePrice = Math.round(v.slavePrice * 2);
    document.getElementById('slavePriceText').innerHTML = "Slave Price: " + v.slavePrice;
  } else {
    alert("not enough cookies");
  }
}

setInterval(function() {
  v.count += v.cps;
  counter.innerHTML = v.count;
}, 1000)











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
  multiplierButton.innerHTML = "Cookies Per Second: " + v.cps;
  document.getElementById('grandmaPriceText').innerHTML = "Grandma Price: " + v.grandmaPrice;
  document.getElementById('slavePriceText').innerHTML = "Slave Price: " + v.slavePrice;
  
  console.log(v);
}