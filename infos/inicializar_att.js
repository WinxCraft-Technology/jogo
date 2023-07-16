/*
Prefixos:

R_ = Recebe do localstorage
*/


// Informações para atualizar o jogo
const timesNBA = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "Los Angeles Clippers",
  "Los Angeles Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Pelicans",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia 76ers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards"
];
const versao = "1"
const elencoAtlantaHawks = atlantahawks();


// Criar o objeto savePadrao
const savePadrao = {
  timesNBA,
  versao,
  elencoAtlantaHawks
};
const savePadraoJSON = JSON.stringify(savePadrao);


// Pegar a versão atual no localstorage
// Obter a string JSON armazenada no LocalStorage
const R_savePadraoJSON = localStorage.getItem('savePadrao');
// Converter a string JSON de volta para um objeto JavaScript
const R_savePadrao = JSON.parse(R_savePadraoJSON);
// Verificar o valor da propriedade "versao"
const R_versao = R_savePadrao.versao;


// Verifica se tem algo para atualizar e atualiza, se necessário
if (versao == R_versao) {
  // Não tem nada pra att :D
} else {
  localStorage.setItem('savePadrao', savePadraoJSON);
}