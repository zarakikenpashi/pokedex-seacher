import PokeCard from "../components/PokeCard"

const ResultsContainer = (pokemon) => {
  return (
    <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
    {
      pokemon.pokemonArray.map((pokemon, index) => {
        return (
          <PokeCard key={index} pokemon={pokemon} />
        )
      })
    }
    </div>
  )
}

export default ResultsContainer