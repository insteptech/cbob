import { CHANGE_USER_NAME, CHANGE_SAFE_POSITION, ADD_SAFES, REMOVE_SAFES } from '../type';

const initState = {
    safeName: 'Demo',
    position: 0,
    safes: []
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return { ...state, safeName: action.payload }
        case CHANGE_SAFE_POSITION:
            return { ...state, position: action.payload }
        case ADD_SAFES:
            return { ...state, safes: [...state.safes, action.payload] }

        case REMOVE_SAFES:
            return { ...state, safes: action.payload }
    }
    return state
}

export default UserReducer;

