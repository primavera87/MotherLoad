import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
    posts: [
      {id: 1, message: 'Hello!', likesCount: 12},
      {id: 2, message: 'It is my first post', likesCount: 11},],
    newPostText: 'We are greate mothers'

  },
    dialogsPage: {
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
    },
    sidebar: {}
    },
  _callSubscriber () {
      console.log('State is changed');
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state)
  }
}




export default store;
window.store = store;
