document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      // Fecha outros abertos (opcional)
      document.querySelectorAll(".faq-answer").forEach(item => {
        if (item !== answer) {
          item.style.maxHeight = null;
          item.style.padding = "0 20px";
        }
      });

      // Alterna o atual
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0 20px";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "20px";
      }
    });
  });



 const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");
const header = document.getElementById("header");
let lastScroll = 0;

// Abrir menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Fechar ao clicar no overlay
overlay.addEventListener("click", closeMenu);

// Fechar ao clicar em um link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}





  document.getElementById("btnWhatsApp").addEventListener("click", function() {
    gtag('event', 'conversion', {
      'send_to': 'AW-17195519900'
    });
  });


