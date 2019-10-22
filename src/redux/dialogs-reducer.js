const UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Kroshka-kura'},
    {id: 2, name: 'Mother-of-year'},
    {id: 3, name: 'Nadushka'},
    {id: 4, name: 'Mashunya'},
    {id: 5, name: 'Nyshka'},
  ],
  messages: [
    {id: 1, message: 'Приветик!'},
    {id: 2, message: 'Крошик, выручай!'},
    {id: 3, message: 'Свекобру к зубному надо везти, а мелкого некуда деть!'},
    {id: 4, message: 'Спасибки!!!'},
    {id: 5, message: 'Чмоки!!!'}
  ],
  newMessageBody: ""
};
const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        return { ...state,
        newMessageBody: action.body
        };
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        return {
          ...state,
          newMessageBody: '',
          messages: [ ...state.messages, {id: 6, message: body}]
        };
    default:
        return state;
  }



}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
