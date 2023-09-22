function acessar() {
    alert('Seja bem-vindo a UNES!!!');
    var nome = prompt("Informe seu nome: ")
    var codigo = prompt("Informe o codigo da universidade: ")
    if ( nome.toLowerCase() == "paulo" || codigo == "797877") {
        let elemento_do_texto = document.querySelector("#usuario");
        elemento_do_texto.innerHTML = nome;
    } else {
        document.write("Area de acesso restrito.");
    }
}

function calcularMedia() {
    var nome = document.querySelector("#nome").value;
    var x = document.querySelector("#nota01").value;
    var y = document.querySelector("#nota02").value;
    var media = (parseInt(x) + parseInt(y)) / 2
    if ( media >= 7) {
        let msg = "O aluno " + nome + " conquistou a media " + media + " e está APROVADO!"
        document.querySelector("#meu_span").innerHTML = msg
    } else {
        let msg = "O aluno " + nome + " conquistou a media " + media + " e está de RECUPERAÇÃO!"
        document.querySelector("#meu_span").innerHTML = msg
    }
}