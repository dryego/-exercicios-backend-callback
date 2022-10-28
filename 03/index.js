const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
const tempoRodada = (10 / jogadores.length) * 1000;

const participantes = (jogadores) => {

    const jogador = () => {
        let nome = "";
        for (let busca of jogadores) {
            nome = busca;
            console.log(nome);
        }
        //clearInterval(delay);

        console.log("Fim da rodada");

    }
    const delay = setInterval(jogador, tempoRodada);
}

participantes(jogadores);