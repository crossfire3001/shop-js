function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceElements = cartWrapper.querySelectorAll('.price__currency');

    const totalPriceEl = document.querySelector('.total-price');

    // Общая стоимость товаров
    let priceTotal = 0;

    priceElements.forEach((item) => {
        console.log(item);

       const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

       priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);


       console.log(priceTotal);
    })

    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;
}


