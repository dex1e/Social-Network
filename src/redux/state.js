let rerenderEntireTree = () => {
    console.log("state changed")
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state