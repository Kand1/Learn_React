import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";


let store = {
    getState() {
        return store._state;
    },
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            newPostText: '',
            postsData: [
                {message: 'thats ggg', likes: '8'},
                {message: 'thats was wp', likes: '4'},
                {message: 'thats was greeeeeeasLLLLL LLLL wp', likes: '844'},
                {message: 'wp brat', likes: '-1'},
                {message: 'lol < -1', likes: '-2'}
            ]
        }
    },
    _callSubscriber() {
        console.log('change');
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();


    }
}





export default store;