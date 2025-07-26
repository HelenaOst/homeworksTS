//#HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
type Product1 = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
}
type Cart1 = {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}
type CartsResponse = {
    carts: Cart1[];
    total: number;
    skip: number;
    limit: number;
}

fetch('https://dummyjson.com/carts')
  .then((value: Response): Promise<CartsResponse> => value.json())
  .then((cartsObject: CartsResponse): void => {
      const {carts} = cartsObject;
      let wrapper: HTMLElement | null = document.getElementById('wrapper');
      if (wrapper) {
      for (let cart of carts) {
          const div:HTMLDivElement = document.createElement('div');
          div.classList.add('cart-container');

          const cartId: HTMLParagraphElement = document.createElement("p");
          cartId.innerHTML = `id: ${cart.id}`;

          const p: HTMLParagraphElement = document.createElement('p');
          p.innerHTML = `Products:`;

          const cartProducts: HTMLUListElement = document.createElement("ul");
          for (let product of cart.products){
              const li: HTMLLIElement = document.createElement("li");
              li.innerHTML = product.title;
              cartProducts.appendChild(li);
          }



          const cartTotal:HTMLParagraphElement = document.createElement("p");
          cartTotal.innerHTML = `total: ${cart.total}`;

          const cartDiscountedTotal: HTMLParagraphElement = document.createElement("p");
          cartDiscountedTotal.innerHTML = `discountedTotal: ${cart.discountedTotal}`;

          const cartUserId:HTMLParagraphElement = document.createElement("p");
          cartUserId.innerHTML = `userId: ${cart.userId}`;

          const cartTotalProducts: HTMLParagraphElement = document.createElement("p");
          cartTotalProducts.innerHTML = `totalProducts: ${cart.totalProducts}`;

          const cartTotalQuantity:HTMLParagraphElement = document.createElement("p");
          cartTotalQuantity.innerHTML = `totalQuantity: ${cart.totalQuantity}`;

          div.append(cartId, p, cartProducts, cartTotal, cartDiscountedTotal, cartUserId, cartTotalProducts, cartTotalQuantity);

          wrapper.appendChild(div);
      }}
  });