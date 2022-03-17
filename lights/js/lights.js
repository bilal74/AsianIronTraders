// const lights_container = document.getElementById('lights1');
const lights_number = 67;
var x = 1;
// var y = 1;

const fetchLights = async () => {
    for(let i=1; i<=lights_number; i++){

        var img = document.createElement('img');

        var para = document.createElement('h6');
        const temp = `SL - ${i}`;
        para.innerHTML = temp;

        img.classList.add('img-thumbnail');
        img.src = `./images/one${i}.jpeg`; 
        if(x == 1){
            document.getElementById('lights1').appendChild(img);
            document.getElementById('lights1').appendChild(para);
            // x++;
            // y += 5;
        }
        // else if(x == 2){
        //     document.getElementById('lights2').appendChild(img);
        //     document.getElementById('lights2').appendChild(para);
        //     x++;
        //     y += 5;
        // }
        // else if(x == 3){
        //     document.getElementById('lights3').appendChild(img);
        //     document.getElementById('lights3').appendChild(para);
        //     x++
        //     y += 5;
        // }
        // else if(x == 4){
        //     document.getElementById('lights4').appendChild(img);
        //     document.getElementById('lights4').appendChild(para);
        //     x++;
        //     y += 5;
        // }
        // else if(x == 5){
        //     document.getElementById('lights5').appendChild(img);
        //     document.getElementById('lights5').appendChild(para);
        //     x = 1;
        //     y += 5;
        // }
    }
}
fetchLights();






        // await getPokemon(i);
        // const light = document.createElement('div');
        // light.classList.add('first');
        // const light = document.createElement('img');
        // light.classList.add('first');
        // // console.log(i);
        // const cardHTML = `<img src="./images/one${i}.jpeg" alt="light+${i}" />`;
        // light.innerHTML = cardHTML;
        // lights_container.appendChild(light);


// const getPokemon = async id => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const res = await fetch(url);
//     const pokemon = await res.json();
//     // console.log(pokemon);
//     createPokemonCard(pokemon);
// }

// const createPokemonCard = pokemon => {
//     const pokemonEl = document.createElement('div');
//     pokemonEl.classList.add('pokemon');
//     const {id, name, sprites, types} = pokemon;
//     const type = types[0].type.name;
//     const pokeInnerHTML = `<img src="${sprites.front_default}" alt="${name}" />`;
//     pokemonEl.innerHTML = pokeInnerHTML;
//     poke_container.appendChild(pokemonEl);

// }