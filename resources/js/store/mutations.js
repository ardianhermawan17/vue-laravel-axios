let mutations = {
    CREATE_POST(state, post) {
        state.posts.unshift(post)
        let stateArr = Object.keys(state).map((key) => {
            return [Number(state), state[key]]
        })
        console.dir('create-post ' + ' state :' + state + ' post :' + post)
    },
    FETCH_POSTS(state, posts) {
        console.dir(state)
        console.dir(posts)
        return state.posts = posts
    },
    DELETE_POST(state, post) {
        let index = state.posts.findIndex(item => item.id === post.id)
        state.posts.splice(index, 1)
        console.dir('delete-post ' +  ' state :' + state + ' post :' + post)
    }

}
export default mutations
