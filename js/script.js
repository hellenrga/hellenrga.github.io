// Aguarde até que a página esteja completamente carregada
document.addEventListener("DOMContentLoaded", function () {
  // Obtenha o formulário de contato pelo seu ID
  var form = document.getElementById("comunicacao");

  // Adicione um ouvinte de evento de envio ao formulário
  form.addEventListener("submit", function (event) {
    // Evite que o formulário seja enviado imediatamente
    event.preventDefault();

    // Obtenha os valores dos campos de entrada
    var tipoContato = document.getElementById("c-ajuda").value;
    var nome = document.getElementById("c-nome").value;
    var email = document.getElementById("c-email2").value;
    var mensagem = document.getElementById("c-duvida").value;

    // Faça algo com os valores dos campos
    // Por exemplo, exiba-os no console
    console.log("Tipo de Contato:", tipoContato);
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);

    // Restaure o formulário para os valores padrão
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
      // Simulando o login

      alert("Bem-vindo! Login bem-sucedido.");
      // Redirecione o usuário para a página inicial

      window.location.href = "index.html";
    } else {
      // Exiba uma mensagem de erro se os campos estiverem vazios
      alert("Por favor, preencha todos os campos.");
    }
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
});

// Função para validar o formulário de cadastro
function validarFormulario() {
  var nome = document.forms.cadastro.nome.value;
  var email = document.forms.cadastro.email.value;
  var aniversario = document.forms.cadastro.aniversario.value;
  var usuario = document.forms.cadastro.usuario.value;
  var senha = document.forms.cadastro.senha.value;
  var senhaConfirm = document.forms.cadastro.senhaConfirm.value;

  // Validar se todos os campos foram preenchidos
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

  // Validar se as senhas coincidem
  if (senha !== senhaConfirm) {
    alert("As senhas não coincidem. Por favor, verifique.");
    return false;
  }

  // Validar se o email é válido
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }

  // Se todas as validações passarem, o formulário é válido
  alert("Formulário de cadastro enviado com sucesso!");
  return true;
}

// Adicionar um ouvinte de evento para o formulário de cadastro
var cadastroForm = document.forms.cadastro;
cadastroForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validarFormulario();
});
