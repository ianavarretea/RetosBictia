$(document).ready(function() {

    var correo = ["ivan@gmail.com", "andres@lki.com"];
    var contrasena = ["1234", "5678"];

    //Registro
    $("#crearPer").click(function() {
        var RegCor = $("#regCorreo").val();
        var RegCont = $("#regContra").val();
        //Asigno datos a vector
    });

    //Login
    $("#ingreso").click(function() {
        var logEmail = $("#username").val();
        var logPassw = $("#password").val();
        var sms;
        if (logEmail == correo[0] && logPassw == contrasena[0]) {
            sms = "Bienvenido";
        } else {
            sms = "Datos errados";
        }
        $("#bienvenido").show();
        $("#bienvenido").text(sms);
    });
    //Funcion v
    function verificacion() {


    };


    //Ocultar formulario
    $("#registroBtn").click(function() {
        $("#registro2").show();
        $("#content").hide();
    });

    //Regresar a login
    $("#regresarbtn").click(function() {
        $(".input_reg").val("");
        $("#registro2").hide();
        $("#content").show();
    });
});