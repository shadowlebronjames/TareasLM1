/* 05.01 */

var numero1 = 5;
var numero2 = 8;

if(numero1<=numero2){
    alert("numero1 no es mayor que numero2");
}
if(numero2>0){
    alert("numero2 es positivo");
}
if(numero1<0 || numero1!=0){
    alert("numero1 es negativo o distinto de cero");
}
if(numero1+1!=numero2){
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

/* 05.02 */

var num1 = prompt();
var num2 = prompt();

if(num1>num2){
    alert("El primer número es mayor");
}
else if(num1<num2){
    alert("El segundo número es mayor");
}
else{
    alert("Los números son iguales");
}

/* 05.03 */

var num1 = prompt();
var num2 = prompt();

if(num1 > 10 && num2 > 10){
    alert("Los dos números son más grandes que 10");
} else{
    alert("Los dos números NO son más grandes que 10")
}