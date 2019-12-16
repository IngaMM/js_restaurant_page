import { header_or_paragraph } from './helper_functions'
import { clear_content} from './helper_functions'

function list(id) {
  var element = document.createElement('ul');
  element.id = id;
  return element;
}

function list_item(id, text) {
  var parent = document.getElementById(id);
  var element = document.createElement('li');
  element.innerHTML = text;
  parent.appendChild(element);
}


function menu() {
  clear_content();
  var element = document.createElement("div");
  element.id = "menu";
  document.getElementById("content").appendChild(element);
  document.getElementById("menu").appendChild(header_or_paragraph('Menu', 'h1'));
  document.getElementById("menu").appendChild(header_or_paragraph('Soups', 'h2'));
  document.getElementById("menu").appendChild(list('soups'));
  list_item("soups", "Vegetable Soup");
  list_item("soups", "Lentil Soup");
  document.getElementById("menu").appendChild(header_or_paragraph('Mains', 'h2'));
  document.getElementById("menu").appendChild(list('mains'));
  list_item("mains", "Pasta with Vegetables");
  list_item("mains", "Burger with Fries");
  list_item("mains", "Pancakes with Vegetables");
  document.getElementById("menu").appendChild(header_or_paragraph('Desserts', 'h2'));
  document.getElementById("menu").appendChild(list('desserts'));
  list_item("desserts", "Icecream");
  list_item("desserts", "Mango with Sticky Rice");
};



export { menu }
