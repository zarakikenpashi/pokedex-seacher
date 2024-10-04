const PokeCard = (pokemon) => {
  return (
    <div className="p-2 bg-white rounded-md shadow-md relative h-52 flex flex-col justify-center items-center">
        <img 
            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png" 
            alt="" 
            height={100} width={100} 
            className="object-cover absolute top-0 left-1/2  -translate-y-1/2 -translate-x-1/2" 
        />
        <div>
            <p className="text-sm uppercase text-center">N°{pokemon.pokemon.id}</p>
            <h1 className="text-2xl font-bold my-2 capitalize">{pokemon.pokemon.name}</h1>
            <button className="bg-green-400 text-white font-bold py-.5 px-4 rounded">electric</button>
            
        
        </div>
    </div>
  )
}

export default PokeCard