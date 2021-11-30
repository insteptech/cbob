import ChatInstance from '../index';
import SECRETS from '../keys';

export const createUser = async ({ uid, name }) => {
    try {
        const response = await ChatInstance.createUser({ uid, name }, SECRETS.Auth_Key);
        return response;

    }
    catch (error) {
        console.log('Create User Error -->', error.message);
        return {
            error: true,
            message: error.message
        }
    }
}


export const loginUserByUID = async (uid) => {
    try {
        const response = await ChatInstance.login(uid, SECRETS.Auth_Key);
        console.log('loginUserByUID',response);
        return response;
    }
    catch (error) {
        console.log('error -->', error.message);
        return {
            error: true,
            message: error.message
        }
    }
}


export const getUserByUID = async (uid) => {
    try {
        const response = await ChatInstance.getUser({ uid }, SECRETS.Auth_Key);
        // console.log(response);
        return response;
    }
    catch (error) {
        // console.log('error -->', error.message);
        return {
            error: true,
            message: error.message
        }
    }
}

export const startUserSession = async ({ uid, name }) => {
    const response = await getUserByUID(uid);
    if (response.error) {
        const user = await createUser({ uid, name });
        // loginUserByUID(uid);
        console.log('User is ---', user);
    }
    const res = await loginUserByUID(uid);
    console.log('Login Response 0000', res)
}

export const sendTextMessage = ({ receiverUID, message }) => {
    var receiverID = receiverUID;
    var messageText = message;
    var receiverType = ChatInstance.RECEIVER_TYPE.USER;
    var textMessage = new ChatInstance.TextMessage(
        receiverID,
        messageText,
        receiverType
    );

    ChatInstance.sendMessage(textMessage).then(
        message => {
            console.log("Message sent successfully:", message);
        },
        error => {
            console.log("Message sending failed with error:", error);
        }
    );
}