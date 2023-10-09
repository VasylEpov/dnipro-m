// *************Практика*************** \\
// Для практичного завдання використаємо збірку Parcel та ES6 модулі
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Homevv

import { createMarkup } from './templates/templatePLP';
import instruments from './products.json';

const selectors = {
  container: document.querySelector('.js-list'),
};

selectors.container.insertAdjacentHTML('afterbegin', createMarkup(instruments));

selectors.container.addEventListener('click', handlerAdd);

function handlerAdd(evt) {
  if (!evt.target.classList.contains('btn-js')) {
    return;
  }

  console.log(evt.target);

  const product = evt.target.closest('.js-product');
  const productId = Number(product.dataset.id);
  const currentProduct = instruments.find(({ id }) => id === productId);
  console.log('dfdf :', currentProduct);
  console.log(product);
  console.log(productId);
}
