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

document.getElementById("nome-time").innerHTML = info_Time;