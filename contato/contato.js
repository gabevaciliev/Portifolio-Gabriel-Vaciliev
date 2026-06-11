const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Regex para validar e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Por favor, informe um e-mail válido.");
        return;
    }

    if (mensagem === "") {
        alert("Por favor, digite uma mensagem.");
        return;
    }

    const assunto = "Contato pelo Portfólio";

    const corpo =
        `E-mail do remetente: ${email}%0D%0A%0D%0A${mensagem}`;

    window.location.href =
        `mailto:gabrielvaciliev66@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
});