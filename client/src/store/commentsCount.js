const defaultState = 0

export const commentsCount = (state=defaultState, action) => {
    switch(action.type){
        case'addCount':
            return state + action.payload
        case'removeCount':
            return state - action.payload
        default:
            return state
    }
}