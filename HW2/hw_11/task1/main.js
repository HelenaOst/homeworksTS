"use strict";
fetch('https://dummyjson.com/carts')
    .then((value) => value.json())
    .then((cartsObject) => {
    const { carts } = cartsObject;
    let wrapper = document.getElementById('wrapper');
    if (wrapper) {
        for (let cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
            const cartId = document.createElement("p");
            cartId.innerHTML = `id: ${cart.id}`;
            const p = document.createElement('p');
            p.innerHTML = `Products:`;
            const cartProducts = document.createElement("ul");
            for (let product of cart.products) {
                const li = document.createElement("li");
                li.innerHTML = product.title;
                cartProducts.appendChild(li);
            }
            const cartTotal = document.createElement("p");
            cartTotal.innerHTML = `total: ${cart.total}`;
            const cartDiscountedTotal = document.createElement("p");
            cartDiscountedTotal.innerHTML = `discountedTotal: ${cart.discountedTotal}`;
            const cartUserId = document.createElement("p");
            cartUserId.innerHTML = `userId: ${cart.userId}`;
            const cartTotalProducts = document.createElement("p");
            cartTotalProducts.innerHTML = `totalProducts: ${cart.totalProducts}`;
            const cartTotalQuantity = document.createElement("p");
            cartTotalQuantity.innerHTML = `totalQuantity: ${cart.totalQuantity}`;
            div.append(cartId, p, cartProducts, cartTotal, cartDiscountedTotal, cartUserId, cartTotalProducts, cartTotalQuantity);
            wrapper.appendChild(div);
        }
    }
});
