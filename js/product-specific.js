const detailsContainer = document.querySelector(".details-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://nicksite.one/rainy_days/wp-json/wc/store/products/" + id;

async function fetchProduct(url) {
    
    try {
    const response = await fetch(url);
    const product = await response.json();

    
    console.log(product.name);

    detailsContainer.innerHTML = `        
    <div class="single-product">
    <div class="product"><h1>${product.name}</h1></div>
    <img class="product-image" src="${product.images[0].src}"/></figure>
    <section display="flex" class="product-specific-small">
      <img src="${product.images[0].src}" alt="Image of Normandy high performance jacket" class="product-image"/></figure>
      <img src="${product.images[0].src}" alt="Image of Normandy high performance jacket" class="product-image"/></figure>
      <img src="${product.images[0].src}" alt="Image of Normandy high performance jacket" class="product-image"/></figure>
      <img src="${product.images[0].src}" alt="Image of Normandy high performance jacket" class="product-image"/></figure>
     </section>
    <div class="product-price"><h3>kr. ${product.prices.price},-</h3></div>
    <div class="product"><h4>${product.short_description}</h4></div>
    <a href="/successpage.html" class="cta">ADD TO CART</a>
    <h3>Description:</h3>
    <div class="product"><p>${product.description}</p></div>`;

    createHTML(productDetails);

    }

 catch(error) {
    console.log(error);
 }

}

fetchProduct(url);