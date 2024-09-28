const toothProducts = [
  {
    id: 1,
    name: "Hortelã",
    type: "Pasta de dente",
    price: "70.90",
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
    price: "50.90",
    img_url: "./assets/images/img_toothpaste.svg",
    label: "discount",
    previous_price: "70,90",
    percent: "30%",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 3,
    name: "Uva",
    type: "Pasta de dente",
    price: "50.90",
    img_url: "./assets/images/img_toothpaste.svg",
    label: "discount",
    previous_price: "70,90",
    percent: "30%",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 4,
    name: "Café",
    type: "Pasta de dente",
    price: "50.90",
    img_url: "./assets/images/img_toothpaste.svg",
    label: "discount",
    previous_price: "70.90",
    percent: "30%",
    alt: "./assets/images/img_toothpaste.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 5,
    name: "Bamboo",
    type: "Escova de dente",
    price: "50.90",
    img_url: "./assets/images/img_tooth.svg",
    label: "discount",
    previous_price: "70.90",
    percent: "30%",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 6,
    name: "Mogno",
    type: "Escova de dente",
    price: "50.90",
    img_url: "./assets/images/img_tooth.svg",
    label: "discount",
    previous_price: "70.90",
    percent: "30%",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"
  },
  {
    id: 7,
    name: "Carvalho",
    type: "Escova de dente",
    price: "50.90",
    img_url: "./assets/images/img_tooth.svg",
    label: "discount",
    previous_price: "70.90",
    percent: "30%",
    alt: "./assets/images/img_tooth.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
  {
    id: 8,
    name: "Fio dental",
    type: "Outros",
    price: "50.90",
    img_url: "./assets/images/img_dentalfloss.svg",
    label: "discount",
    previous_price: "70.90",
    percent: "30%",
    alt: "./assets/images/img_dentalfloss.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },

  {
    id: 9,
    name: "Fio dental",
    type: "Outros",
    price: "50.90",
    img_url: "./assets/images/img_dentalfloss.svg",
    label: "discount",
    previous_price: "70.90",
    percent: "30%",
    alt: "./assets/images/img_dentalfloss.svg",
    fake_rating: "./assets/icons/ic_rate.svg"

  },
 ]

// filtro de produtos

const filterButtons = document.querySelectorAll(".section-filter button")
const cards = document.querySelectorAll('.product-card')

const defaultButton = document.getElementById('filter-default')

if (defaultButton) {
  defaultButton.classList.add('active')
  renderFilteredCards(toothProducts);
}

filterButtons.forEach(button => {
  button.addEventListener('click', filterCards)  
})

function filterCards(e) {

 defaultButton.classList.remove('active')
 const typeButton = e.target?.value
 matchTypeCards = toothProducts.filter(product => product.type === typeButton)
 renderFilteredCards(matchTypeCards)

if (typeButton === 'Todos') { 
 renderFilteredCards(toothProducts)
}
if (matchTypeCards.length > 0) {
  renderFilteredCards(matchTypeCards);
} else if (typeButton !== 'Todos') {
  renderingErrorSection(typeButton);   
}
}

function renderingErrorSection(typeButton) {
 var errorContainer = document.querySelector('.error-section')

 if (errorContainer) { 
  errorContainer.querySelector('h3').textContent = typeButton
}  else  {
   var errorSection = document.createElement('div')
    errorSection.innerHTML = ` 
    <div class="error-section">
      <h3>${typeButton}</h3>
      <div class="section-line"></div>
      <h2>Ops! Parece que não temos esse tipo de produto por aqui. <br> Que tal conferir <a href="/src">outros?</a></h2>
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
              <li><label class="product-discount">${product.percent} OFF</label></li>
              <li><img class="product-image" src="${product.img_url}" alt="${product.alt}" /></li>
              <li><img class="product-rate"src="${product.fake_rating}" alt="fake rating" /></li>
              <li>
                <h4>${product.name}</h4>
              </li>
              <li><label class="product-previous-price"><s>${product.previous_price}</s></label></li>
              <li>
                <p class="product-price"> R$ ${product.price}</p>
              </li> 
              <button onClick="addToCart(${product.id})">Adicionar ao carrinho</button>
            </ul>`
          : `<ul class="product-card">
              <li class="no-discount"><img class="product-image" src="${product.img_url}" alt="${product.alt}" /></li>
              <li><img class="product-rate" src="${product.fake_rating}" alt="fake rating" /></li>
              <li>
                <h4>${product.name}</h4>
              </li>
              <li>
                <p class="product-price">R$ ${product.price}</p>
              </li> 
              <button onClick="addToCart(${product.id})">Adicionar ao carrinho</button>
            </ul>`
        }   
      `;
          }).join('')}
        </div>
      </section>
    `;
  }).join('');


}


