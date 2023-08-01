// let o const - tienen ambito bloque
// var - tiene ambito de funcion

//SCOPE

//Global = variables y funciones pueden ser accedidas desde cualquier parte del codigo
//Local = variables y funciones solo pueden ser accedidas desde el ambito donde fueron creadas

/*
var articulo = prompt("Ingrese el nombre del articulo");
var precio = prompt("Ingrese el precio del articulo");

producto();

function producto(){

    var iva = 1.21; 
    precioConIva = precio * iva;
    var mensaje = "El articulo " + articulo + " cuesta " + precio + " pesos y con IVA incluido " + precioConIva + " (IVA no incluido)";

    console.log(mensaje);

}

console.log("El precio con IVA incluido es de: " + precioConIva + " pesos")

/*

//FUNCIONES

/*

function saludar(){
    console.log("Hola");
}

function sumar(a, b){
    return a + b;
}

saludar();

var resultado = sumar(5, 5);
console.log(resultado);

*/

//TIPOS DE FUNCIONES

//Funciones anonimas

/*
const saludar = function(nombre){
    console.log("Hola " + nombre);
}

saludar('Maria');
*/

//CLOSURES

/*

function contador(){
    let cuenta = 0;

}

//RECURSIVIDAD

function factorial(numero){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

/*
n= 5 -> 5 * factorial(5-1)
n= 4 -> 4 * factorial(4-1)
n= 3 -> 3 * factorial(3-1)
n= 2 -> 2 * factorial(2-1)
n= 1 -> 1 * factorial(1-1)
n= 0 -> 1

1*1= 1
2*1= 2
3*2= 6
4*6= 24
5*24= 120



//THIS -> ESTO



const persona = {
    nombre: 'Juan',
    saludar: function(){
        console.log("Hola " + this.nombre);
    },   
};

persona.saludar();

*/

//METODOS Y PROPIEDADES DE LAS FUNCIONES

//El objeto fuction

/*

var a = prompt("Ingrese el primer numero");
var b = prompt("Ingrese el segundo numero");

function sumar(a, b){
    return a + b;
}

console.log("la suma es: " + sumar(a, b));
console.log(typeof sumar);
console.log(sumar instanceof Function);

//length -> cantidad de parametros que recibe la funcion

console.log(sumar.length);

//Metodo bind() -> devuelve una nueva funcion con el valor de this que se pasa como parametro

function saludo(){
    console.log("Hola " + this.nombre + "!");
}

const persona = {
    nombre: 'Brenda'

};

const saludarPersona = saludo.bind(persona);
*/

//Escribir una función que tome como parámetro una letra.
//Validar si esa letra es una vocal. Si es vocal devuelve true, sino false.


/*

function esVocal(letra){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
        return true;
    }else{
        return false;
    }
}

var letra = prompt("Ingrese una letra");

console.log(esVocal(letra));

*/

//Ejercicio 2
//Crear una funcion que tome como parametro un array de numeros.
//Retornar la suma de todos los numeros del array.

/*

function sumaArray(array){
    var suma = 0;
    for(var i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

var array = [1, 2, 3, 4, 5];

console.log(sumaArray(array));

*/

//EVENTOS


/*
function miFuncion(nombre){
    console.log("Hola, " + nombre);
}

//document.querySelector('button').onclick = miFuncion;

var boton = document.querySelector('button');

for(var i = 0; i < boton.length; i++){

    boton[i].onclick = function(){
        miFuncion(this.innerHTML);
    };
    
}

*/

//EJERCICIO 3

//Generar 4 botones y escribir 1 sola función. 
//Cada botón hace referencia a un color diferente.
//Al hacer click en cada botón imprimir por consola:
//El color es:

var boton = document.querySelectorAll('button');

for(var i = 0; i < boton.length; i++){
    
        boton[i].onclick = function(){
            console.log("El color es: " + this.innerHTML);
        };
        
    }