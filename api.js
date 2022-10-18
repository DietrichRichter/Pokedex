let pokemonUrl = [];
let pokemonDatas = [];
let nameOfPokemon = [];
let heighOfPokemon = [];
let idOfPokemon = [];
let spritesOfPokemon = [];
let typesOfPokemon = [];
let weightOfPokemon = [];
let statsOfPokemon = [];

// wird beim start sofort ausgeführt
function init() {
    loadUrl();
}


// die URL der API wird geladen und in ein JSON gepackt
async function loadUrl() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    pokemonUrl = responseAsJson;

    loadPokemonData();
}


// die einzelnen Daten der URL werden geladen und in ein JSON gepackt
async function loadPokemonData() {
    for (let i = 0; i < pokemonUrl['results'].length; i++) {
        let pokemonData = pokemonUrl['results'][i]['url'];

        let responsePokemonData = await fetch(pokemonData);
        let responsePokemonDataAsJson = await responsePokemonData.json();
        pokemonDatas.push(responsePokemonDataAsJson);

        pushDataToJson(i);
    }
}


// die spezifischen Daten von jedem Pokemon in ein JSON pushen
function pushDataToJson(i) {
    let pokemonName = pokemonDatas[i]['name'];
    let pokemonHeigh = pokemonDatas[i]['height'];
    let pokemonId = pokemonDatas[i]['id'];
    let pokemonSprites = pokemonDatas[i]['sprites']['other']['dream_world']['front_default']
    let pokemonTypes = pokemonDatas[i]['types']['0']['type']['name'];
    let pokemonWeight = pokemonDatas[i]['weight'];
    let pokemonStats = pokemonDatas[i]['stats'];

    nameOfPokemon.push(pokemonName);
    heighOfPokemon.push(pokemonHeigh);
    idOfPokemon.push(pokemonId);
    spritesOfPokemon.push(pokemonSprites);
    typesOfPokemon.push(pokemonTypes);
    weightOfPokemon.push(pokemonWeight);
    statsOfPokemon.push(pokemonStats);

    render();
}