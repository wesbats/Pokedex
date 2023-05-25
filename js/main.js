function alteraTema(){
    let atual = document.querySelector("body").className
    if (atual == "dark"){
        document.querySelector("body").classList.remove("dark");
        document.getElementById("tema").src="imagens/sun.png";
    }else{
        document.querySelector("body").classList.add("dark");
        document.getElementById("tema").src="imagens/moon.png";
    }
}

// PullRequest abaixo

var pokemonPhotos = [];

async function Fetcher(){
    let pokemons = [];
    let URL = 'https://pokeapi.co/api/v2/pokemon';

    while(URL){
        let res = await fetch(URL);
        let data = await res.json();
        let result = data.results;

        pokemons = pokemons.concat(result);

        URL = data.next;
        
    }

    return pokemons;

}

async function PokeTypes(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    const types = data.types.map(typeData => typeData.type.name);

    return types;

  }
  

function PokePhoto(cd) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${cd}.png`;
  
}

function ToUpperFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);

}

document.addEventListener('DOMContentLoaded', function() {
    Fetcher().then(pokedexResearch =>{
        console.log(pokedexResearch);
        let counter = 1;

        pokedexResearch.forEach(element => {
            console.log(ToUpperFirst(element.name));
            console.log(PokePhoto(counter));

            PokeTypes(element.name).then(types => {
              console.log(types);

            });

            counter++;

        });

    });

});
