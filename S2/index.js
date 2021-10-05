"use strict";


window.onload = () => {
    let pokemon = [];
    async function getList() {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        if (response.status === 200) {
            return await response.json();
        } else {
            console.log('fuck');
        }
    }

    getList().then(data => {
        let Links = data.results;
        for (let link of Links) {
            fetch(link.url).then(response => {
                return response.json();
            }).then(data => {
                pokemon.push(data);
            });
        }
        setHtmlData();
    });


    function setHtmlData() {
        /* const resultElement = document.getElementById('txt');
        let htmlString = ``; */
        console.log(pokemon);
        pokemon.forEach(element => console.log(element));
    }
}