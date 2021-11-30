import React,{useState} from 'react'
import { View, Text,TextInput,TouchableNativeFeedback ,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorsPrimaryView } from '../screens/auth/Login'
import { colorSet } from '../styles/colors'
import { ButtonColors, RoundButton } from '../util/Button';
import { CometChat } from "@cometchat-pro/react-native-chat"

const SendMessageButton = ({receiverid, contact}) => {
    const [msg, setMsg] = useState('');
    // console.log('msg', msg)
	console.log(receiverid);
    function isValidMessage() {
        return msg.trim().length > 0 ? true : false
    }

    const sendMessage = () => {
		
		console.log(receiverid);
        var receiverID = receiverid;
        var messageText = msg;
        var receiverType = CometChat.RECEIVER_TYPE.USER;

        var textMessage = new CometChat.TextMessage(receiverID, messageText, receiverType);

        CometChat.sendMessage(textMessage).then(
            message => {
                console.log("Message sents successfully:", message);
				
				contact();
				
				//contact
                // Do something with message
            },
            error => {
                console.log("Message sending failed with error:", error);
                // Handle any error
            }
        );
    }


    return (
        <LinearGradient colors={colorsPrimaryView} style={{ minHeight: 65, maxHeight: 100, flexDirection: 'row', backgroundColor: colorSet.primary, marginHorizontal: 10, borderRadius: 10, paddingHorizontal: 15, paddingVertical: 10 }}>
            <TextInput
                placeholder={"Type a message"}
                placeholderTextColor={'rgba(0,0,0,.4)'}
                value={msg}
                autoCorrect={false}
                keyboardAppearance='dark'
                multiline
                enablesReturnKeyAutomatically={true}
                onChangeText={(m) => setMsg(m)}
                style={{
                    flex: 1,
                    backgroundColor: colorSet.white,
                    color: colorSet.black,
                    borderRadius: 5,
                }} />
            <TouchableNativeFeedback
                onPress={() => {
                    if (isValidMessage()) {
                        sendMessage && sendMessage(msg);
                        setMsg('');
                    }
                }}
            >
                <LinearGradient colors={ButtonColors.green} style={{ width: 45, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 4, }}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            transform: [{ scaleX: -1 }]
                        }}
                        resizeMode='contain'
                        source={require('../assets/images/arrow.png')}
                    />
                </LinearGradient>
            </TouchableNativeFeedback>

        </LinearGradient>
    )


}

export default SendMessageButton
