// die Seite wird gerendert und einzelne Funktionen werden geladen
function render() {
    renderPokemonSmallContainer();
}


// die einzelnen Karten auf der Seite werden gerendert und angezeigt
function renderPokemonSmallContainer() {
    let smallContainer = document.getElementById('pokemon-main-container-small');

    smallContainer.innerHTML = '';

    for (let a = 0; a < nameOfPokemon.length; a++) {
        const namesOfPokemon = nameOfPokemon[a];

        smallContainer.innerHTML += returnRenderPokemonSmallContainer(a);

        smallContainerColor(a);
    }
}


// den einzelnen Karten bekommen die spezifischen Farben für das jeweilige Pokemon gegeben
function smallContainerColor(c) {
    let color = document.getElementById('pokemon-container-small' + c);

    if (typesOfPokemon[c] === 'grass') {
        color.style.backgroundColor = "rgb(62, 181, 62)";
    }

    if (typesOfPokemon[c] === 'fire') {
        color.style.backgroundColor = "rgb(222, 56, 56)";
    }

    if (typesOfPokemon[c] === 'water') {
        color.style.backgroundColor = "rgb(82, 82, 228)";
    }

    if (typesOfPokemon[c] === 'bug') {
        color.style.backgroundColor = "rgb(231, 176, 104)";
    }

    if (typesOfPokemon[c] === 'normal') {
        color.style.backgroundColor = "rgb(202, 200, 187)";
    }

    if (typesOfPokemon[c] === 'poison') {
        color.style.backgroundColor = "rgb(203, 79, 164)";
    }

    if (typesOfPokemon[c] === 'electric') {
        color.style.backgroundColor = "rgb(222, 222, 85)";
    }

    if (typesOfPokemon[c] === 'ground') {
        color.style.backgroundColor = "rgb(147, 66, 66)";
    }

    if (typesOfPokemon[c] === 'fairy') {
        color.style.backgroundColor = "rgb(255, 33, 255)";
    }

    if (typesOfPokemon[c] === 'fighting') {
        color.style.backgroundColor = "rgb(97, 95, 95)";
    }

    if (typesOfPokemon[c] === 'psychic') {
        color.style.backgroundColor = "rgb(216, 133, 247)";
    }

    if (typesOfPokemon[c] === 'rock') {
        color.style.backgroundColor = "rgb(92, 59, 59)";
    }

    if (typesOfPokemon[c] === 'ghost') {
        color.style.backgroundColor = "rgb(12, 208, 226)";
    }

    if (typesOfPokemon[c] === 'ice') {
        color.style.backgroundColor = "rgb(77, 77, 255)";
    }

    if (typesOfPokemon[c] === 'dragon') {
        color.style.backgroundColor = "rgb(173, 173, 173)";
    }
}


// mit dieser Funktion wird jede einzelne Karte groß angezeigt
function showBigContainer(a) {
    let big = document.getElementById('pokemon-main-container-big');

    document.getElementById('pokemon-main-container-big').classList.remove('d-none');

    big.innerHTML = '';

    big.innerHTML += renturnShowBigContainer(a);

    showBigContainerColor(a);
    checkAbilities(a);
}


// die Farbe in der großen Ansicht wird angepasst
function showBigContainerColor(a) {
    let bigContainerColor = document.getElementById('pokemon-container-big');

    if (typesOfPokemon[a] === 'grass') {
        bigContainerColor.style.backgroundColor = "rgb(62, 181, 62)";
    }

    if (typesOfPokemon[a] === 'fire') {
        bigContainerColor.style.backgroundColor = "rgb(222, 56, 56)";
    }

    if (typesOfPokemon[a] === 'water') {
        bigContainerColor.style.backgroundColor = "rgb(82, 82, 228)";
    }

    if (typesOfPokemon[a] === 'bug') {
        bigContainerColor.style.backgroundColor = "rgb(231, 176, 104)";
    }

    if (typesOfPokemon[a] === 'normal') {
        bigContainerColor.style.backgroundColor = "rgb(202, 200, 187)";
    }

    if (typesOfPokemon[a] === 'poison') {
        bigContainerColor.style.backgroundColor = "rgb(203, 79, 164)";
    }

    if (typesOfPokemon[a] === 'electric') {
        bigContainerColor.style.backgroundColor = "rgb(222, 222, 85)";
    }

    if (typesOfPokemon[a] === 'ground') {
        bigContainerColor.style.backgroundColor = "rgb(147, 66, 66)";
    }

    if (typesOfPokemon[a] === 'fairy') {
        bigContainerColor.style.backgroundColor = "rgb(255, 33, 255)";
    }

    if (typesOfPokemon[a] === 'fighting') {
        bigContainerColor.style.backgroundColor = "rgb(97, 95, 95)";
    }

    if (typesOfPokemon[a] === 'psychic') {
        bigContainerColor.style.backgroundColor = "rgb(216, 133, 247)";
    }

    if (typesOfPokemon[a] === 'rock') {
        bigContainerColor.style.backgroundColor = "rgb(92, 59, 59)";
    }

    if (typesOfPokemon[a] === 'ghost') {
        bigContainerColor.style.backgroundColor = "rgb(12, 208, 226)";
    }

    if (typesOfPokemon[a] === 'ice') {
        bigContainerColor.style.backgroundColor = "rgb(77, 77, 255)";
    }

    if (typesOfPokemon[a] === 'dragon') {
        bigContainerColor.style.backgroundColor = "rgb(173, 173, 173)";
    }
}


// damit wird die große Ansicht geschlossen
function closeBigContainer() {
    document.getElementById('pokemon-main-container-big').classList.add('d-none');
}


// die nächste Karte in groß wird angezeigt
function nextKard(a) {
    a++;
    if (a <= nameOfPokemon.length -1) {
        showBigContainer(a);
    } else {
        showBigContainer(0);
    }
}


// die Karte davor wird angezeigt
function lastKard(a) {
    a--;
    if (a >= 0) {
        showBigContainer(a);
    } else {
        showBigContainer(nameOfPokemon.length -1);
    }
}


// damit wird überprüft wie viele Abilities ein Pokemon hat
function checkAbilities(a) {
    let ability = document.getElementById('check-anilities-length');

    if (pokemonDatas[a]['abilities'].length === 2) {
        ability.innerHTML += `
        2: ${pokemonDatas[a]['abilities'][1]['ability']['name']}`;
    }
}