/*
Operadores

Operadores Arigmeticos

+ suma  a+b
- resta a-b
* multiplicacion a*b
/ divicion a/b
% reciduo o modulo = muestra el resto de la divicion
** operador exponencial  

Operadores Logicos

para que sea verdadero una de las condiciones debe ser verdadera
or ||      true  || false   verdad
           true  || true    verdad
           false || false  false 
           true  || true    true

para que sera verdadera todas las condiciones deben ser verdaderas
and &&  
           true && true  = true
           false && true =  false
           false && false = false
           true && false = false
! NOT  Negacion 
      true = false 
      false = true
Ternario 
Tiene la misma funcion de comprobar si una condicion se cumple al igual que if
condicion ? true : false
? :  

Operadores condicionales
== igualdad:  Ambas variables deben ser iguales sin importar el tipo
!= diferencia:   Ambas variables deben ser diferentes sin importar el tipo
< menor que:   la variable a es menor que b 
> mayor que:   la variable a es mayor que b 
=> mayor-igual: la variable a es mayor o igual que variable b 
>= menor-igual: la variable a es menor o igual que variable b 
===  
!==

Operadores de asignacion 
= 
+=
-=
*=
%=
*/



producto => producto


const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

let total = 0;
carrito.forEach(producto => total += producto.precio)

//(vmin, vmax) => valor que tiene el array + vi, vi
total = carrito.reduce((total, producto) => producto.precio + total, 0)



let busqueda = "Teclado"
let b = carrito.filter(producto => busqueda === producto.nombre)


console.log(b);