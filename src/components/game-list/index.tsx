import React, { ReactElement } from 'react'
import { IGame } from '../../types/data'
import { GameCategoryRow } from '../game-category-row'
import { JsxElement, idText } from 'typescript'
import { GameRow } from '../game-row'

export const GameList = ({ games, filterText, inWishListOnly }: { games: IGame[], filterText: string, inWishListOnly: boolean}) => {

  const rows: ReactElement[] = []
  let lastCategory = ''

  games.forEach(
    (game) => {

      if (game.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return
      }

      if (inWishListOnly && !game.inWishList) {
        return
      }
      if(game.category !== lastCategory) {
        rows.push(
          <GameCategoryRow category={ game.category } key={game.category}/>
        )
      }

      rows.push(
        <GameRow game={ game } key={game.name}/>
      )
      lastCategory = game.category
    }
  )
  return (
    <ul>
        { rows }
    </ul>
  )
}
