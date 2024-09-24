
const filterButtons = document.querySelectorAll(".section-filter button")
const cards = document.querySelectorAll('.product-card')

filterButtons.forEach(button => {
  button.addEventListener('click', filterCards)
})

function filterCards(e) {
 const typeButton = e.target.value

 const cardsTitles = document.querySelectorAll('.products h4')
 const isAboutCard = cardsTitles.forEach(
  cardTitle => {
    const valueCardTitle = cardTitle.innerText
    const card = cardTitle.closest('.product-card')

    if (valueCardTitle === typeButton) {
      card.classList.remove('hide-component')

    } else if (typeButton === 'Todos') {
      card.classList.remove('hide-component')
  
    } else {
      card.classList.add('hide-component')
    }
  
  })
 }



 



