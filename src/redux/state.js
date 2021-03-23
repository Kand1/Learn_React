
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
    /*
    profilePageFunc: {

        addPost() {
            let newPost = {
                message: store._state.profilePage.newPostText,
                likes: '0'
            };
            store._state.profilePage.postsData.push(newPost);
            store._state.profilePage.newPostText = '';
            store._callSubscriber();
        },
        updatePostTextArea(postMessage) {
            store._state.profilePage.newPostText = postMessage;
            store._callSubscriber();
        },
    },
    dialogsPageFunc: {
        changeId(id) {
            store._state.dialogsPage.newMessageId = id;
        },
        addMessage() {
            let newMess = {
                text: store._state.dialogsPage.newMessageText,
                sender: 'user'
            };
            store._state.dialogsPage.messagesData[store._state.dialogsPage.newMessageId].messages.push(newMess);
            store._state.dialogsPage.newMessageText = '';
            store._state.dialogsPage.newMessageId = '0';
            store._callSubscriber();
        },
        updateMessageTextArea(postMessage) {
            store._state.dialogsPage.newMessageText = postMessage;
            store._callSubscriber();
        }
    },
    */
    _callSubscriber() {
        console.log('change');
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                message: this._state.profilePage.newPostText,
                likes: '0'
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.postMessage;
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.postMessage;
            this._callSubscriber();
        } else if (action.type === "ADD-MESSAGE") {
            let newMess = {
                text: this._state.dialogsPage.newMessageText,
                sender: 'user'
            };
            this._state.dialogsPage.messagesData[this._state.dialogsPage.newMessageId].messages.push(newMess);
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.newMessageId = '0';
            this._callSubscriber();
        } else if (action.type === "CHANGE-ID") {
            this._state.dialogsPage.newMessageId = action.id;
        }
    }
}
    export default store;