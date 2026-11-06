function jogar(escolhaJogador) {
            const opcoes = ['Pedra', 'Papel', 'Tesoura'];
            
            const indiceAleatorio = Math.floor(Math.random() * 3);
            const escolhaComputador = opcoes[indiceAleatorio];

            let resultado = '';

            if (escolhaJogador === escolhaComputador) {
                resultado = 'Empate!';
            } else if (
                (escolhaJogador === 'Pedra' && escolhaComputador === 'Tesoura') ||
                (escolhaJogador === 'Papel' && escolhaComputador === 'Pedra') ||
                (escolhaJogador === 'Tesoura' && escolhaComputador === 'Papel')
            ) {
                resultado = 'Você ganhou!';
            } else {
                resultado = 'A máquina ganhou!';
            }

            document.getElementById('escolha-jogador').innerText = escolhaJogador;
            document.getElementById('escolha-maquina').innerText = escolhaComputador;
            document.getElementById('mensagem-resultado').innerText = resultado;    
        }