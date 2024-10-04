import { useEffect, useState } from "react"
import Shape from "./components/Shape"
import ResultsContainer from "./containers/ResultsContainer"
import SearchContainer from "./containers/SearchContainer"

const App = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const [searchText, setSearchText] = useState("")


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then(res => res.json())
      .then(data => setAllPokemon(data.results)) 
  })


  return (
    <div className="p-2 md:px-20 lg:px-40 xl:px-60">
      <SearchContainer searchText={searchText} setSearchText={setSearchText} />
      <ResultsContainer pokemonArray={allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchText) ) } />
      <Shape />
    </div>
  )
}

export default App