// diese Funktion wird an eine andere Funktion zurückgegeben
function returnRenderPokemonSmallContainer(a) {
    return `
    <div onclick="showBigContainer(${a})" id="pokemon-container-small${a}" class="pokemon-container-small">
        <div class="pokemon-container-small-headline">
            <div><h1>${nameOfPokemon[a]}</h1></div>
            <div><h1>#${idOfPokemon[a]}</h1></div>
        </div>
        <div><img class="pokemon-container-small-img" src="${spritesOfPokemon[a]}"></div>
    </div>`;
}


// diese Funktion wird an eine andere Funktion zurückgegeben
function renturnShowBigContainer(a) {
    return `
    <div id="pokemon-container-big" class="pokemon-container-big">
        <div class="pokemon-big-container-headline">
            <img onclick="closeBigContainer()" class="buttons" src="img/cancel.png">
            <h1>${nameOfPokemon[a]}</h1>
            <h1>#${idOfPokemon[a]}</h1>
        </div>
        <div class="pokemon-div-big-img">
            <img onclick="lastKard(${a})" class="buttons-left-right" src="img/zuruck.png">
            <img class="pokemon-container-big-img" src="${spritesOfPokemon[a]}">
            <img onclick="nextKard(${a})" class="buttons-left-right" src="img/next.png">
        </div>
        <div class="stats-headline">
        <h2>Stats of ${nameOfPokemon[a]}</h2>
        </div>
        <div class="pokemon-info">
            <div class="pokemon-stats-container">
                <p>Heigt: ${heighOfPokemon[a]} ft</p>
                <p>Weight: ${weightOfPokemon[a]} lb</p>
                <p>Typ: ${typesOfPokemon[a]}</p>
                <p>Abilities:</p>
                <p>1: ${pokemonDatas[a]['abilities'][0]['ability']['name']}</p>
                <p id="check-anilities-length"></p>
            </div>
            <div class="pokemon-stats-container">
                <p>Hp: ${statsOfPokemon[a][0]['base_stat']}</p>
                <p>Attack: ${statsOfPokemon[a][1]['base_stat']}</p>
                <p>Defense: ${statsOfPokemon[a][2]['base_stat']}</p>
                <p>Special-Attack: ${statsOfPokemon[a][3]['base_stat']}</p>
                <p>Special-Defense: ${statsOfPokemon[a][4]['base_stat']}</p>
                <p>Speed: ${statsOfPokemon[a][5]['base_stat']}</p>
            </div>
        </div>
    </div>`;
}