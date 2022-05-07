import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Danil' },
                { id: 2, name: 'Diana' },
                { id: 3, name: 'Evgeny' },
                { id: 4, name: 'Egor' },
                { id: 5, name: 'Yura' },
                { id: 6, name: 'Boris' }
            ],
            messagesData: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'LOL' },
            ],
            newMessageBody: ''
        },
        profilePage: {
            postsData: [
                { id: 1, post: 'You are cool', likesCount: 100 },
                { id: 2, post: 'You are too', likesCount: -20 }
            ],
            newPostText: 'dex1e'
        },
        sidebar: {
            friendsData: [
                { id: 1, friend: 'Andrey' },
                { id: 2, friend: 'Kolya' },
                { id: 3, friend: 'Maksim' }
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}


export default store