import { Search } from 'lucide-react';

const SearchContainer = (search) => {
  return (
    <div>
        <header className="text-center">
            <h1 className="text-3xl font-bold capitalize">pokedex searcher</h1>
            <p className="p-4">Search for a Pokémon by name or using its National Pokédex number.</p>
        </header>
      
      <div className="bg-white p-1.5 rounded-md flex gap-2 items-center">
      <Search size={20} />
        <input 
            type="text"  
            placeholder="Search in 797 pokemons"
            className="outline-none w-full bg-transparent"
            value={search.searchText}
            onChange={(e) => search.setSearchText(e.target.value)}
        />
      </div>
    
    
    </div>
  )
}

export default SearchContainer