
const filterButtons = document.querySelectorAll(".section-filter button")
const cards = document.querySelectorAll('.product-card')

filterButtons.forEach(button => {
  button.addEventListener('click', filterCards)
})

function filterCards(e) {
  console.log("alho")
}