  let amigos = [];
 // Função que adiciona um amigo à lista
  function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
 // valida se o campo n está vazio
    if (nome === '') {
      alert('Por favor, insira um nome.');
      return;
    }
 // funçao que adiciona o nome na lista
    amigos.push(nome);
    atualizarLista();
    input.value = '';
    input.focus();
  }
// Função que atualiza a lista exibida na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
      const li = document.createElement('li');
      li.textContent = amigo;
      lista.appendChild(li);
    });
}

//  Aqui é onde o botão ganha vida
document.getElementById('btnAdicionar').addEventListener('click', adicionarAmigo);

// Função que sorteia um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
      alert("A lista está vazia! Adicione pelo menos um amigo.");
      return;
    }

    // gera índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // pega o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // exibe no elemento resultado
    document.getElementById("resultado").innerHTML = 
      `🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
  }

