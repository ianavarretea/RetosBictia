//Aqui van las funciones en JS tanto variables y funciones para cada una de las operaciones de los botones
//Funcion ocultar
function ocultarRes() {
    var divs = document.getElementsByClassName("procResultado");
    for (var i = 0; i < divs.length; i++) {
        document.getElementsByClassName("procResultado")[i].style.display = "none";
    }
}
// Funciones logicas boton

function calculadora() {

    var operador = document.getElementById(operaciones);
    var num1 = document.getElementById("Num1");
    var num2 = document.getElementById("Num2");
    var resultado = document.getElementById("Resul");

    if (operador == 1) {
        resultado = parseInt(num1) + parseInt(num2);

    } else if (operador == '2') {
        resultado = parseInt(num1) - parseInt(num2);

    } else if (operador == '3') {
        resultado = parseInt(num1) * parseInt(num2);
    } else if (operador == '4' && num2 == '0') {
        alert('No es posible operar')
    } else {
        resultado = parseInt(num1) / parseInt(num2);

    }

    alert('Gracias')
}

function contarCar() {
    var contCar = document.getElementById("contarPalabras");
    var cont = contCar.length;
    document.getElementById("resCont").innerText = cont;
}


function Mayusymin() {
    var text = document.getElementById("conv");
    text.toUpperCase();
    text.toLowerCase();
}


function Sumatoria() {
    var num3 = document.getElementById("sum").value;
    var res = 0;
    for (var i = 1; i <= num3; i++) {
        res = res + i;
    }
    document.getElementById("resSum").innerText = res;
}

//--------- Codigo para mostrar/ocultar cada botón
//*****Campo CALCULADORA */
var boton_calc = document.getElementById("btt_calculadora");
boton_calc.addEventListener("click", function() {
    ocultarRes();
    document.getElementById("Calculadora").style.display = "block";
    calculadora(resultado);
    document.getElementById("Resul").innerText = resultado;
});

/******Campo Contar letras */
var boton_contar = document.getElementById("btt_contCar");
boton_contar.addEventListener("click", function() {
    ocultarRes();
    document.getElementById("Contar").style.display = "block";
    contarCar();
    document.getElementById("resCont").innerText = cont;
});

/**Campo Convertir Mayusculas y minisculas */
var boton_MayusyMin = document.getElementById("btt_mayYmin");
boton_MayusyMin.addEventListener("click", function() {
    ocultarRes();
    document.getElementById("mayYmin").style.display = "block";
    Mayusymin();
});

/** Campo Sumatoria */
var boton_Sumatoria = document.getElementById("btt_sumNum");
boton_Sumatoria.addEventListener("click", function() {
    ocultarRes();
    document.getElementById("sumaNum").style.display = "block";
    Sumatoria();
});

/*-*-*-*-*operaciones de cada boton *-*-*-*-*-*/

var botonCalcu = document.getElementById("botonResul");
botonCalcu = addEventListener("click", function() {
    function Calculadora() {}

})
var botonContarcarac = document.getElementById("botonContar");
botonContarcarac = addEventListener("click", function() {

})

var botonMay = document.getElementById("botonMayus");
botonMay = addEventListener("click", function() {


});
var botonMin = document.getElementById("botonMin");
botonMin = addEventListener("click", function() {


})
var botonSum = document.getElementById("sum");
botonSum = addEventListener("click", function() {

})