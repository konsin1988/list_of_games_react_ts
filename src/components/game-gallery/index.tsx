import React from 'react'
import { IGame } from '../../types/data'


export const GameGallery = ({ images } : { images: string[] }) => {
    const gallery = images.map(
        (image, index) => <img className="h-[140px] w-[30%] transition-all first-of-type:scale-120 hover:scale-150" src={ image } alt="preview" key={ index } />
    )
  return (
    <div className="m-[30px] flex">
        { gallery }
    </div>
  )
}
