const pixelBoard = document.getElementById('pixel-board');
const input = document.querySelector('input');
const buttonV = document.getElementById('generate-board');

function createPixels() {
  for (let contador = 1; contador <= 25; contador += 1) {
    let pixel = document.createElement('div');
    pixel.classList = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

createPixels();

// 6. Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels.

const color1 = document.querySelector('.c1');
color1.classList.add('selected');

// 7. Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

const colors = document.querySelectorAll('.color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectClass);
}

function selectClass(event) {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

// 8. Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', changeColor);
}

function changeColor(event) {
  let selectedColor = document.querySelector('.selected');
  let selectedRev = window.getComputedStyle(selectedColor, null);
  let getSelectedColor = selectedRev.getPropertyValue('background-color');
  if (event.target.style.backgroundColor !== getSelectedColor) {
    event.target.style.backgroundColor = getSelectedColor;
  } else if (event.target.backgroundColor !== 'white') {
    event.target.style.backgroundColor = 'white';
  }
}

// 9. Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const button = document.querySelector('button');
button.id = 'clear-board';
button.innerText = 'Limpar';

button.addEventListener('click', function () {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// 10. Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

function addPixels() {
  let valor = input.value;

  if (valor == '') {
    alert('Board inválido!');
  } else {
    if (valor < 5) {
      valor = 5;
    } else if (valor > 50) {
      valor = 50;
    }
    pixelBoard.innerHTML = '';
    pixelBoard.style.width = 42 * valor + 'px';
    let pixelsCount = valor * valor;
    for (let contador = 1; contador <= pixelsCount; contador += 1) {
      let pixel2 = document.createElement('div');
      pixel2.classList = 'pixel';
      pixelBoard.appendChild(pixel2);
    }
  }

  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', changeColor);
  }

  button.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

buttonV.addEventListener('click', addPixels);

// 12. Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

function randomColors() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r},${g},${b})`;
}

let random = document.querySelectorAll('.random');
for (let element of random) {
  element.style.backgroundColor = randomColors();
}