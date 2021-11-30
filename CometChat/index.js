import { Alert } from 'react-native';
import SECRETS from './keys';
import { CometChat } from '@cometchat-pro/react-native-chat';

const appID = SECRETS.APP_ID;
const region = SECRETS.Region;
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

export const initChatApp = async () => {
    try {

        const response = await CometChat.init(appID, appSetting);
        console.log('CometChat Initiated...🤴🏻🤴🏻🤴🏻',response);
    }
    catch (error) {
        Alert.alert('Error', error.message);
        console.log('Chat App Error --->', error.message)
    }
}

export default CometChat;