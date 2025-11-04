const btnAbrirMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-principal');
const overlayMenu = document.getElementById('overlay-menu');
const menuLinks = menu.querySelectorAll('a');

function toggleMenu() {
    menu.classList.toggle('abrir-menu');
    
    // Mostra/Esconde o overlay dependendo do estado do menu
    if (menu.classList.contains('abrir-menu')) {
        overlayMenu.style.display = 'block';
    } else {
        overlayMenu.style.display = 'none';
    }
}

// 1. Adiciona o evento de clique ao botão hamburger
btnAbrirMenu.addEventListener('click', toggleMenu);

// 2. Adiciona o evento de clique ao overlay para fechar o menu ao clicar fora
overlayMenu.addEventListener('click', toggleMenu);

// 3. Adiciona evento de clique a cada link do menu para fechar o menu após a navegação
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('abrir-menu')) {
            toggleMenu(); 
        }
    });
});