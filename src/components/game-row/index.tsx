import React from 'react'
import { IGame } from '../../types/data'
import { GameGallery } from '../game-gallery'

export const GameRow = ( {game} : {game: IGame}) => {
  
  return (
    <li className='relative py-[30px] px-[20px] bg-[#2b2b2b4d] my-[20px]'>
        <span className="text-[1.5rem]">{ game.name }</span>
        { game.inWishList && <span className="text-white bg-[#6495ED] py-[5px] px-[10px] ml-[20px]"> In wishlist</span> }
        <GameGallery images={game.images}/>
        <span 
          className="py-[10px] px-[20px] bg-[#7fff00] font-bold text-black"
        >
          { game.price }
        </span>
    </li>
  )
}
