let characters;
let selectedTextDisplay;

function init() {
  characters = [...document.querySelectorAll(".character")];
  selectedTextDisplay = document.querySelector(".selected-display");

  if (characters.length == 0 || !selectedTextDisplay) {
    console.error("There are no characters or text to interact with. Try building the HTML out a bit more.");
    return;
  }

  characters.forEach(character => {
    character.addEventListener("click", selectCharacter);
  });
}

function selectCharacter(e) {
  e.preventDefault();
  characters.forEach(c => c.classList.remove("selected"));
  e.target.classList.add("selected");
  selectedTextDisplay.innerText = e.target.innerText;
}

init();
