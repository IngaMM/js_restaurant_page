function header_or_paragraph(text, type) {
  var element = document.createElement(type);
  element.innerHTML = text;
  return element;
};

function clear_content() {
  var list = document.getElementById("content");
   while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
   }
}

export { header_or_paragraph, clear_content }
