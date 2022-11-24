document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const button = document.querySelector(".button");

        button.click();

    }
});

const form = document.getElementById('form');
const nome = document.getElementById('nome');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; /*regex email padrão*/
/*const emailRegex = /\W|_/; /*Regex caractere especial*/
const senha = document.getElementById('senha');
const confsenha = document.getElementById('confSenha');
const span = document.querySelectorAll('span');

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function entrar() {
    if (nome.value, usuario.value, email.value, senha.value, confsenha.value == "") {

    }
    else if (nome.value.length < 10, usuario.value.length > 10, !emailRegex.test(email.value), senha.value != confsenha.value) {

    }
    else {
        window.location.href = "todo-list.html";
    }
}

function nomeValidar() {

    if (nome.value == "") {
        nome.style.borderBottom = " 2px solid rgb(25, 77, 138)";
        nome.style.transition = ".3s";
        span[0].style.display = "none";
    }
    else if (nome.value.length < 10) {
        nome.style.borderBottom = "2px solid #DB5A5A";
        nome.style.transition = ".3s";
        span[0].style.display = "block";
    }
    else {
        nome.style.borderBottom = "2px solid #4ECA64";
        nome.style.transition = ".3s";
        span[0].style.display = "none";
        var nomeSave = document.querySelector("#nome").value;
        localStorage.setItem('nome', nomeSave);
    }
}

function loginValidar() {
    if (usuario.value == "") {
        usuario.style.borderBottom = " 2px solid rgb(25, 77, 138)";
        usuario.style.transition = ".3s"
        span[1].style.display = "none";
    }
    else if (usuario.value.length > 10) {
        usuario.style.borderBottom = "2px solid #DB5A5A";
        usuario.style.transition = ".3s"
        span[1].style.display = "block";
    }
    else {
        usuario.style.borderBottom = "2px solid #4ECA64";
        usuario.style.transition = ".3s"
        span[1].style.display = "none";
        var usuarioSave = document.querySelector("#usuario").value;
        localStorage.setItem('usuario', usuarioSave);
    }
}

function emailValidar() {
    if (email.value == "") {
        email.style.borderBottom = " 2px solid rgb(25, 77, 138)";
        email.style.transition = ".3s"
        span[2].style.display = "none";
    }
    else if (!emailRegex.test(email.value)) {
        email.style.borderBottom = "2px solid #DB5A5A";
        email.style.transition = ".3s"
        span[2].style.display = "block";
    }
    else {
        email.style.borderBottom = "2px solid #4ECA64";
        email.style.transition = ".3s"
        span[2].style.display = "none";
        var emailSave = document.querySelector("#email").value;
        localStorage.setItem('email', emailSave);
    }
}

function compareSenha() {
    if (senha.value == "" && confsenha.value == "") {
        senha.style.borderBottom = " 2px solid rgb(25, 77, 138)";
        confsenha.style.borderBottom = "2px solid rgb(25, 77, 138)";
        span[3].style.display = "none";
        span[4].style.display = "none";
    }
    else if (senha.value == confsenha.value) {
        senha.style.borderBottom = "2px solid #4ECA64";
        confsenha.style.borderBottom = "2px solid #4ECA64";
        span[3].style.display = "none";
        span[4].style.display = "none";
        var senhaSave = document.querySelector("#senha").value;
        localStorage.setItem('senha', senhaSave);
    }
    else {
        senha.style.borderBottom = "2px solid #DB5A5A";
        confsenha.style.borderBottom = "2px solid #DB5A5A";
        span[3].style.display = "block";
        span[4].style.display = "block";
    }
}
