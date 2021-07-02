
import { ProductList } from "./components/productList/productList.js";
const body = document.querySelector('body');
const main = document.createElement('main');
main.classList.add('main')
body.append(main)

new ProductList(main)
