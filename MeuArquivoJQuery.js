
function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        campo.value = "";
    }
}

function InsercaoDeZerosAEsquerda(name) {
    var campo = name;
    if ($(campo).val().length == 2) {
        campo.value = "00" + campo.value;
    }
}

$(document).ready(function ()
{
    $("a").click(function ()
    {
        $("#helloWord").css("color", "#0000FF").css("background-color", "#000000");
        $("a").css("text-decoration", "none");
    });
});

var date = new Date();
        var month = date.getMonth()+ 1;
        var dateString =  month + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log(dateString);
