const inputElement = document.getElementById("memo-input")
const container = document.getElementById("memo-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function() {
  const card = createCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}
const createCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"

  const memo = document.createElement("div")
  memo.className = "memo"
  memo.textContent = text
  console.log(text)
  card.append(memo)

  return card
}
