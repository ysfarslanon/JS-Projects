// elements
let inputBill = document.querySelector("#bill");
let inputPeople = document.querySelector("#people");
let tipText = document.querySelector("#tipText");
let tipProgress = document.querySelector("#tipProgress");
let btnDecreaseTip = document.querySelector("#btnDecreaseTip");
let btnIncreaseTip = document.querySelector("#btnIncreaseTip");
let tipResultText = document.querySelector("#tipResult");
let totalBillText = document.querySelector("#totalBill");
let billPerPerson = document.querySelector("#billPerPerson");

// variables
let numberOfPerson = inputPeople.value;
let bill = inputBill.value;
let tip = tipProgress.value;
let totalBill = 0;

function decreaseTip() {
  tipProgress.value =
    tipProgress.value <= 10
      ? (tipProgress.value = 10)
      : (tipProgress.value -= 5);
  tip = tipProgress.value;
  writeTipDetails();
}

function increaseTip() {
  tipProgress.value =
    tipProgress.value >= 100
      ? (tipProgress.value = 100)
      : (tipProgress.value += 5);
  tip = tipProgress.value;
  writeTipDetails();
}

function writeTipDetails() {
  tipText.innerHTML = `Bahşiş: (%${tipProgress.value.toFixed()})`;
  tipResultText.innerHTML = `Bahşiş miktarı: ${(bill * (tip / 100)).toFixed(2)}`;
}

function calculateBill() {
  
}
