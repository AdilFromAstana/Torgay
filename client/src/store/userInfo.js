import userAdil from './../icons/userAdil.jpg'

const defaultState = {
    name: 'Адиль',
    surname: 'Айжанов',
    photo: userAdil,
}

export const userInfo = (state=defaultState, action) => {
    switch(action.type){
        case'editInfo':
            return {name: action.payload.name, surname: action.payload.surname, photo: userAdil}

        default:
            return state
    }
}