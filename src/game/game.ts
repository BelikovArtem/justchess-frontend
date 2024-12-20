import { GameStatus } from "../api/enums"
import Player from "./player"

export default class Game {
  bonus: number
  status: GameStatus
  control: string
  white: Player
  black: Player

  constructor(b: number, s: number, c: string, w: Player, bp: Player) {
    this.bonus = b
    this.status = s
    this.control = c
    this.white = w
    this.black = bp
  }
}