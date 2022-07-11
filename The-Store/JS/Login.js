function Titulo() {
    return document.title + " - The Store";
};

var title = Titulo();
document.title = title;

var inputs = document.getElementsByClassName('btnForm');
var formulario = document.getElementById("formLogin");

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    var ArrayErrores = [];
    var usuario = inputs[0].value;
    var clave = inputs[1].value;

    if (usuario == null || usuario.trim().length <= 3 || usuario == '') {
        ArrayErrores.push('Ingrese Un Usuario Valido!!');
    }
    
    if (clave == null || clave.trim().length <= 3 || clave == '') {
        ArrayErrores.push('Ingrese Su Clave!!');
    }

    if (usuario.trim().length > 3 && clave.trim().length > 3) {
        alert("Inicio de sesion exitoso!!");
        formulario.reset();
    }
    CampoError.innerHTML = ArrayErrores.join('<br>');
}
)