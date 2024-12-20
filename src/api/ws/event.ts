// Client and server communicate by sending events.
export default class Event {
  a: EventAction // Action.
  p: any    // Payload.

  constructor(a: EventAction, p: any) {
    this.a = a
    this.p = p
  }
}

// Enum for storing types of event actions.
export enum EventAction {
  CREATE_ROOM = "cr",
  JOIN_ROOM = "jr",
  LEAVE_ROOM = "lr",
  GET_ROOMS = "gr",
  GET_GAME = "gg",
  MOVE = "m",
  CLIENTS_COUNTER = "cc",
  REDIRECT = "r",
  ADD_ROOM = "ar",
  REMOVE_ROOM = "rr",
  LAST_MOVE = "lm",
  MOVES = "mh",
  GAME_INFO = "gi",
  ABORT = "a",
  END_RESULT = "er",
  SEND_MESSAGE = "sm",
  CHAT_MESSAGE = "cm",
}