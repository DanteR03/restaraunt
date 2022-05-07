import main from "./mainbutton.js";
import about from "./aboutbutton.js";
import menu from "./menubutton.js";

window.addEventListener("load", main);

window.addEventListener("load", addEventListeners);

function addEventListeners() {
  const mainButton = document.querySelector("#main");

  mainButton.addEventListener("click", function() {
    main();
    addEventListeners();
  });

  const menuButton = document.querySelector("#menu");

  menuButton.addEventListener("click", function() {
    menu();
    addEventListeners();
  });

  const aboutButton = document.querySelector("#about");

  aboutButton.addEventListener("click", function() {
    about();
    addEventListeners();
  });
}






