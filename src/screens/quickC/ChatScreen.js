import React, { useEffect, useState } from 'react';
import { Keyboard, Text, TextInput, Image, TouchableNativeFeedback } from 'react-native'
import Container from '../../util/Container'
import { FooterButtons } from '../../util/FooterButtons';
import InfinityList from '../../util/SimpleList';
import LinearGradient from 'react-native-linear-gradient';
import { colorsPrimaryView, LoginCard } from '../auth/Login';
import { colorSet } from '../../styles/colors';
import { SCREEN_SIZE } from '../../styles';
import { ButtonColors, RoundButton } from '../../util/Button';

import CometChat from '../../../CometChat';
import { sendTextMessage } from '../../../CometChat/Users';
import { TokenContext } from '../../constents/context';


export default function RecycleBin({ navigation, route }) {

    let auth = React.useContext(TokenContext);
    console.log('auth.token.bober', auth.token.bober)
    const [chat, setChat] = useState([]);
    console.log('chat', chat)
    const inputRef = React.createRef(null);
    const text = React.createRef(null);







    useEffect(() => {
        if (route?.params?.user) {
            //old
            // CometChat.get(10, route?.params?.user.id).then(response => {
            //     console.log(response);
            // })
            //old
            let messagesRequest = new CometChat.MessagesRequestBuilder()
                .setLimit(30)
                .setUID(route?.params?.user.id)
                .hideReplies(true)
                .build();
            messagesRequest.fetchPrevious().then(
                messages => {
                    const prevChat = messages.map(item => ({
                        title: item.text,
                        bober: 'bober',
                        isRight: true
                    }));
                    setChat(prevChat);
                    console.log('prevChat', prevChat)
                },
                error => {
                    console.log("Message fetching failed with error:", error);
                }
            );
            console.log('messagesRequest', messagesRequest)








            //old 
            // CometChat.getConversation(route?.params?.user.id, 'user').then(
            //     conversation => {
            //         console.log('conversation', JSON.stringify(conversation));
            //     }, error => {
            //         console.log('error while fetching a conversation', error);
            //     }
            // );


            // let conversationRequest = new CometChat.ConversationsRequestBuilder()
            //     .setLimit(50)
            //     .build();

            // conversationRequest.fetchNext().then(
            //     conversationList => {
            //         console.log("Conversations list received:", conversationList);
            //     },
            //     error => {
            //         console.log("Conversations list fetching failed with error:", error);
            //     }
            // );

            // CometChat.getConversation(route.params.user.id, 'user').then(
            //     conversation => {
            //         console.log('conversation--->', conversation);
            //     }, error => {
            //         console.log('error while fetching a conversation', error);
            //     }
            // );

            // sendTextMessage({ receiverUID: route.params.user.id, message: '4356345654364567' });

            // CometChat.getPreviousMessagesById(10, 'A').then(response => {
            //     console.log(response);
            // }).catch(error => console.log(error))
            // console.log(route.params.user);
            // CometChat.getPreviousMessagesById(10, route.params.user.id).then(response => {
            //     console.log(response);
            // })
            //old

        }
    }, []);

    const onSendMessage = (message) => {

        //old
        // const newChat = {

        // }
        // if (text.current && String(text.current).trim().length > 0) {
        //old
        setChat([
            ...chat,
            {
                title: message,
                bober: auth.token.bober,
                isRight: true
            },
        ]);
        sendTextMessage({ receiverUID: route?.params?.user.id, message: String(text.current).trim() });
        
        //old
        // text.current = null;
        // Keyboard.dismiss();
        // inputRef.current?.clear();
        // }
        //old
    }


    return (
        <Container>

            <InfinityList
                list={chat}
                item_height={70}
                numberOfCopy={10}
                renderItem={({ item, index }) => (
                    <>
                        <MessageCard {...item} />
                    </>
                )}
            />
            <SendMessageButton onSendMessage={onSendMessage} />
            
            {/*
            
            //old
            <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0, }}>
                <LoginCard
                    heading={"Type New Message"}
                    onChangeText={(message) => text.current = message}
                    inputRef={(ref) => inputRef.current = ref}
                    icon={
                        <RoundButton
                            containerStyle={{
                                width: 67,
                                height: 45,
                                marginLeft: 5,
                                borderRadius: 10,
                                marginTop: 0,
                            }}
                            text={"Send"}
                            onPress={onSendMessage}
                            textStyle={{
                                fontSize: 15,
                                fontWeight: 'normal',
                            }}
                        />
                    }
                />
            </View> 
            //old
            */}
            <FooterButtons navigation={navigation} />
        </Container>
    )
}

const MessageCard = ({ title = 'Hello', isRight = true, bober }) => {
    console.log(bober)
    return (
        <LinearGradient
            colors={colorsPrimaryView}
            style={{
                width: SCREEN_SIZE.width / 1.1,
                alignSelf: 'center',
                borderRadius: 10,
                marginHorizontal: 10,
                padding: 10,
                marginTop: 20,
            }}>

            <Text style={{
                fontSize: 14,
                opacity: .7,
                color: colorSet.white,
                fontWeight: 'bold'
            }}>{bober}</Text>


            <Text style={{
                fontSize: 16,
                color: colorSet.white,
                // fontWeight: 'bold'
            }}>{title}</Text>

            <Text style={{
                fontSize: 12,
                textAlign: 'right',

                opacity: .7,
                color: colorSet.white,
            }}>{"16:42"}</Text>
        </LinearGradient>
    )
}


const SendMessageButton = ({ onSendMessage }) => {
    const [msg, setMsg] = useState('');

    function isValidMessage() {
        return msg.trim().length > 0 ? true : false
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
                        onSendMessage && onSendMessage(msg);
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
                        source={require('../../assets/images/arrow.png')}
                    />
                </LinearGradient>
            </TouchableNativeFeedback>

        </LinearGradient>
    )


}
