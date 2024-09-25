
const toothProducts = [
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

const filterButtons = document.querySelectorAll(".section-filter button")
const cards = document.querySelectorAll('.product-card')

// rever isso aqui
const productTypes = toothProducts.map(({type}) => type)
const uniqueTypes = [...new Set(productTypes)]

filterButtons.forEach(button => {
  button.addEventListener('click', filterCards)
})

function filterCards(e) {
 const typeButton = e.target.value

 console.log(typeButton)

 const cardsTitles = document.querySelectorAll('.section-type-products h4')
 cardsTitles.forEach(
  cardTitle => {
  

    const valueCardTitle = cardTitle.innerText 
    const card = cardTitle.parentElement

    if (!uniqueTypes.includes(typeButton) && typeButton !== 'Todos') {
      renderingErrorSection(typeButton) 
      console.log("deu b.o" + valueCardTitle)
 
    } else {
      valueCardTitle === typeButton || typeButton === 'Todos' 
      ? card?.classList.remove('hide-component') 
      : card?.classList.add('hide-component') 
      console.log("deu bom" + valueCardTitle)

    }
 
    document.querySelector('.section-title').textContent = `${typeButton}`
        
  },

)
}

function renderingErrorSection(typeButton) {
  document.querySelector('.section-type-products').innerHTML = `
    <div class="error-section">
      <h3>${typeButton}</h3>
      <h2>Ops! Parece que não temos esse produto por aqui</h2>
    </div>
  `
}


document.querySelector('.tooth-products').innerHTML = toothProducts.map(product => {
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




 
 

