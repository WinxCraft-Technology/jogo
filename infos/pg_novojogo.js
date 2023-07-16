document.getElementById("criarJogo").addEventListener("click", function () {
    const nome_save = document.getElementById("nome-save").value;
    const nome_treinador = document.getElementById("nome-treinador").value;
    const time_selecionado = document.getElementById("select-time");
    const time_selecionado_valor = time_selecionado.value;

    const obj = {};
    obj[nome_save] = {
        nome_treinador,
        time_selecionado_valor
    };

    const savePadraoJSON = JSON.stringify(obj);
    localStorage.setItem(nome_save, savePadraoJSON);
})