// carrinho de compras

const buttonCart = document.getElementById('header-cart-user')
const cartContainer = document.querySelector(".container-cart")

buttonCart.addEventListener('click', () => {
   cartContainer.classList.toggle('active')
})

var productsCart = []

function addToCart (productId) {
 
  var { img_url, name, type, price, previous_price} = toothProducts.find(product => product.id === productId)

  var summarizedProduct = {img_url, name, type, price, previous_price}

  let positionItemInCart = productsCart.findIndex((value) => value.productId == productId);

  if (positionItemInCart >= 0) {
    productsCart[positionItemInCart].quantity = productsCart[positionItemInCart].quantity + 1;
  } else {
    productsCart.push({
          ...summarizedProduct,
          id: productId,
          quantity: 1
      });
  } 

  displayCart(productsCart);
  addCartToMemory();
  console.log(productsCart);

}

function changeQuantityCart (productId, typeOfCount) {
  
  let positionItemInCart = productsCart.findIndex((value) => value.id == productId);
 
  if(positionItemInCart >= 0){
      var chooseProduct = productsCart[positionItemInCart];
      console.log(chooseProduct)

         switch (typeOfCount) {
          case 'plus':
              chooseProduct.quantity = chooseProduct.quantity + 1;         
              break;
      
          default:
              let changeQuantity = chooseProduct.quantity - 1;
              if (changeQuantity > 0) {
                  chooseProduct.quantity = changeQuantity;
              }else{
                  productsCart.splice(positionItemInCart, 1);
              }
              break;
      }

      displayCart(productsCart);
      addCartToMemory();

  }
  
}

const addCartToMemory = () => {
  localStorage.setItem('productsCart', JSON.stringify(productsCart));
}

const getCartFromMemory = () => {
  if(localStorage.getItem('productsCart')) {
    productsCart = JSON.parse(localStorage.getItem('productsCart'));
    displayCart(productsCart);
}
}

let containerCart = document.querySelector('.cart-items')
let totalCart = document.querySelector('.cart-result')

function displayCart(summarizedProduct) {

 containerCart.innerHTML = '';
  let totalQuantity = 0;
  let totalCartValue = 0;

  if(summarizedProduct.length > 0){
      summarizedProduct.forEach(item => {
          totalQuantity = totalQuantity +  item.quantity;
          totalCartValue = totalCartValue + item.price * item.quantity


          let newProduct = document.createElement('div');

          newProduct.classList.add('selected-item');
          newProduct.dataset.id = item.id;
          let positionItemInCart = productsCart.findIndex((value) => value.id == item.id);
          var productSelected = productsCart[positionItemInCart];

            newProduct.innerHTML = `
                <div>
                  <div class="image">
                      <img src="${productSelected.img_url}">
                  </div>
                  <div class="name">
                    ${productSelected.name}
                  </div>
                  <div class="totalPrice"> R$ ${Number(productSelected.price * item.quantity).toFixed(2)}</div>
                  <div class="quantity">
                      <button class="minus"> - </button>
                      <span>${item.quantity}</span>
                      <button class="plus"> + </button>
                  </div>
                </div>
            `;

            containerCart.appendChild(newProduct)

          }
     
        )
      
  }
     totalCart.innerText = `R$ ${totalCartValue.toFixed(2)}`
/*   iconCartSpan.innerText = totalQuantity; */
}

  containerCart.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
      let productId = positionClick.closest('.selected-item').getAttribute('data-id')
      positionClick.classList.contains('plus') ? typeOfCount = 'plus' :typeOfCount = 'minus'

      changeQuantityCart(productId, typeOfCount);
  } 

  addCartToMemory()
})


// envio de email ao lead

var buttonSubmit = document.querySelector('.footer-form-button')

buttonSubmit.addEventListener('click', async function(e) {
  e.preventDefault()
  var userEmail = document.querySelector(".footer-email-input").value

  try {
    const response = await fetch("http://localhost:3000/email", {
      method: "POST",
      body: JSON.stringify({userEmail}),
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  return response.data
    
  } catch (error) {
    console.log(error)
    
  }

})