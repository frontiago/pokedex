const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

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
