// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const numeroWhatsApp = "5531998648339"; // <- Substitua pelo número real

    const texto = `Olá, meu nome é *${nome}*.\n\nGostaria de agendar uma sessão de terapia.\n\n📧 *E-mail:* ${email}\n🗒️ *Mensagem:*\n${mensagem}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
    form.reset();
  });

  // FAQ toggle
  const perguntas = document.querySelectorAll(".faq-question");

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
      const resposta = pergunta.nextElementSibling;
      resposta.style.display =
        resposta.style.display === "block" ? "none" : "block";
    });
  });
});
