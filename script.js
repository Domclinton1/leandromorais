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