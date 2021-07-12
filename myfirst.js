function addCard() {
  const container = document.getElementsByClassName("cards-container")[0];
  const card = document.getElementsByClassName("cards-container")[0].children[0].cloneNode(true);
  container.append(card);
}

const deleteCard = () => {
  const container = document.getElementsByClassName("cards-container")[0];
  if (container.childElementCount != 1) {
    container.removeChild(container.children[0])
  }
}


