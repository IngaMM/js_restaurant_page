import { header_or_paragraph } from './helper_functions'
import { clear_content} from './helper_functions'

function contact() {
  clear_content();
  var element = document.createElement("div");
  element.id = "home";
  document.getElementById("content").appendChild(element);
  document.getElementById("home").appendChild(header_or_paragraph('Address', 'h1'));
  document.getElementById("home").appendChild(header_or_paragraph('Beautiful Street 77, 77777 Beautiful City', 'p'));
  document.getElementById("home").appendChild(header_or_paragraph('Directions', 'h1'));
  document.getElementById("home").appendChild(header_or_paragraph('By public transportation', 'h2'));
  document.getElementById("home").appendChild(header_or_paragraph('Take metro line 5 to the stop "Sport Stadium". Exit A2. Follow the street for about 100m. You will see us on the left side.', 'p'));
  document.getElementById("home").appendChild(header_or_paragraph('By car', 'h2'));
  document.getElementById("home").appendChild(header_or_paragraph('Take exit 55 from highway 7. Turn immediately right. You will see us on the left side of the road.', 'p'));
  document.getElementById("home").appendChild(header_or_paragraph('Contact', 'h1'));
  document.getElementById("home").appendChild(header_or_paragraph('E-mail: WonderfulRestaurant@example.com, Tel: 123456', 'p'));
};

export { contact }
