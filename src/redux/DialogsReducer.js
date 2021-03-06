const ADD_MESSAGE = "dialogs/ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "dialogs/UPDATE-NEW-MESSAGE-TEXT";
const CHANGE_ID = "dialogs/CHANGE-ID";

export const addMessageActionCreate = (text) => ({type: ADD_MESSAGE, text});
export const changeIdActionCreate = (id2) => ({type: CHANGE_ID, id: id2});

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

    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    };
    stateCopy.messagesData = state.messagesData.map(m => {
        let mcopy = {
            ...m,
            messages: [...m.messages]
        };
        return mcopy})


    switch (action.type) {
        case ADD_MESSAGE:
            let newMess = {
                text: action.text,
                sender: 'user'
            };
            stateCopy.messagesData[stateCopy.newMessageId].messages.push(newMess);
            return stateCopy;
        case CHANGE_ID:
            stateCopy.newMessageId = action.id;
            return stateCopy;
        default:
            return state;
    }


    return state;
}

export default DialogsReducer;