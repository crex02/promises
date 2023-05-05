console.log('funge');

//FETCH in parallelo

function parallelFetch() {

    const baseUrl = 'https://pokeapi.co/api/v2/';
    const names = ['bulbasaur', 'lukaru', 'umbreon', 'luxio', 'sticazzi'];

    const fetches = [];

    for (const name of names) {
        const pokeUrl = baseUrl + 'pokemon/' + name;
        console.log(pokeUrl);
        const request = fetch(pokeUrl)
            .then(resp => resp.json())
            .catch(err => {
                console.log(err.message);
                return null;
            });
        fetches.push(request);
    }

    Promise.all(fetches).then(data => console.log('promise results', data));

}

parallelFetch();



// FETCH IN SEQUENZA 

function sequentialFetch() {
    const bulbasaUrl = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

    fetch(bulbasaUrl)
        .then(resp => resp.json()
            .then(bulbasaur => {
                console.log(bulbasaur);
                const newUrl = bulbasaur.location_area_encounters;
                console.log(newUrl);
                return fetch(newUrl)
                    .then(resp => resp.json());
            }));

}