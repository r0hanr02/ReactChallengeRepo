const button = document.querySelector("#btn")

button.addEventListener("click",()=>{
    let pokemonName = document.querySelector("#pokemonName").value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
        if (!response.ok) {
            alert("check the spelling")
             throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    .then((data)=>{
            let imgsrc=document.querySelector("#img")
            let namesrc=document.querySelector("#name")
            let typesrc=document.querySelector("#Type")
            let ability1src=document.querySelector("#ability1")
            let ability2src=document.querySelector("#ability2")
            imgsrc.src=data.sprites.front_default
            imgsrc.style.display="block"
            namesrc.innerHTML = `<span>Name : ${data.forms[0].name}</span>`
            typesrc.innerHTML = `<span>Type : ${data.types[0].type.name}</span>`
            ability1src.innerHTML = `<span>Ability 1 : ${data.abilities[0].ability.name}</span>`
            if (data.abilities[1]) {
                ability2src.innerHTML = `<span>Ability 2 : ${data.abilities[1].ability.name}</span>`;
            } else {
                ability2src.innerHTML = `<span>Ability 2 : None</span>`;
            }
            document.querySelector("#pokemonName").value = "";
    })
    .catch((err)=>{
        console.log(err);
    })
})

