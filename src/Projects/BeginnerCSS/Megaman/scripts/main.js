let megamanCharacters;
let selectedTextDisplay;

function init() {
  megamanCharacters = [...document.querySelectorAll(".character")];
  selectedTextDisplay = document.querySelector(".selected-display");

  if (megamanCharacters.length == 0 || !selectedTextDisplay) {
    console.error("There are no megamanCharacters or text to interact with. Try building the HTML out a bit more.");
    return;
  }

  megamanCharacters.forEach(character => {
    character.addEventListener("click", selectCharacter);
  });
}

function selectCharacter(e) {
  e.preventDefault();
  megamanCharacters.forEach(c => c.classList.remove("selected"));
  e.target.classList.add("selected");
  selectedTextDisplay.innerText = e.target.innerText;
}

init();
