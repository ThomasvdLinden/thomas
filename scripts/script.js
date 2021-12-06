

var deButton = document.querySelector("header ul:first-of-type li:last-of-type");

deButton.addEventListener("click", verander);

function verander() {
  let menu = document.querySelector("header ul:nth-of-type(2)");

  menu.classList.toggle("show");
}


var ButtonGrijs = document.querySelector("#buttons a:nth-of-type(1) p");






var ButtonWit = document.querySelector("#buttons a:nth-of-type(2) p");