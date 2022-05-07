export default function menu() {
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

  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menu");
  menuButton.textContent = "Menu";
  menuButton.classList.add("activated");

  const aboutButton = document.createElement("button");
  aboutButton.setAttribute("id", "about");
  aboutButton.textContent = "About";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("grid-container");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = "Lorem Ipsum";

  const cardPara = document.createElement("p");
  cardPara.textContent = "Lorem ipsum dolor";

  const card2 = document.createElement("div");
  card2.classList.add("card");

  const cardTitle2 = document.createElement("h2");
  cardTitle2.textContent = "Loremus Ipsumus";

  const cardPara2 = document.createElement("p");
  cardPara2.textContent = "Lorem ipsum dolor";

  const card3 = document.createElement("div");
  card3.classList.add("card");

  const cardTitle3 = document.createElement("h2");
  cardTitle3.textContent = "Loremus Ipsumus";

  const cardPara3 = document.createElement("p");
  cardPara3.textContent = "Lorem ipsum dolor";

  const card4 = document.createElement("div");
  card4.classList.add("card");

  const cardTitle4 = document.createElement("h2");
  cardTitle4.textContent = "Loremus Ipsumus";

  const cardPara4 = document.createElement("p");
  cardPara4.textContent = "Lorem ipsum dolor";

  const foodPicture = document.createElement("img");
  foodPicture.setAttribute("src", "./pizza.jpg")

  const foodPicture2 = document.createElement("img");
  foodPicture2.setAttribute("src", "./pizza.jpg")

  const foodPicture3 = document.createElement("img");
  foodPicture3.setAttribute("src", "./pizza.jpg")

  const foodPicture4 = document.createElement("img");
  foodPicture4.setAttribute("src", "./pizza.jpg")

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");

  const footerPara = document.createElement("p");
  footerPara.textContent = "Created by DanteR03 for The Odin Project";

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  };

  buttonContainer.append(mainButton, menuButton, aboutButton);

  headerContainer.append(header, buttonContainer);

  card.append(cardTitle, foodPicture, cardPara);

  card2.append(cardTitle2, foodPicture2, cardPara2);

  card3.append(cardTitle3, foodPicture3, cardPara3);

  card4.append(cardTitle4, foodPicture4, cardPara4);

  mainContainer.append(card, card2, card3, card4);

  footerContainer.append(footerPara);

  content.append(headerContainer, mainContainer, footerContainer);
}

