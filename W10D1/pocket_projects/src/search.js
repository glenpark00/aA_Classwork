export const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500';



export function findMons(e){
    let input = e.currentTarget;
    name = getMons(input.value);
    
}    

export const getMons = (name) => (
    $.ajax({
     url: pokemonAPI
    }).then((res) => searchMons(res,name)));


export function searchMons(arr,name){
    let mons = filterMons(arr,name);
    attachMons(mons,10);
}        

export function filterMons(arr, name) {
    let res = [];
    for (let mon of arr) {
        if (mon.name.includes(name)) {
            res.push(getInfo(mon));
        }    
    }    
    return res;
}    

export function attachMons (mons,num){
    ul = document.querySelector(".suggestions");
    ul.innerHTML = "";
    for (let i=0; i<num; i++){
        let li = document.createElement("li");
        let mon = createMon(mons[i]);
        li.appendChild(mon);
        ul.appendChild(li);
    }    
}    

export function createMon(mon){
    let span = document.createElement("span");
    span.innerHTML = mon.name;
    let sprite = document.createElement("img");
    sprite.setAttribute("src", mon.sprites.front_default);
    span.appendChild(sprite);
    return span;
}    

//gets info the pokemon of a given name
export const getInfo = (url) => (
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json"
  })
);



export function handleKeypress() {
  let input = document.querySelector(".search");
  input.addEventListener("keydown", e => findMons(e));
}


// // with query from initial json object
// res["url"]

// //with json from search of individual pokemon
// res["sprites"]["front_default"]
