const convertButton = document.querySelector(".convert-button")

function convertValues(){
const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
const currencyValueConverted = document.querySelector(".currency-value")//Outras moedas
const dolarToday = 5.2

const convertValue = inputCurrencyValue / dolarToday

currencyValueToConvert.innerHTML = inputCurrencyValue

console.log(convertValue)
}


convertButton.addEventListener("click", convertValues)