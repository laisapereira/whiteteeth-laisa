const toothProducts = [
  {
    id: 1,
    name: "Hortelã",
    type: "Pasta de dente",
    price: "R$ 70,90",
    img_url: "./assets/images/img_toothpaste.svg",
    label: "original",
    previous_price: "",
    percent: "",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 2,
    name: "Morango",
    type: "Pasta de dente",
    price: "R$ 50,90",
    img_url: "./assets/images/img_toothpaste.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 2,
    name: "Uva",
    type: "Pasta de dente",
    price: "R$ 50,90",
    img_url: "./assets/images/img_toothpaste.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 3,
    name: "Café",
    type: "Pasta de dente",
    price: "R$ 50,90",
    img_url: "./assets/images/img_toothpaste.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 4,
    name: "Bamboo",
    type: "Escova de dente",
    price: "R$ 50,90",
    img_url: "./assets/images/img_tooth.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 5,
    name: "Mogno",
    type: "Escova de dente",
    price: "R$ 50,90",
    img_url: "./assets/images/img_tooth.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"
  },
  {
    id: 6,
    name: "Carvalho",
    type: "Escova de dente",
    price: "R$ 50,90",
    img_url: "./assets/images/img_tooth.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 7,
    name: "Fio dental",
    type: "Outros",
    price: "R$ 50,90",
    img_url: "./assets/images/img_dentalfloss.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_dentalfloss.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },

  {
    id: 8,
    name: "Fio dental",
    type: "Outros",
    price: "R$ 50,90",
    img_url: "./assets/images/img_dentalfloss.svg",
    label: "discount",
    previous_price: "R$ 70,90",
    percent: "30%",
    alt: "./assets/images/img_dentalfloss.svg",
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
} else if (typeButton !== 'Todos') {
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
      <div class="section-line"></div>
      <h2>Ops! Parece que não temos esse tipo de produto por aqui. <br> Que tal conferir <a href="">outros?</a></h2>
      <img src="./assets/images/img_not_found.svg" alt="error" />
    </div> `
  
    document.querySelector('.section-type-products').appendChild(errorSection)
  
  
    
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
            ${product.label === 'discount' 
          ? `<ul class="product-card">
              <li><label>${product.percent} OFF</label></li>
              <li><img class="product-image" src="${product.img_url}" alt="${product.alt}" /></li>
              <li><img class="product-rate"src="${product.fake_rating}" alt="fake rating" /></li>
              <li>
                <h4>${product.name}</h4>
              </li>
              <li><label class="product-previous-price"><s>${product.previous_price}</s></label></li>
              <li>
                <p class="product-price">${product.price}</p>
              </li> 
              <button>Adicionar ao carrinho</button>
            </ul>`
          : `<ul class="product-card">
              <li><img class="product-image" src="${product.img_url}" alt="${product.alt}" /></li>
              <li><img class="product-rate" src="${product.fake_rating}" alt="fake rating" /></li>
              <li>
                <h4>${product.name}</h4>
              </li>
              <li>
                <p class="product-price">${product.price}</p>
              </li> 
              <button>Adicionar ao carrinho</button>
            </ul>`
        }   
      `;
          }).join('')}
        </div>
      </section>
    `;
  }).join('');


}



 