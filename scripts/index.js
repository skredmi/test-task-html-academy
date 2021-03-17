const popup = document.querySelector(".popup");
const popupClose = popup.querySelector(".popup__button-close");
const popupConatiner = document.querySelector(".popup__container");
const button = document.querySelector(".page__button");
const listElement = document.querySelector(".elements__list");
const templateElement = document.querySelector(".elements-template");
const buttonCheck = document.querySelector(".popup__item-check");

function generateCard(item) {
  const card = templateElement.content.cloneNode(true);
  card.querySelector(".elements__title").textContent = item.title;
  card.querySelector(".elements__author").textContent = item.author;
  card.querySelector(".elements__date").textContent = item.date;
  card.querySelector(".elements__link").href = item.link;
  return card;
}

function containWidget(item) {
  const widget = document
    .querySelector(".popup__content")
    .content.cloneNode(true);
  widget.querySelector(".popup__item-title").textContent = item.title;
  widget.querySelector(".popup__item-author").textContent = item.author;
  widget.querySelector(".popup__item-date").textContent = item.date;
  widget.querySelector(".popup__item-link").href = item.link;
  widget.querySelector(".popup__item").addEventListener("click", (event) => {
    if (
      event.target.classList.contains("popup__item-check") &&
      document.querySelector(".popup__item-status").innerHTML == "Не прочитано"
    ) {
      document.querySelector(".popup__item-status").innerHTML = "Прочитано";
    } else {
      document.querySelector(".popup__item-status").innerHTML = "Не прочитано";
    }
  });
  return widget;
}

function addCard(card) {
  listElement.append(generateCard(card));
}

initialMessages.forEach((item) => {
  addCard(item);
});

document.querySelector(".page__button-tooltip").textContent =
  initialMessages.length;

function togglePopup() {
  popup.classList.toggle("popup_opened");
}
popupClose.addEventListener("click", togglePopup);

function openPopup() {
  togglePopup();
}
button.addEventListener("click", openPopup);

initialMessages.forEach((item) => {
  document.querySelector(".popup__list").append(containWidget(item));
});
