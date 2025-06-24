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

  const questions = document.querySelectorAll('.faq-question');

questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;

    // Fecha todos os outros
    document.querySelectorAll('.faq-answer').forEach((el) => {
      if (el !== answer) {
        el.style.maxHeight = null;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    });

    // Alterna a atual
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingTop = 0;
      answer.style.paddingBottom = 0;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.paddingTop = "15px";
      answer.style.paddingBottom = "15px";
    }
  });
});

});



  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


  document.getElementById("btnWhatsApp").addEventListener("click", function() {
    gtag('event', 'conversion', {
      'send_to': 'AW-17195519900'
    });
  });