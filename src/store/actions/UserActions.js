// import { Auth } from "../../server communication/BaseUrl";
// import Base64 from "../../server communication/Base64";
import Snackbar from 'react-native-snackbar';
import { ValidationMessages } from '../../constents/ErrorMessages';
import { Validator } from '../../constents/Validation';
import { Auth } from '../../server communication/BaseUrl';
import { getRequest } from '../../server communication/request/get';
import { postRequest } from '../../server communication/request/post';
import { colorSet } from '../../styles/colors';
import store from '../index'
import { ADD_SAFES, CHANGE_SAFE_POSITION, CHANGE_USER_NAME, REMOVE_SAFES } from '../type';

export const addSafeName = (name) => {
    store.dispatch({
        type: CHANGE_USER_NAME,
        payload: name
    });
}

export const changeSafePosition = (position) => {
    store.dispatch({
        type: CHANGE_SAFE_POSITION,
        payload: position
    });
}

export const addSafe = (payload) => {
    store.dispatch({
        type: ADD_SAFES,
        payload
    });
}

export const removeSafe = (payload) => {
    store.dispatch({
        type: REMOVE_SAFES,
        payload
    });
}


export const validateUser = async ({ safe, username, password }) => {

    let error = false

    if (!Validator.stringValid(safe))
        error = ValidationMessages.SafeRequired;
    else if (!Validator.stringValid(username))
        error = ValidationMessages.UserRequired;
    else if (!Validator.stringValid(password))
        error = ValidationMessages.PassRequired;


    if (error == false) {
        const response = await postRequest({
            url: Auth.validate(String(safe).trim().toLocaleLowerCase()),
            body: {
                "j_username": username,
                "j_password": password
            }
        });

        if (!response) {
            error = ValidationMessages.SafeInvalid
        }
        else {
            const text = await response.text();
            const responseJson = JSON.parse(text.replace(")]}',", ''));
            if (responseJson?.status?.name == "ERR") {
                error = ValidationMessages.WrongUserAndPass;
            }
            else {
                return true
            }
        }
    }

    Snackbar.show({
        text: error,
        duration: 2000,
        backgroundColor: colorSet.error
    });
    return false
}

export const initMobile = async (safe, key) => {
    const response = await getRequest({
        url: Auth.initMobile(safe),
        header: {
            'Authorization': key
        }
    });
    const text = await response.text();
    const responseJson = JSON.parse(text.replace(")]}',", ''));
    console.log('responseJson',responseJson);
}

// export const list = async (safe, key) => {
//     const response = await getRequest({
//         url: Auth.initMobile(safe),
//         header: {
//             'Authorization': key
//         }
//     });
//     const text = await response.text();
//     const responseJson = JSON.parse(text.replace(")]}',", ''));
//     console.log(responseJson);
// }


