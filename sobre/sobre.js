const nascimento = new Date("2006-11-12");
const dataAtual = new Date();

let idade = dataAtual.getFullYear() - nascimento.getFullYear();

if (
    dataAtual.getMonth() < nascimento.getMonth() ||
    (dataAtual.getMonth() === nascimento.getMonth() &&
     dataAtual.getDate() < nascimento.getDate())
) {
    idade--;
}

document.getElementById("idade").textContent = idade;
