function showSelectedCountry(event) {
  if (event.target.value === "Paris") {
    alert(`Bonjour. Today is ${parisTime} in Europe/Paris`);
  }
  if (event.target.value === "Tokyo") {
    alert(`Konnichiwa. Today is ${tokyoTime} in Asia/Tokyo`);
  }
  if (event.target.value === "Sydney") {
    alert(`Hello. Today is ${sydneyTime} in Austrlia/Sydney`);
  }
}

setInterval(showSelectedCountry, 5000);

let countryElement = document.querySelector("#countries");
countryElement.addEventListener("change", showSelectedCountry);

let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY H:mm");
let parisElement = document.querySelector("#paris");

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY H:mm");
let tokyoElement = document.querySelector("#tokyo");

let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY H:mm");
let sydneyElement = document.querySelector("#sydney");
