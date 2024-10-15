function ampliarImagem(imagem) {
    var imagemAmpliada = document.getElementById('ampliada');
    imagemAmpliada.src = imagem.src;
}

// Função para exibir a data atual
document.getElementById('data').innerHTML = new Date().toLocaleDateString('pt-BR');
