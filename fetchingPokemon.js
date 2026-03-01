localStorage.setItem("sectionId", 0);
localStorage.setItem("listId", 0);
localStorage.setItem("pokeName", "zed")
async function getPokemonInfo() {
    console.log("Fetching Pokemon Info");
    var searchID = document.getElementById('pokemonNameSearch');
    var identifier = searchID.value;
    if (identifier == localStorage.getItem("pokeName")) {
        console.log("result already cached.")
        return;
    }
    
    console.log(identifier);
    try {
        // search pokemon based on entered text
        let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}/`)
        let res = await req.json();
        let pokeName = res.name;
        let moveList = res.moves;
        let sprite = res.sprites.front_default;
        
        // set pokemon image to searched pokemon sprite
        let img = document.getElementById('pokemonImage');
        img.src = sprite;

        // set audiobyte to searched pokemon cry
        let audiobyte = document.getElementById('soundbyte');
        audiobyte.src = res.cries.latest

        // set moveset to search pokemon moveset
        let pokeset = document.getElementById('moveset');

        // clear previous movesets loaded
        while (pokeset.firstChild) {
            pokeset.removeChild(pokeset.lastChild);
        }

        // set new moveset for new pokemon
        for (let i = 0; i<moveList.length; i++) {
            var option = document.createElement('option');
            option.value = moveList[i].move.name;
            pokeset.appendChild(option);
        }

        // load the moves into the select move boxes
        document.getElementById('move1').value = moveList[0].move.name;
        document.getElementById('move2').value = moveList[0].move.name;
        document.getElementById('move3').value = moveList[0].move.name;
        document.getElementById('move4').value = moveList[0].move.name;

        localStorage.setItem("pokeName", pokeName);
        localStorage.setItem("movelist", moveList);
        localStorage.setItem("spriteURL", sprite);
    }
    catch (error) {
        console.log(error);
    }


}

/* Debug Function
function pToConsoleLocalStorage() {
    let name = localStorage.getItem("pokeName");
    console.log(name);
    let spriteURL = localStorage.getItem("spriteURL");
    console.log(spriteURL);
}
*/

function AddPokeToTeam() {
    let pokemon = localStorage.getItem("pokeName");
    console.log(`Adding ${pokemon} to Team`);

    // get moves from html and set them to local storage
    let move1 = document.getElementById('move1').value;
    localStorage.setItem("move1", move1);
    let move2 = document.getElementById('move2').value;
    localStorage.setItem("move2", move2);
    let move3 = document.getElementById('move3').value;
    localStorage.setItem("move3", move3);
    let move4 = document.getElementById('move4').value;
    localStorage.setItem("move4", move4);

    try {
        // create new section for new pokemon (to add to team)
        let newSection = document.createElement('section');

        // load section Id from local Storage
        let sectionId = localStorage.getItem("sectionId");
        sectionId++;

        // set new Section Id
        newSection.id = "section-" + sectionId;
        veryNewSectionId = newSection.id;
        // set incremented Id back to local Storage and add new Section to DOM
        localStorage.setItem("sectionId", sectionId);
        newSection.style = "display: flex; flex-direction: row; border-style: solid;";
        document.getElementById('pokemon').appendChild(newSection);

        // get stored data from local Storage
        let move1 = localStorage.getItem("move1");
        let move2 = localStorage.getItem("move2");
        let move3 = localStorage.getItem("move3");
        let move4 = localStorage.getItem("move4");

        let sprite = localStorage.getItem("spriteURL")
        let sprImg = document.createElement('img');
        sprImg.src = sprite;
        sprImg.width = 100;
        sprImg.height = 100;
        sprImg.alt = "pokemonSprite";
        document.getElementById(veryNewSectionId).appendChild(sprImg);

        // get list counter from local Storage, increment it, then set list id back to local Storage
        let listId = localStorage.getItem("listId");
        listId++;
        localStorage.setItem("listId", listId);

        // create ul list and add it to new section
        let list = document.createElement('ul');
        list.id = "list-" + listId;
        veryNewListId = list.id;
        list.style = "display: flex; flex-direction: column;";
        document.getElementById(veryNewSectionId).appendChild(list);

        // create move 1 
        let node = document.createElement('li');
        let textnode = document.createTextNode(move1);
        node.appendChild(textnode)
        document.getElementById(veryNewListId).appendChild(node);

        // create move 2
        let node2 = document.createElement('li');
        let textnode2 = document.createTextNode(move2);
        node2.appendChild(textnode2)
        document.getElementById(veryNewListId).appendChild(node2);

        // create move 3
        let node3 = document.createElement('li');
        let textnode3 = document.createTextNode(move3);
        node3.appendChild(textnode3)
        document.getElementById(veryNewListId).appendChild(node3);

        // create move 4
        let node4 = document.createElement('li');
        let textnode4 = document.createTextNode(move4);
        node4.appendChild(textnode4)
        document.getElementById(veryNewListId).appendChild(node4);

    }
    catch (error) {
        console.log(error);
    }
}