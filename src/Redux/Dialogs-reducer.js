const SEND_MESSAGE = "dialogs/SEND_MESSAGE";
const DELETE_MESSAGE = "dialogs/DELETE_MESSAGE";


let initialState = {
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
let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MESSAGE:
      return {
        ...state, messages: state.messages.filter(p => p.id != action.messageId)
      };
    case SEND_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: text }],
      };
    default:
      return state;
  }
};
export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE,newMessageText})
export const deleteMessageActionCreator = (messageId) => ({type: DELETE_MESSAGE,messageId})


export default dialogsReducer;
