import { act } from "react-dom/test-utils";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
const ADD_POST = "Add_post";
const UPDATE_NEW_POST_TEXT = "Update_new_post_text";
const SEND_MESSAGE = "Send_message";
const UPDATE_NEW_MESSAGE_TEXT = "Update_new_message_text";
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "post1", likesCount: 12 },
        { id: 1, message: "post2", likesCount: 22 },
        { id: 2, message: "post3", likesCount: 14 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Message" },
        { id: 2, message: "meessage with mistake" },
        { id: 3, message: "Fake news" },
      ],
      dialogs: [
        { id: 1, name: "Viachaslau" },
        { id: 2, name: "Olaf" },
        { id: 3, name: "Eserhin" },
      ],
      newMessageText: "",
      // newText: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(action, this._state.profilePage);
    this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);
    this._callSubscriber(this._state);
  },
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updatePostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const updateMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default store;
