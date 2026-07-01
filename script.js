const contrastButton = document.getElementById('toggle-contrast');
const fontButton = document.getElementById('toggle-font');

if (contrastButton) {
  contrastButton.addEventListener('click', () => {
    document.body.classList.toggle('contrast-high');
    const isActive = document.body.classList.contains('contrast-high');
    contrastButton.setAttribute('aria-pressed', String(isActive));
    contrastButton.textContent = isActive ? 'Desativar contraste alto' : 'Ativar contraste alto';
  });
}

if (fontButton) {
  fontButton.addEventListener('click', () => {
    document.body.classList.toggle('font-large');
    const isActive = document.body.classList.contains('font-large');
    fontButton.setAttribute('aria-pressed', String(isActive));
    fontButton.textContent = isActive ? 'Diminuir fonte' : 'Aumentar fonte';
  });
}
