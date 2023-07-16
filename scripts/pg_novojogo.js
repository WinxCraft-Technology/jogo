document.getElementById("criarJogo").addEventListener("click", function () {
    const nome_save = document.getElementById("nome-save").value;
    const nome_treinador = document.getElementById("nome-treinador").value;
    const time_selecionado = document.getElementById("select-time");
    const time_selecionado_valor = time_selecionado.value;
    const active = 1;


    // Trecho responsável por pegaro "savePadrao" no localstorage e armazenar dentro do save que está sendo criado
    // Obtém o valor do objeto no localStorage
    const savePadraoJSON = localStorage.getItem('savePadrao');

    // Converte a string JSON em um objeto JavaScript
    const savePadrao = JSON.parse(savePadraoJSON);

    const obj = {};
    obj[nome_save] = {
        nome_treinador,
        time_selecionado_valor,
        infos_save: Object.assign({}, savePadrao),
        active
    };

    const novoSaveJSON = JSON.stringify(obj);
    localStorage.setItem(nome_save, novoSaveJSON);
})