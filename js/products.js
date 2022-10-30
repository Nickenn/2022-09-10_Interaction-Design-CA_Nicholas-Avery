const baseUrl = "https://nicksite.one/rainy_days/wp-json/wc/store/products"
const productContainer = document.querySelector(".products-container");
const search = document.querySelector(".search")

async function fetchProducts(url) {
    
    try {
    const response = await fetch(url);
    const products = await response.json();

    
    console.log(products);

    products.forEach(function(product) {
        productContainer.innerHTML += `<a href="/product-specific.html?id=${product.id}" class="single-product">
        <div class="single-product">
        <div class="product"><h2>${product.name}</h2></div>
        <div class="product-image" class="product" style="background-image: url('${product.images[0].src}')"><div class="product-price"><h2>kr. ${product.prices.price},-</h2></div></div>
        <div class="product"><h4>${product.short_description}</h4></div>
        </div>
        </a>`

    })

 }
 catch(error) {
    console.log(error);
 }

}

fetchProducts(baseUrl);

search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase()

    const filterProducts = product.filter(function(products) {
        if(products.name.toLowerCase(searchValue)) {
            return true;
        }
    })

    console.log(filterProducts)
}



