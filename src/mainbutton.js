export default function main() {
  const content = document.querySelector("#content");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const header = document.createElement("h1");
  header.textContent = "Best Pizza";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const mainButton = document.createElement("button");
  mainButton.setAttribute("id", "main");
  mainButton.textContent = "Main";
  mainButton.classList.add("activated");

  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menu");
  menuButton.textContent = "Menu";

  const aboutButton = document.createElement("button");
  aboutButton.setAttribute("id", "about");
  aboutButton.textContent = "About";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const section = document.createElement("div");
  section.classList.add("section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Best pizza you'll ever taste!";

  const sectionPara = document.createElement("p");
  sectionPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores quae temporibus aperiam facere sed consequuntur voluptatem optio dolorem? Officiis eum, minus rem tempore quibusdam consequuntur incidunt qui vitae laudantium.";

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");

  const footerPara = document.createElement("p");
  footerPara.textContent = "Created by DanteR03 for The Odin Project";

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  };

  buttonContainer.append(mainButton, menuButton, aboutButton);

  headerContainer.append(header, buttonContainer);

  section.append(sectionTitle, sectionPara);

  mainContainer.append(section);

  footerContainer.append(footerPara);

  content.append(headerContainer, mainContainer, footerContainer);
}

