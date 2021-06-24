import product from '../templates/product.hbs';
import menu from '../menu.json';
const productList = document.querySelector('.js-menu');
const markup = createProductMarkup(menu);

productList.insertAdjacentHTML('beforeend', markup);

function createProductMarkup(menu) {
  return menu.map(product).join('');
}
