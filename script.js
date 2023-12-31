function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // Pegar a tag img
    const img = document.querySelector("#profile img");

    // Substituir a imagem
    if (html.classList.contains('light')) {
        // Se tiver light mode, adicionar a Imagem light
        img.setAttribute('src', './assets/avatar-light.jpg');
    } else {
        // Se não tiver light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png');
    }
}
