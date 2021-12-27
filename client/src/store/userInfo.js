import photo from './../icons/photo.jpg'

const defaultState = {
    name: 'Адиль',
    surname: 'Айжанов',
    photo: photo,
}

export const userInfo = (state=defaultState, action) => {
    switch(action.type){
        case'editInfo':
            return {name: action.payload.name, surname: action.payload.surname, photo: photo}

        default:
            return state
    }
}