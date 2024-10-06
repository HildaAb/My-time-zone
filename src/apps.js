function showSelectedCountry(event) {
  if (event.target.value === "Paris") {
    alert("Bonjour");
  }
  if (event.target.value === "Tokyo") {
    alert("Konnichiwa");
  }
  if (event.target.value === "Sidney") {
    alert("Hello");
  }
}
let countryElement = document.querySelector("#countries");
countryElement.addEventListener("change", showSelectedCountry);
