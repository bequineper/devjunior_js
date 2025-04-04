function valida() {
    console.log("teste");
    const senha = document.getElementById('senha').value;
    console.log(senha);
    const mensagem = document.getElementById('mensagem');
    const comprimento = document.getElementById('tamanho');
    comprimento.innerHTML = senha.length;
}