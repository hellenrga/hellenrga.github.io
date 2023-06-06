// Aguarde até que a página esteja completamente carregada
document.addEventListener('DOMContentLoaded', function() {
  // Obtenha o formulário de contato pelo seu ID
  var form = document.getElementById('comunicacao');

  // Adicione um ouvinte de evento de envio ao formulário
  form.addEventListener('submit', function(event) {
    // Evite que o formulário seja enviado imediatamente
    event.preventDefault();

    // Obtenha os valores dos campos de entrada
    var tipoContato = document.getElementById('c-ajuda').value;
    var nome = document.getElementById('c-nome').value;
    var email = document.getElementById('c-email2').value;
    var mensagem = document.getElementById('c-duvida').value;

    // Faça algo com os valores dos campos
    // Por exemplo, exiba-os no console
    console.log('Tipo de Contato:', tipoContato);
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    // Restaure o formulário para os valores padrão
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.forms.login;
  
    loginForm.addEventListener("submit", function(event) {
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
  
    notifEmailForm.addEventListener("submit", function(event) {
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
