import React from 'react'

export const GameCategoryRow = ({ category }: {category: string}) => {
  category = ''
  return (
    <li className="text-[1.5rem] mt-[50px] mb-[30px]">
        <h2>{ category }</h2>
    </li>
  )
}
