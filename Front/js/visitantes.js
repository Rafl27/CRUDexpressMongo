//Mascara para formulario de cadastro
$(document).ready(function () {
    $('#telefone').mask('(00)00000-0000');
});

var tbodyRef = document.getElementById('tabela').getElementsByTagName('tbody')[0];

visitantes = {};

fetch("../json/visitantes.json")
    .then(mockResponses => mockResponses.json())
    .then(data => {
        visitantes = data;
        preencheTabelaVisitantes();
    });

async function preencheTabelaVisitantes() {

    for (var i = 0; i < visitantes.length; i++) {
        var nome = visitantes[i]["nome"];
        var telefone = visitantes[i]["telefone"];
        var email = visitantes[i]["email"];

        var newRow = tbodyRef.insertRow();
        //Nome
        var newCell = newRow.insertCell();
        var nome = document.createTextNode(nome);
        newCell.appendChild(nome);

        //Telefone
        var newCell = newRow.insertCell();
        var telefone = document.createTextNode(telefone);
        newCell.appendChild(telefone);

        //Email
        var newCell = newRow.insertCell();
        var email = document.createTextNode(email);
        newCell.appendChild(email);

        //Ações
        var newCell = newRow.insertCell();

        var editIcon = document.createElement("a");
        editIcon.setAttribute('class', 'teste fa fa-pencil');
        editIcon.setAttribute('editName', visitantes[i]["email"]);
        newCell.appendChild(editIcon);

        var deleteIcon = document.createElement("a");
        deleteIcon.setAttribute('class', 'teste fas fa-trash');
        deleteIcon.setAttribute('href', '#');
        deleteIcon.setAttribute('excluirUser', visitantes[i]["email"]);

        newCell.appendChild(deleteIcon);
    }
}

//Listener para cada um dos icones de excluir, identificados por seu respectivo usuario (email)
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        if (e.target.tagName == "A" && e.target.className == "teste fas fa-trash") {

            var user = e.target.getAttribute("excluirUser");

            //Listener para alterar o texto no modal de confirmação de acordo com o email do usuario clicado
            $('#modalConfirmacao').on('show.bs.modal', function (e) {
                var bookId = user
                $(e.currentTarget).find('span[id="nomeToRemove"]').text(bookId);
            });
            $('#modalConfirmacao').modal('show');
        }
    })
}, false);


function teste() {
    var email = document.getElementById('nomeToRemove').innerText;
    //console.log('Email a deletar: ' + email);
    var usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));
    //console.log('Email Usuario logado => ' + usuarioLogado['email']);

    visitantes = {};

    fetch("../json/visitantes.json")
        .then(mockResponses => {
            return mockResponses.json();
        })
        .then(function (data) {
            visitantes = data;
        })
        .then(function () {
            for (var i = 0; i < visitantes.length; i++) {
                if (visitantes[i]['email'] == email) {
                    if (visitantes[i]['email_criador'] == usuarioLogado['email']) {
                        //console.log('Visitante ' + visitantes[i]['nome'] + ' foi criado pelo email' + usuarioLogado['email']);

                    }
                }
            }
        });
}

