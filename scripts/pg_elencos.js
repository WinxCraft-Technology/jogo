document.getElementById("select-time").addEventListener("change", function () {
    var time_selecionado = document.getElementById("select-time");
    var time_selecionado_valor = time_selecionado.value

    console.log(time_selecionado_valor)

    // Obtém a string JSON do LocalStorage
    const savePadraoJSON = localStorage.getItem('savePadrao');

    // Converte a string JSON de volta para um objeto
    const savePadrao = JSON.parse(savePadraoJSON);

    const elenco_selecionado = "elenco"+time_selecionado_valor

    // Obtém o array de jogadores dos Atlanta Hawks
    const elenco = savePadrao[elenco_selecionado];

    // Obtém a referência da tabela
    const tabelaElenco = document.querySelector('table');

    // Percorre o array de jogadores e cria as linhas da tabela
    elenco.forEach(jogador => {
        const {
            nome,
            idade,
            posicao,
            nacionalidade,
            overall
        } = jogador;

        // Cria uma nova linha na tabela
        const novaLinha = tabelaElenco.insertRow();

        // Insere as células na nova linha
        const celulaNome = novaLinha.insertCell();
        celulaNome.textContent = nome;

        const celulaIdade = novaLinha.insertCell();
        celulaIdade.textContent = idade;

        const celulaPosicao = novaLinha.insertCell();
        celulaPosicao.textContent = posicao;

        const celulaNacionalidade = novaLinha.insertCell();
        celulaNacionalidade.textContent = nacionalidade;

        const celulaOverall = novaLinha.insertCell();
        celulaOverall.textContent = overall;
    });
})