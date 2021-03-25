const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const CHANGE_ID = "CHANGE-ID";

export const addMessageActionCreate = () => ({type: "ADD-MESSAGE"});
export const updateNewMessageTextActionCreate = (text) => ({type: "UPDATE-NEW-MESSAGE-TEXT", postMessage: text});
export const changeIdActionCreate = (id2) => ({type: "CHANGE-ID", id: id2});

let initialState = {
    messagesData: [
        {
            id: 0, messages: [
                {text: 'hi', sender: 'user'},
                {text: 'Hi', sender: 'friend'},
                {text: 'How r u ?', sender: 'friend'},
                {text: 'ok, bro', sender: 'user'},
                {text: '. . .', sender: 'user'}]
        },
        {
            id: 1, messages: [
                {text: 'hi', sender: 'user'},
                {text: 'Auuu', sender: 'user'},
                {text: 'Wheere r u ?', sender: 'user'},
                {text: '. . .', sender: 'user'}]
        },
        {
            id: 2, messages: [
                {text: 'Man', sender: 'frien'},
                {text: 'U r &&&', sender: 'friend'},
                {text: 'How r u ?', sender: 'friend'},
                {text: 'maaaaaaaaa55n', sender: 'user'}]
        },
        {id: 3, messages: []},
        {id: 4, messages: []},
        {id: 5, messages: []},
        {id: 6, messages: []}
    ],
    newMessageText: '',
    newMessageId: '0',
    dialogsData: [
        {id: 0, name: 'check'},
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Andr'},
        {id: 4, name: 'Valent'},
        {id: 5, name: 'Sant'},
        {id: 6, name: 'Dash'}
    ]
}

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMess = {
                text: state.newMessageText,
                sender: 'user'
            };
            state.messagesData[state.newMessageId].messages.push(newMess);
            state.newMessageText = '';
            state.newMessageId = '0';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.postMessage;
            break;
        case CHANGE_ID:
            state.newMessageId = action.id;
            break;
        default:
            return state;
    }


    return state;
}

export default DialogsReducer;