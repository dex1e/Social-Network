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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}


export default store