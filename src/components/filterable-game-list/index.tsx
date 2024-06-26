import React, { ChangeEventHandler, useState } from 'react'
import { IGame } from '../../types/data'
import { SearchBar } from '../search-bar'
import { GameList } from '../game-list'

export const FilterableGameList = ( { games }:{ games: IGame[]} ) => {
  const [ filterText, setFilterText ] = useState('')
  const [ inWishListOnly, setInWishListOnly] = useState(false)

  return (
    <div 
        className="min-h-[450px] max-w-[960px] mx-auto my-[50px]">
        <SearchBar filterText={ filterText } inWishListOnly={ inWishListOnly} setValue={ setFilterText} setInWishListOnly={setInWishListOnly}/>
        <GameList 
          games={ games }
          filterText={filterText}
          inWishListOnly={inWishListOnly} />
    </div>
  )
}
