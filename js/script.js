document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("comunicacao");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var tipoContato = document.getElementById("c-ajuda").value;
    var nome = document.getElementById("c-nome").value;
    var email = document.getElementById("c-email2").value;
    var mensagem = document.getElementById("c-duvida").value;

    console.log("Tipo de Contato:", tipoContato);
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);

    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.forms.login;

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var usuario = loginForm.usuario.value;
    var senha = loginForm.senha.value;

    if (usuario !== "" && senha !== "") {
      alert("Bem-vindo! Login bem-sucedido.");
      window.location.href = "../index.html";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});

var notifEmailForm = document.forms.notifEmail;

notifEmailForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var email = notifEmailForm.email.value;

  if (email !== "") {
    alert("Você se inscreveu para receber notificações por e-mail.");

    notifEmailForm.email.value = "";
  } else {
    alert("Por favor, insira seu e-mail.");
  }
});

function validarFormulario() {
  var nome = document.forms.cadastro.nome.value;
  var email = document.forms.cadastro.email.value;
  var aniversario = document.forms.cadastro.aniversario.value;
  var usuario = document.forms.cadastro.usuario.value;
  var senha = document.forms.cadastro.senha.value;
  var senhaConfirm = document.forms.cadastro.senhaConfirm.value;

  if (
    nome === "" ||
    email === "" ||
    aniversario === "" ||
    usuario === "" ||
    senha === "" ||
    senhaConfirm === ""
  ) {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
  }

  if (senha !== senhaConfirm) {
    alert("As senhas não coincidem. Por favor, verifique.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }

  alert("Formulário de cadastro enviado com sucesso!");
  return true;
}

var cadastroForm = document.forms.cadastro;
cadastroForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validarFormulario();
});
