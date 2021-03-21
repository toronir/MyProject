import React from "react";
import dialogsReducer, {deleteMessageActionCreator, sendMessageActionCreator} from "./Dialogs-reducer";


let state = {
  messages: [
    { id: 1, message: "Message" },
    { id: 2, message: "message with mistake" },
    { id: 3, message: "Fake news" },
  ],
  dialogs: [
    { id: 1, name: "Viachaslau" },
    { id: 2, name: "Olaf" },
    { id: 3, name: "Eserhin" },
  ],

};

test('length of massages should be incremented', () => {
  let action = sendMessageActionCreator("Hello")

  let newState = dialogsReducer(state,action)
  expect (newState.messages.length).toBe(4);
});
test('text of new message should be correct', () => {
  let action = sendMessageActionCreator("Hello")

  let newState = dialogsReducer(state,action)
  expect (newState.messages[3].message).toBe("Hello");
});
test('after deleting length of massages should be decrement', () => {
  let action = deleteMessageActionCreator(1)

  let newState = profileReducer(state,action)
  expect (newState.messages.length).toBe(3);
});