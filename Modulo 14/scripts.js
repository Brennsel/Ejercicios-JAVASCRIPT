//ECMASscript

//ECMA - European Computer Manufacturers Association

//ECMAScript 1 (ES1) (ES2) (ES6) (ES 2016) (ES2020)

//var - nos permite hacer reasignaciones y redefinicion

//reasignacion - cambiar el valor de la variable
//redefinicion - volver a declarar la variable

//const - varaibles que no se pueden reasignar ni redefinir
//let - variables que se pueden reasignar pero no redefinir


//FUNCIONES FLECHA (arrow functions)

/*
const sumar = (a, b) => {
    return a + b;
} //funcion flecha estandar

const sumar2 = (a, b) => a + b; //escribir una funcion como expresion
console.log(sumar2(2, 3));

//string Templates
edad = 20;

console.log("Maria tiene " + edad + " años");

console.log(`Maria tiene ${edad} años (con String Template) `)

function saludar(){
    const nombre = prompt("Ingrese su nombre:");
    const mensaje = `Hola ${nombre}! Bienvenido a mi pagina`;
    const saludo = document.getElementById("saludp");
    saludo.innerHTML = mensaje;
}
*/
/*
//EJERCICIO 1
let suma = 0;

do{

    let numeroActual = Number(prompt("Ingrese un numero:"));
    suma = suma + numeroActual;

}while("Desea seguir ingresando numeros?"));
alert(`La suma de los numeros ingresados es: ${suma}`);


//EJERCICIO 1 mejorado

let suma = 0;
let continuar = true;

while(continuar){
    let numeroActual = Number(prompt("Ingrese un numero:"));
    suma = suma + numeroActual;
    continuar = confirm("Desea seguir ingresando numeros?");
}
alert(`La suma de los numeros ingresados es: ${suma}`);
*/

//LIBRERIAS
//jquery

/*
const contenedor1 = $("#id1");
const contenedor2 = $(".class1");
const botones = $("button");


console.log($('#id1')); //o directamente el elemento
console.log(contenedor2); 
console.log(botones);
*/

/*
//Disparar eventos en un boton - metodo 1
$("#saludo").on("click", function(){ 
    console.log("Hiciste click en el boton");
});

//Disparar eventos en un boton - metodo 2
$("#saludo").click(function(){
    console.log("Hiciste click en el boton");
});

//Disparar eventos en un boton - metodo 3
$("#saludo").click(() => {
    console.log("Hiciste click en el boton");
}

//Disparar eventos en un boton - metodo 4
$("#saludo").click(saludar);

function saludar(){
    console.log("Hiciste click en el boton");
}     

//Disparar eventos en un boton - metodo 5
$("#saludo").click(() => {
    saludar("Juan");
};

function saludar(nombre){
    console.log(`Hiciste click en el boton ${nombre}`);
}

//Disparar eventos en un boton - metodo 6
$("#saludo").click(() => saludar("Juan"));

function saludar(nombre){
    console.log(`Hiciste click en el boton ${nombre}`);
}


//Disparar eventos en un boton - metodo 7
$("#saludo").click(() => saludar("Brenda"));

const saludar = (nombre) => console.log(`Hiciste click en el boton ${nombre}`);
*/
/*

// $.get(url, funcion())


$('#datos').click(function(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    $.get(url, function(data){
        $('#id1').html('Se descargaron datos correctamente')
        console.log(data);
    })
});

*/
/*
//HANDLERS

const contenedor1 = document.getElementById("contenedor");
const plantilla = Handlebars.compile(`
    <h2>Bienvenidos a esta pagina con Handlers!, {{ nombre }}.</h2>
    {{#each series}}
        {{#if netflix}}
            <p>Podes ver {{ serie }} en Netflix</p>
        {{else}}
            <p>{{ serie }} no esta en Netflix</p>
        {{/if}}
        {{#unless hayluz}}
            <p>Te cortaron la luz</p>
        {{/unless}}
    {{/each}}
`);

contenedor1.innerHTML = plantilla({ 
    nombre: "Brenda",
    series: [{
            netflix: true,
            serie: "The Witcher",
            hayluz: false,
    },{
            netflix: false,
            serie: "The Mandalorian",
            hayluz: true,
    },{
            netflix: true,
            serie: "sweet tooth",
            hayluz: true,
    }]

});


//Helpers en Handlers 

// Helpers se ponen entre 2 juegos de llaves {{#if}} {{/if}}
*/

/*
EJERCICIO 2 con lo visto en Handlers y jQuery

Se debe generar una aplicación en la cual se pueda ingresar, 
mediante campos de texto, un nombre y un apellido. 
Al hacer click en un botón, dicho nombre y dicho apellido 
deberá mostrarse en el HTML.
Como requisito, utilizar jQuery y Handlerbars.
*/
/*
const contenedor1 = document.getElementById('contenedor');
const plantilla = Handlebars.compile(`
    <h2>Nombre: {{ nombre }}.</h2>
    <h2>Apellido: {{ apellido }}.</h2>
`); 

$('#datos').click(function(){
    const nombre = $('#nombre').val();
    const apellido = $('#apellido').val();
    contenedor1.innerHTML = plantilla({ 
        nombre: nombre,
        apellido: apellido,
    });
});

*/

/*
EJERCICIO 3
Dado el siguiente array:

var array = [7, 3, 5, 51, 38];

crear una función que guarde en otro array el segundo y 
penúltimo número del primer array habiéndolo ordenado previamente
 de menor a mayor.
*/

var array = [7, 3, 5, 51, 38];

function ordenar(array){
    array.sort((a, b) => a - b);
    return array;
}

function guardar(array){
    var array2 = [];
    array2.push(array[1], array[array.length - 2]);
    return array2;
}

console.log(guardar(ordenar(array)));

















