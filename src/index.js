
const filterButtons = document.querySelectorAll(".section-filter button")
/* const cards = document.querySelectorAll('.section-type-products')  */

filterButtons.forEach(button => {
  button.addEventListener('click', filterCards)
})

function filterCards(e) {
 const typeButton = e.target.value

 const cardsTitles = document.querySelectorAll('.section-type-products h4')
 cardsTitles.forEach(
  cardTitle => {
    const valueCardTitle = cardTitle.innerText
    console.log(valueCardTitle)
    const card = cardTitle.parentElement
    console.log(card)
    if (valueCardTitle === typeButton) {
      card.classList.remove('hide-component')
      card.classList.add('show-component')
    } else if (typeButton === 'Todos') {
      card.classList.add('show-component')
      card.classList.remove('hide-component') 
    } else {
      card.classList.remove('show-component')
      card.classList.add('hide-component')

    } 
  })
 }

const ToothPasteproducts = [
  {
    name: "Pasta de dente",
    type: "Pasta de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_toothpaste.svg",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    name: "Pasta de dente",
    type: "Pasta de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_toothpaste.svg",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    name: "Pasta de dente",
    type: "Pasta de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_toothpaste.svg",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    name: "Pasta de dente",
    type: "Pasta de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_toothpaste.svg",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
 ]


 document.querySelector('.tooth-paste-products').innerHTML = ToothPasteproducts.map(product => {
  return `

        
        <div class="product-card">
          <img src="${product.img_url}" alt="${product.alt}" />
          <h4>${product.name}</h4>
          <p>${product.price}</p>
          <img src="${product.fake_rating}" alt="fake rating" />
          <button>Adicionar ao carrinho</button>
        </div>
  `
 }).join('')

 
 
 const ToothBrushproducts = [
  {
    name: "Escova de dente",
    type: "Escova de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_tooth.svg",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    name: "Escova de dente",
    type: "Escova de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_tooth.svg",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    name: "Escova de dente",
    type: "Escova de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_tooth.svg",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    name: "Escova de dente",
    type: "Escova de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_tooth.svg",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
 ]

 
 document.querySelector('.tooth-brush-products').innerHTML = ToothBrushproducts.map(product => {
  return `

        <div class="product-card">
          <img src="${product.img_url}" alt="${product.alt}" />
          <h4>${product.name}</h4>
          <p>${product.price}</p>
          <img src="${product.fake_rating}" alt="fake rating" />
          <button>Adicionar ao carrinho</button>
        </div>
  `
 }).join('')


