# Amigo-Secreto
Este é um projeto da ONE,  que consiste em usar a linguagem JavaScript para desenvolver o sorteio de nomes para um Amigo Secreto 
🎁 Amigo Secreto – Challenge Trello

Um simples e divertido sorteador de amigo secreto feito em JavaScript, HTML e CSS.

✨ Funcionalidades

➕ Adicionar amigos   📜 Exibir lista
🎲 Sortear um amigo aleatório  ⚠️ Validação contra entradas vazias ou lista vazia

# Dificuldades que enfrentei
Ainda estou tentando entender melhor as funcionalidades, raciocinar para que cada função esteja correta, orientar 
para que cada objeto esteja em sua respectiva classe. Usar as funções foram um desafio, estarei em busca de mais projetos como esse para desenvolver.  

🎥 Demonstração
Como funciona na prática 👇

![Animação](https://github.com/user-attachments/assets/c17fe020-1887-4dba-9a1f-251bb9f41d11)





# Abra o arquivo index.html no navegador.

http://127.0.0.1:5500/challenge-amigo-secreto_pt-main/index.html

📌 Exemplo de código

A função sortearAmigo() é responsável por escolher um amigo de forma aleatória a partir da lista de nomes cadastrados. Primeiro, ela verifica se a lista não está vazia e avisa o usuário caso não haja ninguém para sortear. Em seguida, gera um índice aleatório, acessa o nome correspondente no array e exibe o resultado diretamente na tela, deixando o nome do amigo sorteado em destaque. É uma forma prática e divertida de realizar o sorteio do amigo secreto com apenas um clique.

```function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione pelo menos um amigo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML =
    `🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}



👩‍💻 Autora

Feito com ❤️ por Derlaine.
