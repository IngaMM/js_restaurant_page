import { header_or_paragraph } from './helper_functions'
import { clear_content} from './helper_functions'

function image() {
  var element = document.createElement("img");
  element.src = "../src/pictures/Restaurant.jpg";
  return element;
};

function home() {
  clear_content();
  var element = document.createElement("div");
  element.id = "home";
  document.getElementById("content").appendChild(element);
  document.getElementById("home").appendChild(image());
  document.getElementById("home").appendChild(header_or_paragraph('My Wonderful Restaurant', 'h1'));
  document.getElementById("home").appendChild(header_or_paragraph('Serving delicious food in a cosy and at the same time modern atmosphere. Come and visit us for breakfast, lunch or dinner.', 'p'));
};

export { home }
