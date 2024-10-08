document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value; // Captura o nome preenchido
    document.getElementById('mensagem').innerText = `Obrigado, ${nome}, por preencher o formulário!`; // Mostra a mensagem de agradecimento
    this.reset(); // Reseta o formulário após o envio
});
