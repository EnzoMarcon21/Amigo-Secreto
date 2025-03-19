const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const botaoSortear = document.querySelector('.button-draw');

let amigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        inputAmigo.value = '';
        inputAmigo.focus();
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa de pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    const amigosSorteados = [...amigos];
    let resultadoSorteio = [];

    while (amigosSorteados.length > 0) {
        const sorteado = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];
        let amigoSecret = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];

        while (sorteado === amigoSecret) {
            amigoSecret = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        }

        resultadoSorteio.push(`${sorteado} tirou ${amigoSecret}`);
    }

    atualizarResultado(resultadoSorteio);
}

function atualizarResultado(resultados) {
    resultado.innerHTML = '';
    resultados.forEach(resultadoItem => {
        const li = document.createElement('li');
        li.textContent = resultadoItem;
        resultado.appendChild(li);
    });
}

document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearAmigo);
