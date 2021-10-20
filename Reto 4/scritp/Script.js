//Aqui van las funciones en JS tanto variables y funciones para cada una de las operaciones de los botones
//Funcion ocultar
function ocultarRes() {
    var divs = document.getElementsByClassName("procResultado");
    for (var i = 0; i < divs.length; i++) {
        document.getElementsByClassName("procResultado")[i].style.display = "none";
    }
}
// Funciones logicas para el boton

function calculadora() {

    var operador = document.getElementById("operaciones").value;
    var num1 = document.getElementById("Num1").value;
    var num2 = document.getElementById("Num2").value;
    var resultado = document.getElementById("Resul").value;

    if (operador == "1") {
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

    document.getElementById("Resul").innerText = "El resultado es: " + resultado

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

});

/******Campo Contar letras */
var boton_contar = document.getElementById("btt_contCar");
boton_contar.addEventListener("click", function() {
    ocultarRes();
    document.getElementById("Contar").style.display = "block";

});

/**Campo Convertir Mayusculas y minisculas */
var boton_MayusyMin = document.getElementById("btt_mayYmin");
boton_MayusyMin.addEventListener("click", function() {
    ocultarRes();
    document.getElementById("mayYmin").style.display = "block";

});

/** Campo Sumatoria */
var boton_Sumatoria = document.getElementById("btt_sumNum");
boton_Sumatoria.addEventListener("click", function() {
    ocultarRes();
    document.getElementById("sumaNum").style.display = "block";

});
//-------------------------------------------------------------------------
/*-*-*-*-*operaciones de cada boton *-*-*-*-*-*/

var botonCalcu = document.getElementById("botonResul");
botonCalcu = addEventListener("click", function() {
    calculadora();

})
var botonContarcarac = document.getElementById("botonContar");
botonContarcarac = addEventListener("click", function() {
    var a = document.getElementById("contarPalabras").value;
    var b = a.length;
    document.getElementById("resCont").innerText = "La cantidad de caracteres es: " + b;
})

var botonMay = document.getElementById("Convertir");
botonMay = addEventListener("click", function() {
    var c = document.getElementById("conv").value;
    var d = c.toUpperCase();
    var e = c.toLowerCase();
    document.getElementById("resDato").innerText = "La palabra queda convertida asi: " + d + " y " + e;


});

var botonSum = document.getElementById("btmSum");
botonSum = addEventListener("click", function() {
    var f = document.getElementById("sum").value;
    Sumatoria();
})