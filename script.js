const pokemon = "pikachu";

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then(resposta => resposta.json())

    .then(dados => {

        document.querySelector("#nome").textContent = dados.name;
        document.querySelector("#id").textContent = dados.id;
        document.querySelector("#altura").textContent = dados.height / 10 + " m";
        document.querySelector("#peso").textContent = dados.weight / 10 + " kg";
        document.querySelector("#imagem").src =
        //o chat me mostrou que dentro da api tinha outras categorias de
        // imagens melhores dos pokemons e me auxiliou a colocar esse "other["official-artwork"]"
        dados.sprites.other["official-artwork"].front_default;

    })

    .catch(erro => {
        console.log("Erro ao buscar Pokémon:", erro);
    });
