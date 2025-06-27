function criarCampos() {
  const container = document.getElementById('numeros-container');
  container.innerHTML = ''; // limpa se já tiver
  const qtd = parseInt(document.getElementById('quantidade').value);

  for (let i = 0; i < qtd; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = `Número ${i + 1}`;
    input.classList.add('numero');
    container.appendChild(input);
  }
}

function calcularMedia() {
  const inputs = document.querySelectorAll('.numero');
  let soma = 0;

  inputs.forEach(input => {
    soma += parseFloat(input.value) || 0;
  });

  const media = soma / inputs.length;
  document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)}`;
}
