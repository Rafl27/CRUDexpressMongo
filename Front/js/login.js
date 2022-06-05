var btn = document.getElementById('submit');
var alerta = document.getElementById("alerta")
btn.addEventListener('click', func);

Usuarios = {}
function func() {
    var login = document.getElementById("inputEmail").value
    var senha = document.getElementById("inputPassword").value
    console.log(achaUsuarios(Usuarios, login, senha));
    var retorno = achaUsuarios(Usuarios, login, senha);
    if (retorno == "Usuario ou senha invalida!") {
        encontrou = false
        $('#alerta').css("visibility", "visible");
        setTimeout(function () {
            $('#alerta').css("visibility", "hidden");
        }, 3000);
    }
    else {
        localStorage.setItem('loggedUser', JSON.stringify(retorno))
        window.location.replace("painel.html");
    }
}

const options = {
    method: "GET",
    headers: {
        'Content-Type': "application/json"
    }
}

fetch('http://localhost:3000/village/', options).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    Usuarios = data;
})
function achaUsuarios(obj, emailUsuario, senhaUsuario) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].email == emailUsuario) {
            if (obj[i].senha == senhaUsuario) {
                return obj[i]
            }
        }
    }
    return "Usuario ou senha invalida!"
}
