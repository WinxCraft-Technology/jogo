let saveName;

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // Verificar se o nome do item é diferente de "savePadrao"
    if (key !== "savePadrao") {
        // Obter o valor do item do localStorage
        const itemValue = localStorage.getItem(key);

        // Converter o valor de volta para um objeto
        const itemObj = JSON.parse(itemValue);

        // Obtém o save que está sendo utilizado
        if(itemObj[key].active == 1){
            saveName = key;
        };
    }
}


const itemValue = localStorage.getItem(saveName);
const itemObj = JSON.parse(itemValue);
let info_Time = itemObj[saveName].time_selecionado_valor;

document.getElementById("titulo_elenco").innerHTML = "Elenco: "+info_Time;


// Colocar o elenco na tela
{
    // Obtém a string JSON do LocalStorage
    const savePadraoJSON = localStorage.getItem('savePadrao');

    // Converte a string JSON de volta para um objeto
    const savePadrao = JSON.parse(savePadraoJSON);

    const timeAtual = info_Time.replaceAll(" ","");
    const elenco_selecionado = "elenco"+timeAtual

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
}