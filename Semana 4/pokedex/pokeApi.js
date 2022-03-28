const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./tierpok.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            //imagen
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            //stats
            let Hp = data.stats[0].base_stat;
            pokelife(Hp);
            let Atk = data.stats[1].base_stat;
            pokeatk(Atk);
            let Def = data.stats[2].base_stat;
            pokedef(Def);
            let Vel = data.stats[3].base_stat;
            pokevel(Vel);
            let spAtk = data.stats[4].base_stat;
            pokespatk(spAtk);
            let spDef = data.stats[5].base_stat;
            pokespdef(spDef);
            //tipo
            let type = data.types.map(typ => typ.type.name);
            poketype(type);
            //primera aparcion
            let first = data.game_indices[0].version.name;
            pokefirst(first);
            //movimientos
            let movimientos = data.moves.map(mov => mov.move.name);
            pokemov(movimientos);


        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokelife = (Hp) => {
    const inputfield = document.getElementById("Hp");
    inputfield.value = Hp;
}
const pokeatk = (Atk) => {
    const inputfield = document.getElementById("Atk");
    inputfield.value = Atk;
}
const pokedef = (Def) => {
    const inputfield = document.getElementById("Def");
    inputfield.value = Def;
}
const pokevel = (Vel) => {
    const inputfield = document.getElementById("Vel");
    inputfield.value = Vel;
}
const pokespatk = (spAtk) => {
    const inputfield = document.getElementById("spAtk");
    inputfield.value = spAtk;
}
const pokespdef = (spDef) => {
    const inputfield = document.getElementById("spDef");
    inputfield.value = spDef;
}
const pokemov =  (movimientos) => {
    const inputfield = document.getElementById("movimientos");
    inputfield.value = movimientos;
}
const poketype = (type) =>{
    const inputfield = document.getElementById("type");
    inputfield.value = type;
}
const pokefirst = (first) =>{
    const inputfield = document.getElementById("first")
    inputfield.value = first;
}
