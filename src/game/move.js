/** Represents a move completed by a user. */
export default class Move {
  /** @type {string} */
  to
  /** @type {string} */
  from
  /** @type {boolean} */
  isCheck
  /** @type {number} */
  moveType
  /** @type {number} */
  timeLeft
  /** @type {boolean} */
  isCapture
  /** @type {boolean} */
  isCheckmate
  /** @type {string} */
  promotionPayload

  /**
   * 
   * @param {string} to 
   * @param {string} from 
   * @param {boolean} isCheck 
   * @param {number} moveType 
   * @param {number} timeLeft 
   * @param {boolean} isCapture 
   * @param {boolean} isCheckmate 
   * @param {string} promotionPayload 
   */
  constructor(to, from, isCheck, moveType, timeLeft, isCapture, isCheckmate,
    promotionPayload) {
    this.to = to
    this.from = from
    this.isCheck = isCheck
    this.moveType = moveType
    this.timeLeft = timeLeft
    this.isCapture = isCapture
    this.isCheckmate = isCheckmate
    this.promotionPayload = promotionPayload
  }
}

/** Represents all moves that sended to a backend */
export class MoveDTO {
  /** @type {string} */
  to
  /** @type {string} */
  from
  /** @type {string} */
  promotionPayload

  constructor(to, from, pp) {
    this.to = to
    this.from = from
    this.promotionPayload = pp
  }
}

/** Respresents a possible move on a board. */
export class PossibleMove {
  /** @type {string} */
  to
  /** @type {string} */
  from
  /** @type {number} */
  moveType

  /**
   * Creates a new Possible move.
   * @param {string} to 
   * @param {string} from 
   * @param {number} moveType 
    */
  constructor(to, from, moveType) {
    this.to = to
    this.from = from
    this.moveType = moveType
  }
}