//The most commonly used properties and methods.

// innerHTML - sets or returns the HTML of the item.
// innerText - sets or returns the text in the element (without html).
// tagName - returns the tag name.
// setAttribute	- sets the element's attribute.
// getAttribute	- gets the element's attribute.
// removeAttribute - is used to delete the attribute.
// dataset - returns the dataset.

//For example: innerHTML, innertext or textContent (innerText returns the text after 
//applying styles, and textContent suppresses styles).

let btn = document.querySelector('.btn');

console.log(btn.innerHTML); 
console.log(btn.innerText); 
console.log(btn.textContent);

//or

let div = document.querySelector('title');
div.innerText='Animal';

//For example: innerHTML, innertext or textContent.
