

var deButton = document.querySelector("header ul:first-of-type li button");
var deTerugButton = document.querySelector("header ul:nth-of-type(2) li button")

deButton.addEventListener("click", verander);

function verander() {
  let menu = document.querySelector("header ul:nth-of-type(2)");

  menu.classList.add("show");
}

deTerugButton.addEventListener("click", veranderTerug);

function veranderTerug() {
  let menu = document.querySelector("header ul:nth-of-type(2)");

  menu.classList.remove("show")
}
