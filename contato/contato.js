const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Por favor, informe um e-mail válido.");
        return;
    }

    const assunto = "Contato pelo Portfólio";

    const corpo =
        `${mensagem}`;

    window.location.href =
        `mailto:gabrielvaciliev66@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
});