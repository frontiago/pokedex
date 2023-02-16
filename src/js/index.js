import {pokemonsData} from '../data/pokemons.js'

const divPokemonCards = document.querySelector('.cards-pokemon')

pokemonsData.map((pokemon) => {

    const templateCardPokemon = `
    <div class="card-pokemon type-${pokemon.type}" id="card-${pokemon.name.toLowerCase()}">

        <div class="card-top">
            <div class="details">
                <h2 class="name"> ${pokemon.name} </h2>
                <span> #${pokemon.id} </span>
            </div>
            <span class="type"> ${pokemon.type} </span>
            <div class="card-image">
                <img src=${pokemon.imageBig} alt=${pokemon.name} />
            </div>
        </div>

        <div class="card-info">
            <div class="status">
                <h3>Status</h3>

                <ul>
                    <li>
                        <img src="src/images/icons/icon-hp.png" alt="icon heart" class="icons"> 
                        <strong>HP:</strong> ${pokemon.status.hp} 
                    </li>
                    <li>
                        <img src="src/images/icons/icon-attack.png" alt="icon heart" class="icons"> 
                        <strong>Attack:</strong> ${pokemon.status.attack}
                    </li>
                    <li>
                        <img src="src/images/icons/icon-defense.png" alt="icon heart" class="icons"> 
                        <strong>Defense:</strong> ${pokemon.status.defense}
                    </li>
                    <li>
                        <img src="src/images/icons/icon-speed.png" alt="icon heart" class="icons"> 
                        <strong>Speed:</strong> ${pokemon.status.speed}
                    </li>
                    <li>
                        <img src="src/images/icons/icon-total.png" alt="icon heart" class="icons"> 
                        <strong>Total:</strong> ${pokemon.status.total}
                    </li>
                </ul>
            </div>

            <div class="abilities">   
                <h3>Abilities</h3>
                <ul>
                    <li class="ability">
                        ${pokemon.abilities.map(ability => (
                            '- ' + ability + '<br />'
                        )).join('')}
                    </li>
                </ul>
            </div>

    </div>
`
    divPokemonCards.innerHTML += templateCardPokemon

})

const pokemonList = document.querySelectorAll('.pokemon')

pokemonList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const idSelectedPokemon = pokemon.attributes.id.value
        const cardOpened = document.querySelector('.opened')
        const cardToOpen = document.getElementById(`card-${idSelectedPokemon}`)

        cardOpened.classList.remove('opened')
        cardToOpen.classList.add('opened')

        const ActivePokemonOnTheList = document.querySelector('.active')
        const selectedPokemonOnTheList = document.getElementById(idSelectedPokemon)
        
        ActivePokemonOnTheList.classList.remove('active')
        selectedPokemonOnTheList.classList.add('active')
    })
})
