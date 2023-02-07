var listaDeJogadores = []; //LISTA VAZIA DE JOGADORES
var elementoTabela = document.getElementById("tabelaJogadores"); //TABELA DO HTML

function exibirNaTela() { //EXIBE A TABELA DO HTML ATUALIZADA
	elementoTabela.innerHTML = "";

	listaDeJogadores.forEach((jogador, index) => { //PERCORRE A LISTA DE JOGADORES
		console.log(jogador);
		elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button id="vitoria" onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button id="derrota" onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
	});
}

function criarJogador() {
	var nomeNovoJogador = document.getElementById("campoNomeJogador").value; //CAPTURA O VALOR ESCRITO NO INPUT
	listaDeJogadores.push({
		nome: nomeNovoJogador,
		vitoria: 0,
		derrota: 0,
		pontos: 0,
	});
	document.getElementById("campoNomeJogador").value = "";
	exibirNaTela();
}

function adicionarVitoria(index) {
	listaDeJogadores[index].vitoria++;
	listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
	exibirNaTela();
}

function adicionarDerrota(index) {
	listaDeJogadores[index].derrota++;
	listaDeJogadores[index].pontos = listaDeJogadores[index].pontos - 2;
	exibirNaTela();
}

function limparPontuacaoJogador(index) {
	listaDeJogadores[index].vitoria = 0;
	listaDeJogadores[index].derrota = 0;
	listaDeJogadores[index].pontos = 0;
	exibirNaTela();
}

function removerJogador(index) {
	listaDeJogadores.splice(index, 1);
	exibirNaTela();
}

function apagarJogadores() {
	listaDeJogadores = [];
	exibirNaTela();
}
