const listaEstacao = ['primavera', 'verão', 'outono', 'inverno'];
const listaTurno = ['manhã cedo', 'meio do dia', 'tarde', 'noite'];
const listaDificuldade = ['d4', 'd6', 'd8', 'd10'];
let anoAtual;
let estacaoAtual;
let diaAtual;
let turnoAtual;
let dificuldadeAtual;

/*----------------------------------------------------------------*/
//primeiro seta o estado inicial
function iniciando(){
	console.log('SETANDO O ANO ATUAL');
	anoAtual = prompt('Digite o ano atual', 1);
	console.log(`Estamos no ano ${anoAtual} do nosso senhor`);

	console.log('SETANDO A ESTACAO ATUAL');
	console.log('[0] primavera\n[1] verão\n[2] outono\n[3] inverno');
	estacaoAtual = prompt('Digite a estação atual', 0);
	console.log(`Estamos na ${listaEstacao[estacaoAtual]}`);

	console.log('SETANDO O DIA ATUAL');
	diaAtual = prompt('Digite o dia atual', 1);
	console.log(`hoje é dia ${diaAtual}`);

	console.log('SETANDO O TURNO ATUAL:');
	console.log('[0] manhã cedo\n[1] meio do dia\n[2] tarde\n[3] noite');
	turnoAtual = prompt('[digite o número referente a opção]', 0);
	console.log(listaTurno[turnoAtual]);

	console.log('SETANDO A DIFICULDADE ATUAL:');
	console.log('[0] d4\n[1] d6\n[2] d8\n[3] d10');
	dificuldadeAtual = prompt('[digite o número referente a opção]', 0);
	console.log(listaDificuldade[dificuldadeAtual]);

	console.log('--------------------------------------------------')
}

//o hexcrawl
let power = false; //true or false
function loop(){ //loop da passagem do tempo
	while (power == false){
		console.log('Ativei o loop, cuidado.');
		power = prompt('Encerrar o loop? Sim[true]', false);
		if (power == false){
			continue;
		}
	}
}


/*-----------------------------------------------------------------*/
//rodando as funções
iniciando();
loop();