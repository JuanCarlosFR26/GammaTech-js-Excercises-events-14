// Ejercicio 1

// Debajo tienes un <div> vacío. Crea, dentro de él, un formulario con una <label>, un <input>, y su botón de enviar. Cuando envíes el formulario, lo que hayas escrito deberá aparecer debajo del formulario en una etiqueta <p>
const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('input');

const divForm = document.querySelector('#ejercicio-1 .results-container');



label.textContent = 'Nombre: ';
label.htmlFor = 'name';
input.type = 'text';
input.name = 'name';
input.id = 'name';
input.placeholder = 'Introduzca su nombre: ';
button.textContent = 'Enviar';
button.type = 'submit';

form.appendChild(label);
form.appendChild(input);
form.appendChild(button);

divForm.appendChild(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();


    const p = document.createElement('p');


    p.textContent = e.target[0].value;

    divForm.appendChild(p);

})


// Ejercicio 2

// Dado el siguiente formulario, deberás realizar una validación simple: si se envía el formulario vacío, deberás mostrar un mensaje de error debajo que indique "Este campo es obligatorio".

const artDiv = document.querySelector('#ejercicio-2');
const form2 = document.querySelector('#ejercicio-2 form')


form2.addEventListener('submit', (e) => {
    e.preventDefault();
    if(e.target.data.value === '') {
        const p = document.createElement('p');
        p.style.width = '200px';
        p.style.height = '30px';
        p.style.border = '4px solid crimson';
        p.style.backgroundColor = '#ffcccb';
        p.style.color = '#d41517';
        p.style.textAlign = 'center';
        p.style.lineHeight = '1.8';
        p.style.fontWeight = 'bold';
        p.textContent = 'Este campo es obligatorio';
        artDiv.appendChild(p);
        setTimeout(() => {
            p.remove();
        }, 2000);
    } else {
        const p = document.createElement('p');
        p.style.width = '300px';
        p.style.height = '30px';
        p.style.border = '4px solid darkgreen';
        p.style.backgroundColor = '#9ff38c';
        p.style.color = 'darkgreen';
        p.style.textAlign = 'center';
        p.style.lineHeight = '1.8';
        p.style.fontWeight = 'bold';
        p.textContent = `Valor introducido: ${e.target.data.value}`;
        artDiv.appendChild(p);
    }
})


// Ejercicio 3
// El siguiente formulario sólo acepta números. Cuando se introduzca un número, en el <div> que hay debajo deben aparecer tantos botones como el número que hayas introducido en el <input>. Además:
// Los botones deben contener como texto el número que le corresponda: 1 el primero, 2 el segundo, etc.
// Los botones pares tendrán un fondo de un color, los impares de otro.
// Los botones con números múltiplos de 10 tendrán otro color distinto.

const div3 = document.querySelector('#ejercicio-3 .results-container');
const form3 = document.querySelector('#ejercicio-3 form');

form3.addEventListener('submit', (e) => {
    e.preventDefault();

    div3.innerText = '';
    if(Number(e.target.number.value)) {
        for(let i = 1; i <= e.target.number.value; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            div3.appendChild(button);
            if(i % 2 === 0) {
                button.style.backgroundColor = 'lightgreen';
            } else {
                button.style.backgroundColor = 'yellow';
            }

            if(i % 10 === 0) {
                button.style.backgroundColor = 'orange';
            }
        }
    }
})


// Ejercicio 4

// Crea, en el <div> que tienes debajo, un formulario de registro de usuarios que contenga los siguientes campos:
// Nombre (string)
// Email (string)
// Contraseña (password)
// Edad (number)
// Cuando se envíe el formulario, deberá aparecer aquí debajo la información de cada usuario.

const div4 = document.querySelector('#ejercicio-4 .results-container');
const form4 = document.createElement('form');
const inputName = document.createElement('input');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const inputAge = document.createElement('input');
const inputSubmit = document.createElement('input');

form4.style.display = 'flex';
form4.style.flexDirection = 'column';

inputName.style.margin = '12px';
inputEmail.style.margin = '12px';
inputPassword.style.margin = '12px';
inputAge.style.margin = '12px'

inputName.style.width = '200px';
inputEmail.style.width = '200px';
inputPassword.style.width = '200px';
inputAge.style.width = '200px'

inputName.style.height = '20px';
inputEmail.style.height = '20x';
inputPassword.style.height = '20px';
inputAge.style.height = '20px'

inputSubmit.style.width = '200px';
inputSubmit.style.height = '40px';
inputSubmit.style.margin = '12px';

// Labels
const labelName = document.createElement('label');
labelName.innerText = 'Nombre: ';
labelName.htmlFor = 'nameForm'

const labelEmail = document.createElement('label');
labelEmail.htmlFor = 'email'
labelEmail.innerText = 'Email: ';

const labelPassword = document.createElement('label');
labelPassword.htmlFor = 'password'
labelPassword.innerText = 'Password: '

const labelAge = document.createElement('label');
labelAge.htmlFor = 'age'
labelAge.innerText = 'Age: '

// Add types
inputName.type = 'name';
inputName.id = 'nameForm';
inputName.name = 'name';

inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.name = 'email';

inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';

inputAge.type = 'number';
inputAge.id = 'age';
inputAge.name = 'age';

inputSubmit.type = 'submit';
inputSubmit.innerText = 'Enviar';




// Adding elements to form
form4.appendChild(labelName)
form4.appendChild(inputName)
form4.appendChild(labelEmail)
form4.appendChild(inputEmail)
form4.appendChild(labelPassword)
form4.appendChild(inputPassword)
form4.appendChild(labelAge)
form4.appendChild(inputAge)
form4.appendChild(inputSubmit)

div4.appendChild(form4);

form4.addEventListener('submit', (e) => {
    e.preventDefault();
    if(e.target.name.value !== '' && e.target.email.value !== '' && e.target.password.value !== '' && e.target.age.value !== '') {
        const nameValue = e.target.name.value;
        const emailValue = e.target.email.value;
        const passwordValue = e.target.password.value;
        const ageValue = e.target.age.value;
        const reset = document.createElement('input');

        reset.innerText = 'Reset';
        reset.type = 'reset';

        const user = {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
            age: ageValue
        }

        div4.innerText = `Nombre: ${user.name} \n Email: ${user.email} \n Password: ${user.password} \n Age: ${user.age} \n `;
        div4.appendChild(reset);

        reset.addEventListener('click', () => {
            div4.innerText = '';
            div4.appendChild(form4).reset();
        })

    }

})


// Ejercicio 5

// Ahora vamos a crear la mecánica de un <input>, pero sin un <input>. Aquí debajo tienes un <div>. Cuando el usuario pulse una tecla, deberá aparecer el el div la letra que ha pulsado. Si el usuario pulsa "c", luego "a", luego "s", luego "a", en el div deberá ir apareciendo la palabra "casa". Cuando se pulse el botón de "Clear", deberá eliminarse todo el texto escrito hasta ese momento en el <div>.

const div5 = document.querySelector('#ejercicio-5 .results-container');
const buttonRes = document.getElementById('clear-btn');
const body = document.querySelector('body');


body.addEventListener('keydown', (e) => {
    let message = '';
    message += e.key
    div5.innerText += message;
    
    buttonRes.addEventListener('click', () => {
        div5.innerText = '';
    })

})