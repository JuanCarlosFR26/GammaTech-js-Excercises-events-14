// Ejercicios DOM: Click events

// Ejercicio 1

// Cada vez que se haga click en este botón, el background de toda esta página debe cambiar a un color aleatorio.
const articleEj1 = document.getElementById('ejercicio-1');
const buttonArticleEj1 = articleEj1.lastElementChild;
const body = document.getElementsByTagName('body');

// Random color
buttonArticleEj1.addEventListener('click', () => {
    let hexRand = '';
    let patternHex = 'abcdef0123456789';
    let limitHex = Math.floor(Math.random() * 6);
    for (let i = 0; i <= limitHex; i++) {
        hexRand += patternHex.charAt(Math.floor(Math.random() * patternHex.length));
    }
    body[0].style.backgroundColor = `#${hexRand}`
});


// Ejercicio 2

// He aquí un contador y dos botones. Cuando se haga click en el botón de aumentar, el contador debe aumentar en 1. Cuando se haga click en el botón de disminuir, debe disminuir en 1.

const divButtons = document.getElementById('counter-btns');
const aumButton = divButtons.firstElementChild;
const dismButton = divButtons.lastElementChild;
let contadorNumber = document.getElementById('counter');

aumButton.addEventListener('click', () => {
    let int = parseInt(contadorNumber.innerText);
    int++;
    contadorNumber.innerText = int;
})

dismButton.addEventListener('click', () => {
    let int = parseInt(contadorNumber.innerText);
    int--;
    contadorNumber.innerText = int;
})

// Ejercicio 3

// Cuando se haga click en el botón, el texto debe desaparecer; si se vuelve a hacer click, aparecerá, y así sucesivamente.
const articleEj3 = document.querySelector('#ejercicio-3');
const buttonEj3 = articleEj3.children[3];
const parrafo = articleEj3.children[2];

buttonEj3.addEventListener('click', () => {
    if(parrafo.style.visibility === 'hidden') {
        buttonEj3.innerText = 'Hide text';
        parrafo.style.visibility = 'visible'
    } else if(parrafo.style.visibility = 'visible') {
        parrafo.style.visibility = 'hidden'
        buttonEj3.innerText = 'Show text';
    }
})


// Ejercicio 4

// Cuando se haga click en el botón, debe eliminarse el primer párrafo de la lista. Si no queda ninguno, no debe suceder nada, tampoco mostrar error en la consola.
const artEj4 = document.querySelector('#ejercicio-4');
const button4 = artEj4.children[3];
const listUl = artEj4.children[2];
button4.addEventListener('click', () => {
    if(listUl.childElementCount !== 0) {
        listUl.firstElementChild.remove();
    } else {
        button4.removeEventListener('click', button4);
    }
})

// Ejercicio 5

// Debajo de este enunciado hay una lista desordenada que no contiene ningún elemento, y, por lo tanto, no es visible (debes mirar en el HTML). Debajo de esa lista verás varios párrafos: cuando se haga click en el botón de cada párrafo, el texto de ese párrafo (y no otro) debe añadirse a la lista.
const emptyUl = document.querySelector('#ejercicio-5 ul');
const buttons = document.querySelectorAll('#ejercicio-5 button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const li = document.createElement('li');

        const text = button.previousElementSibling;
        li.appendChild(document.createTextNode(text.innerText));
        emptyUl.appendChild(li);
        text.remove()
    })
})

// Ejercicio 6

// Cuando se haga click en uno de los <div> que están en el cuadro de abajo, ese <div> debe desaparecer. Cuando se haga click en el botón de añadir, debe aparecer un nuevo <div> con las mismas características que los anteriores.
const squares = document.querySelectorAll('#square-container .square');
const buttonDiv = document.querySelector('#ejercicio-6 button');
const squareContainer = document.getElementById('square-container');

squares.forEach((square) => {
    square.addEventListener('click', () => {
        square.style.display = 'none'
    })

})

buttonDiv.addEventListener('click', () => {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    squareContainer.appendChild(newSquare)

    newSquare.addEventListener('click', () => {
        newSquare.style.display = 'none';
    })
})

// Ejercicio 7

// Cada botón debe cambiar el color del <div> al color indicado.
const divColor = document.querySelector('.color-div');
const buttonsColor = document.querySelectorAll('#color_btns button');

buttonsColor.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent === 'Blue') {
            divColor.style.backgroundColor = 'blue';
        } else if(button.textContent === 'Red') {
            divColor.style.backgroundColor = 'red';
        } else if(button.textContent === 'Green') {
            divColor.style.backgroundColor = 'green';
        } else if(button.textContent === 'Black') {
            divColor.style.backgroundColor = 'black';
        } else if(button.textContent === 'Purple') {
            divColor.style.backgroundColor = 'purple';
        }
    })
});


// Ejercicio 8

// Cuando se haga click en el botón de cerrar, el texto bajo el título de la card debe desaparecer, y el texto del botón debe pasar a ser "Open".
// Cuando se vuelva a hacer click, el texto volverá a aparecer, y el botón pasará a "Close".
// Usa la clase "hidden" que tienes ya descrita en el CSS.
const buttonToggle = document.querySelector('#faq-title button');
const textToggle = document.querySelector('#faq-card p');

buttonToggle.addEventListener('click', () => {
    textToggle.classList.toggle('hidden');
    (textToggle.className === 'hidden') ? buttonToggle.innerText = 'Open' : buttonToggle.innerText = 'Close'
})



// Este array debe usarse para el ejercicio 10
const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]

const art10 = document.querySelector('#ejercicio-10');
const divContainer = document.createElement('div');
divContainer.classList.add('poke-container');
art10.appendChild(divContainer)

for(const d of data) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let h4 = document.createElement('h4');
    let img = document.createElement('img');

    span.innerHTML = d.id;
    h4.innerHTML = d.name;
    img.setAttribute('src', d.img);

    // Styles
    div.style.width = '200px';
    div.style.height = '280px';
    div.style.padding = '25px'
    div.style.border = '2px dotted red';
    div.style.margin = '15px auto';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    img.style.width = '190px';
    span.textContent = `Pokédex: ${span.innerHTML}`;
    span.style.fontWeight = 'bold';
    span.style.fontSize = '24px';
    h4.style.fontSize = '28px'


    div.appendChild(span);
    div.appendChild(h4);
    div.appendChild(img);

    divContainer.appendChild(div);

}