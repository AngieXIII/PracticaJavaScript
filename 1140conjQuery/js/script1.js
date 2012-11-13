$(function () {
    $("#ejemploTabs").tabs().tabs({
        fx: {
            opacity: "toggle",
            duration: "slow"
        },
        collapsible:true
    });
    $("#acordeon").accordion().accordion({ event: "mouseover" });
    $("#miDialogo").dialog({ autoOpen: false });
    $("#rojo, #verde, #azul").slider({
        min: 0,
        max: 255,
        step: 1,
        slide: cambiaMarcador
    });

    $("#fecha").datepicker({
        //minDate: new Date(),
        // maxDate: "+10"
        changeMonth: true,//sale un desplegable con el mes
        changeYear: true,
        yearRange: "-25,+25", //añade años al calendario.
        showBottonPanel: true,//añade un boton para volver al día en el que estás si estás en otro mes.
        numberOfMonths: 3, //Elijes los meses que quieres mostrar. POr defecto el actual y los que sumes.
        dateFormat: "dd MM yy"
    });

});

function cambiaMarcador() {
    jQuery(function () {
        var rojo = $("#rojo").slider("value");
        var azul = $("#azul").slider("value");
        var verde = $("#verde").slider("value");
        var cadenaRGB = ["rgb(", rojo, ",", verde, ",", azul, ")"].join("");
        $("#cajaColor").css({
            backgroundColor: cadenaRGB
        });
        $("#deslizador").text(cadenaRGB);
    });

   

};




function muestraDialogo() {
    jQuery(function () {
        $("#miDialogo").dialog({
            autoOpen: true,
            buttons: {
            }
        });
    });

}

function deshabilita(numeroTab) {
    jQuery(function () {
        $("#ejemploTabs").tabs({
            disabled: [numeroTab,numeroTab+1]
        });
    });


}

function ponUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("add","","un nuevo Tab");
    });
}

function quitaUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("remove",1);
    });
}