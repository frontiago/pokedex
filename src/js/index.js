import {pokemonsData} from '../data/pokemons.js'

const divPokemonCards = document.querySelector('.cartoes-pokemon')

pokemonsData.map((pokemon) => {

    const templateCardPokemon = `
    <div class="cartao-pokemon type-${pokemon.type}" id="cartao-${pokemon.name.toLowerCase()}">

        <div class="cartao-topo">
            <div class="detalhes">
                <h2 class="nome"> ${pokemon.name} </h2>
                <span> #${pokemon.id} </span>
            </div>
            <span class="tipo"> ${pokemon.type} </span>
            <div class="cartao-imagem">
                <img src=${pokemon.imageBig} alt=${pokemon.name} />
            </div>
        </div>

        <div class="cartao-informacoes">
            <div class="status">
                <h3>Status</h3>

                <ul>
                    <li><strong>HP:</strong> ${pokemon.status.hp} </li>
                    <li><strong>Attack:</strong> ${pokemon.status.attack} </li>
                    <li><strong>Defense:</strong> ${pokemon.status.defense} </li>
                    <li><strong>Speed:</strong> ${pokemon.status.speed} </li>
                    <li><strong>Total:</strong> ${pokemon.status.total} </li>
                </ul>
            </div>

            <div class="habilidades">   
                <h3>Habilidades</h3>
                <ul>
                    ${pokemon.habilities.map(hability => (
                        '- ' + hability + '<br />'
                    )).join('')}
                </ul>
            </div>

    </div>
`
    divPokemonCards.innerHTML += templateCardPokemon

})

const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const idPokemonSelecionado = pokemon.attributes.id.value
        const cartaoAberto = document.querySelector('.aberto')
        const cartaoParaAbrir = document.getElementById(`cartao-${idPokemonSelecionado}`)

        cartaoAberto.classList.remove('aberto')
        cartaoParaAbrir.classList.add('aberto')

        const pokemonAtivoNaLista = document.querySelector('.ativo')
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        
        pokemonAtivoNaLista.classList.remove('ativo')
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
