const defaultState = null

export const isComments = (state=defaultState, action) => {
    switch(action.type){
        case 'true':
            return true

        case 'false':
            return false

        default:
            return state
    }
}