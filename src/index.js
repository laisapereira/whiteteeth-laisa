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


filterButtons.forEach(button => {
  button.addEventListener('click', filterCards)
})

function filterCards(e) {
 const typeButton = e.target?.value

 matchTypeCards = toothProducts.filter(product => product.type === typeButton)
 
 renderFilteredCards(matchTypeCards)

if (typeButton === 'Todos') { 
 renderFilteredCards(toothProducts)
}

if (matchTypeCards.length > 0) {
  renderFilteredCards(matchTypeCards);
} else {
  renderingErrorSection(typeButton, matchTypeCards);   
}

 }

function renderingErrorSection(typeButton) {

  var divError = document.querySelector('.error-section')

 if (divError) { 
  divError.querySelector('h3').textContent = typeButton
}  else  {
   var errorSection = document.createElement('div')
    errorSection.innerHTML = ` 
    
    <div class="error-section">
      <h3>${typeButton}</h3>
      <h2>Ops! Parece que não temos esse produto por aqui</h2>
    </div> `
  
    document.querySelector('.section-type-products').appendChild(errorSection)
  
    console.log(errorSection)
    
  } 
}

function renderFilteredCards(matchTypeCards) {
  const groupProducts = matchTypeCards.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {});


  document.querySelector('.section-type-products').innerHTML = Object.keys(groupProducts).map(type => {
    return `
      <section class="container-products">
        <h3>${type}</h3>
        <div class="section-line"></div>
        <div class="tooth-products">
          ${groupProducts[type].map(product => {
            return `
              <div class="product-card">
                <img src="${product.img_url}" alt="${product.alt}" />
                <h4>${product.name}</h4>
                <p>${product.price}</p>
                <img src="${product.fake_rating}" alt="fake rating" />
                <button>Adicionar ao carrinho</button>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }).join('');

}




 