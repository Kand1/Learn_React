    let rerenderEntireTree = () => {
        console.log('change');
    }
let store = {
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
    profilePageFunc: {
        addPost: () => {
            let newPost = {
                message: store._state.profilePage.newPostText,
                likes: '0'
            };
            store._state.profilePage.postsData.push(newPost);
            store._state.profilePage.newPostText = '';
            rerenderEntireTree();
        },
        updatePostTextArea: (postMessage) => {
            store._state.profilePage.newPostText = postMessage;
            rerenderEntireTree();
        },
    },
    dialogsPageFunc: {
        changeId: (id) => {
            store._state.dialogsPage.newMessageId = id;
        },
        addMessage: () => {
            let newMess = {
                text: store._state.dialogsPage.newMessageText,
                sender: 'user'
            };
            store._state.dialogsPage.messagesData[store._state.dialogsPage.newMessageId].messages.push(newMess);
            store._state.dialogsPage.newMessageText = '';
            store._state.dialogsPage.newMessageId = '0';
            rerenderEntireTree();
        },
        updateMessageTextArea: (postMessage) => {
            store._state.dialogsPage.newMessageText = postMessage;
            rerenderEntireTree();
        }
    },
    rerenderEntireTree: () => {
        console.log('change');
    },
    subscribe: (observer) => {
        rerenderEntireTree = observer;
    }
}
    export default store;