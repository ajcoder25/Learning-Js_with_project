const myCheckbox = document.getElementById("myCheckbox");
const visabtn = document.getElementById("visabtn");
const Masterbtn = document.getElementById("Masterbtn");
const paypalbtn = document.getElementById("paypalbtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = `You are subscribed`;
    } else {
        subResult.textContent = `You are not subscribed`;
    }

    if (visabtn.checked) {
        paymentResult.textContent = `You are Paying through Visa`;
    } else if (Masterbtn.checked) {
        paymentResult.textContent = `You have selected MasterCard`;
    } else if (paypalbtn.checked) {
        paymentResult.textContent = `You have selected PayPal`;
    } else {
        paymentResult.textContent = `You must select any payment option`;
    }
};
