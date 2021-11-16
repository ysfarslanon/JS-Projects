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
let bill = Number(inputBill.value);
let tipPercent = Number(tipProgress.value);
let tip = 0;

function decreaseTip() {
  tipProgress.value =
    tipProgress.value <= 10
      ? (tipProgress.value = 10)
      : (tipProgress.value -= 5);
  tipPercent = tipProgress.value;
  tip = bill * (tipPercent / 100)
  writeTipDetails();
}

function increaseTip() {
  tipProgress.value =
    tipProgress.value >= 100
      ? (tipProgress.value = 100)
      : (tipProgress.value += 5);
  tipPercent = tipProgress.value;
  tip = bill * (tipPercent / 100)
  writeTipDetails();
}

function writeTipDetails() {
  tipText.innerHTML = `Bahşiş: (%${tipProgress.value.toFixed()})`;
  tipResultText.innerHTML = `Bahşiş miktarı: ${tip.toFixed(2)}`;
}

function calculateBill() {
  let numberOfPerson = Number(inputPeople.value)
  totalBill = (bill + tip).toFixed(2);
  let perPersonBill = (totalBill / numberOfPerson).toFixed(2);
  totalBillText.innerHTML = `Toplam hesap: ${totalBill}`
  billPerPerson.innerHTML =  `Kişi başı hesap: ${perPersonBill}`

}
