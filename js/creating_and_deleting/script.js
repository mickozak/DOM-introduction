//Creating an object.

//Creating an object with document.createElement(newElement) - for example:

let firstObj = document.createElement('div');
    firstObj.id = 'firstObj'
    firstObj.innerText = 'This is...';
    firstObj.setAttribute('title', 'This is new Element');
    firstObj.classList.add('objElement');
    firstObj.style.color = 'red';

let secondObj = document.createElement('div');
    secondObj.id = 'secondObj'
    secondObj.innerText = 'My name is...';
    secondObj.setAttribute('title', 'This is second Element');
    secondObj.classList.add('firstObj');
    secondObj.style.color = 'green';

//The element can be inserted into the document via parentElement.appendChild(newElement) - for example:

let body = document.querySelector('body')

    body.appendChild(firstObj);
    body.appendChild(secondObj);

//Removing elements via parentNode.removeChild(element) - for example:

    body.removeChild(secondObj);

//Replacing elements via parent.replaceChild(newChild, oldChild) - for example:

    body.replaceChild(secondObj,firstObj);
    
