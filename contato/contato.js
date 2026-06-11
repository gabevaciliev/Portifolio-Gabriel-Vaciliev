const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const assunto = "Contato pelo Portfólio";

    const corpo =
        `E-mail do remetente: ${email}%0D%0A%0D%0A${mensagem}`;

    window.location.href =
        `mailto:gabrielvaciliev66@gmail.com?subject=${assunto}&body=${corpo}`;
});