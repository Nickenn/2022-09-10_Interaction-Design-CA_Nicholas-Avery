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

    detailsContainer.innerHTML = `<h1>${product.name}</h1>`

    createHTML(productDetails);

    }

 catch(error) {
    console.log(error);
 }

fetchProduct(url);

function createHTML(productDetails) {
    detailsContainer.innerHTML += `
        <div class="single-product">
        <div class="product"><h1>${product.name}</h1></div>
        <div class="product-image" class="product" style="background-image: url('${product.images[0].src}')"></div>
        <div class="product-price"><h2>kr. ${product.prices.price},-</h2></div>
        <div class="product"><h4>${product.description}</h4></div>`;
}
}