
import React, { useEffect, useState } from 'react';
import { Text, FlatList, ActivityIndicator, TextInput, Button, Image,TouchableHighlight   } from 'react-native';
import Video from 'react-native-video';
import Container from '../../util/Container'
import { FooterButtons } from '../../util/FooterButtons';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colorsPrimaryView, LoginCard } from '../auth/Login';
import { colorSet } from '../../styles/colors';
import { SCREEN_SIZE } from '../../styles';
import InfinityList from '../../util/InfinityList';
import ScreenConst, { screenTypes } from '../../constents/screenConst'

import { CometChat } from "@cometchat-pro/react-native-chat"

import SECRETS from '../../../CometChat/keys'
import InfoView from '../../util/InfoView';
import SendMessageButton from '../../util/SendMessageButton';
import { TokenContext } from '../../constents/context';
import PhotosVideo from '../../util/AassetsCards/photos';
import Link from '../../util/AassetsCards/Link';

import SoundPlayer from 'react-native-sound-player';

import { WebView } from 'react-native-webview';

import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import Hyperlink from 'react-native-hyperlink';

const MessageCard = ({ item,receiverid,uid }) => {
    // console.log('item.sender.uid',item.sender.uid)
   // console.log('receiveridt',receiverid);
 //console.log('uid',uid);
  
	if(item.data.type == 'file' && (item.data.url.toString().endsWith("jpg") || item.data.url.toString().endsWith("jpeg") || item.data.url.toString().endsWith("png")))
	{
		//console.log(item.data.url);
		//SoundPlayer.loadUrl(item.data.url);
	} 
	
    return (
        <View>
            {item.sender.uid.toLowerCase() === receiverid.toLowerCase() ? <LinearGradient
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
                    fontSize: 10,
                    opacity: .7,
                    color: colorSet.whiteblue,
                    fontWeight: 'bold',
                  

                }}>{item.sender.uid.toLowerCase() === receiverid.toLowerCase() ? item.sender.name : null}</Text>
				
				{item.data.type == 'file' && (item.data.url.toString().endsWith("jpg") || item.data.url.toString().endsWith("jpeg") || item.data.url.toString().endsWith("png")) ? <TouchableHighlight  onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }}><Image style={{width: '100%', height: 150}} source={{ uri:item.data.url  }}  /></TouchableHighlight> : null }
				
				
				{item.data.type == 'file' && (item.data.url.toString().endsWith("mp4")) ?  <TouchableHighlight onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }} ><Image style={{width: 100, height: 100}} source={require('../../assets/images/video.png')}  /></TouchableHighlight>: null }
						
			
				{item.data.type == 'file' && (item.data.url.toString().endsWith("wav")) ? <TouchableHighlight  onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }} ><Image style={{width: 100, height: 100}} source={require('../../assets/images/audio.png')}   /></TouchableHighlight> : null } 
						
				
				{item.data.type == 'file' && (!item.data.url.toString().endsWith("mp4") && !item.data.url.toString().endsWith("jpg") && !item.data.url.toString().endsWith("jpeg") && !item.data.url.toString().endsWith("png") && !item.data.url.toString().endsWith("wav")) ? <TouchableHighlight   onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }} ><Image style={{width: 100, height: 100}} source={require('../../assets/images/file.png')}   /></TouchableHighlight>: null }
						
						
				
				
				
				{typeof item.text  != 'undefined'?
               <Hyperlink linkDefault={true}><Text style={{
                    fontSize: 14,
                   

                    opacity: .7,
                    color: colorSet.white,
                }}>{item.sender.uid.toLowerCase() === receiverid.toLowerCase() && typeof item.text  != 'undefined' ? item.text : null}</Text></Hyperlink>:null}
            </LinearGradient> : null}
            {item.sender.uid.toLowerCase() === uid.toLowerCase() ? <LinearGradient
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
                    fontSize: 10,
                    opacity: .7,
                    color: colorSet.whiteblue,
                    fontWeight: 'bold',
                    textAlign: 'right',

                }}>{item.sender.uid.toLowerCase() === uid.toLowerCase() ? item.sender.name : null}</Text>
				
				{item.data.type == 'file' && (item.data.url.toString().endsWith("jpg") || item.data.url.toString().endsWith("jpeg") || item.data.url.toString().endsWith("png")) ? <TouchableHighlight onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }}><Image style={{width: '100%', height: 150}} source={{ uri:item.data.url  }} /></TouchableHighlight> : null }
							
				
				
				{item.data.type == 'file' && (item.data.url.toString().endsWith("mp4")) ? <TouchableHighlight onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }} ><Image style={{width: 100, height: 100}} source={require('../../assets/images/video.png')} style={{marginLeft:'auto'}}  /></TouchableHighlight> : null }
						
				{item.data.type == 'file' && (item.data.url.toString().endsWith("wav")) ? <TouchableHighlight onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }} ><Image style={{width: 100, height: 100}} source={require('../../assets/images/audio.png')}  style={{marginLeft:'auto'}} /></TouchableHighlight>: null } 
				
				
				{item.data.type == 'file' && (!item.data.url.toString().endsWith("mp4") && !item.data.url.toString().endsWith("jpg") && !item.data.url.toString().endsWith("jpeg") && !item.data.url.toString().endsWith("png") && !item.data.url.toString().endsWith("wav")) ? <TouchableHighlight onPress={() => { var ext =  item.data.url.split('.').pop();
						const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.`+ext;
						const options = {
							  fromUrl: item.data.url,
							  toFile: localFile
							};
							RNFS.downloadFile(options).promise
							.then(() => FileViewer.open(localFile))
							.then(() => {
								// success
							})
							.catch(error => {
								// error
							}) }} ><Image style={{width: 100, height: 100}} source={require('../../assets/images/file.png')}  style={{marginLeft:'auto'}} /></TouchableHighlight>: null }
				
				
				
				{typeof item.text  != 'undefined'?
                 <Hyperlink linkDefault={true}><Text style={{
                    fontSize: 14,
                    color: colorSet.white,
                    // fontWeight: 'bold'
					 textAlign: 'right',
                }}>{item.sender.uid.toLowerCase() === uid.toLowerCase() ? item.text : null}</Text></Hyperlink> : null} 
				
				
				


            </LinearGradient> : null}
        </View>

    )
}









export default function MixedChat({ navigation, route }) {

    const [id, setId] = useState('')

    const contactDetail = route.params
    // console.log('contactDetailSingleChat', contactDetail.name)
    // console.log('SECRETS', SECRETS)

    let auth = React.useContext(TokenContext);
    // console.log('auth.token.bober', auth.token.bober)
    const [chat, setChat] = useState([]);
    // console.log('chat', chat)
    const inputRef = React.createRef(null);
    const text = React.createRef(null);
	const [refreshPage, setRefreshPage] = useState("");
	const [recieverid,setrecieverid] = useState("");
    const [AvoidThreadedMessagesinUserGroupConversationsMsg, setAvoidThreadedMessagesinUserGroupConversationsMsg] = useState([])
    //console.log('AvoidThreadedMessagesinUserGroupConversationsMsg', AvoidThreadedMessagesinUserGroupConversationsMsg)
    const [loaded, setLoaded] = useState(false)


    const login = () => {

        var UID = auth.token.uid;
        var authKey = SECRETS.Auth_Key;
		//alert(JSON.stringify(auth));
        CometChat.login(UID, authKey).then(
            user => {
                console.log("Login Successful:", { user });
                //alert(user.uid)
            },
            error => {
                console.log("Login failed with exception:", { error });
                alert(error.message)

            }
        );
    }
    const AvoidThreadedMessagesinUserGroupConversations = async () => {

        let isMounted = true;
		setrecieverid(contactDetail.name.replace(/[^0-9a-z]/gi, ''));
        let messagesRequest = new CometChat.MessagesRequestBuilder()
            .setLimit(10)
            .setUID(contactDetail.name.replace(/[^0-9a-z]/gi, ''))
            .hideReplies(false)
            .build();

        await messagesRequest.fetchPrevious().then(
            messages => {
               // console.log("Messages for thread fetched successfully", messages);
                if (isMounted) setAvoidThreadedMessagesinUserGroupConversationsMsg(messages);
                setLoaded(true)
            },
            error => {
                console.log("Message fetching failed with error:", error);
				if(error.code == "ERR_UID_NOT_FOUND")
				{
					var user = new CometChat.User(contactDetail.name.replace(/[^0-9a-z]/gi, ''));
						var authKey = SECRETS.Auth_Key;
						user.setName(contactDetail.name.replace(/[^0-9a-z]/gi, ''));
					
						CometChat.createUser(user, authKey).then(
						  user => {
							console.log("user created", user);
							 setRefreshPage("refresh");
							 setLoaded(true)
						  }, error => {
							console.log("createUsererror", error);
						  }
						)
				}
				
            }
        );
        return () => { isMounted = false };
    }

    useEffect(() => {
        login()

    }, [])
    useEffect(() => {
        AvoidThreadedMessagesinUserGroupConversations()

    }, [AvoidThreadedMessagesinUserGroupConversationsMsg])








    const ProgressWithcBob = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ? <FlatList
                    data={AvoidThreadedMessagesinUserGroupConversationsMsg}
                    renderItem={renderItem}
                    inverted
                    initialNumToRender={10}
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
    const ProgressWithcBobGroup = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ? <FlatList
                    data={AvoidThreadedMessagesinUserGroupConversationsMsg}
                    renderItem={renderItem}
                    inverted
                    initialNumToRender={10}
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }

       const ProgressWithcACTIONGroup = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ? <FlatList
                    data={AvoidThreadedMessagesinUserGroupConversationsMsg}
                    renderItem={renderItem}
                    inverted
                    initialNumToRender={10}
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
    const ProgressWithctext = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ? <FlatList
                    data={AvoidThreadedMessagesinUserGroupConversationsMsg}
                    renderItem={renderItem}
                    inverted
                    initialNumToRender={10}
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }

    const ProgressWithcPhoto= () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ?           
                <FlatList
                data={['Photo 1saas', 'Photo 2', 'Photo 3', 'Photo 4', 'Photo 5']}
                item_height={275}
                inverted
                initialNumToRender={10}

                renderItem={({ item, index }) => (
                    <PhotosVideo text={item}   />
                )}
            />
             :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
    const ProgressWithcDoc= () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ?           
                <FlatList
                data={['Doc 1saas', 'Doc 2', 'Doc 3', 'Doc 4', 'Doc 5']}
                item_height={275}
                inverted
                initialNumToRender={10}

                renderItem={({ item, index }) => (
                    <PhotosVideo text={item}   />
                )}
            />
             :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
    const ProgressWithcVideo = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ?  <FlatList
                data={['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5']}
                item_height={50}
                inverted
                initialNumToRender={10}

                renderItem={({ item, index }) => (
                    <PhotosVideo text={item}   />
                )}
            /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
    const ProgressWithcAudio = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ? <FlatList
                data={['good.wa', 'wrong.wa', 'background.ogg', 'Sound 4']}
                item_height={275}
                inverted
                initialNumToRender={10}

                renderItem={({ item, index }) => (
                    <PhotosVideo text={item}   />
                )}
            /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
    const ProgressWithcLink = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ? <FlatList
                data={['Link.pdf', 'Link.pdf', 'Link.pdf', 'Link.pdf', 'Link.pdf']}
                item_height={275}
                inverted
                initialNumToRender={10}

                renderItem={({ item, index }) => (
                    <Link text={item}   />
                )}
            /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
    const ProgressWithcExternalSources = () => {
        return (
            <View style={{ flex: 1 }}>
                {loaded ? <FlatList
                    data={AvoidThreadedMessagesinUserGroupConversationsMsg}
                    renderItem={renderItem}
                    inverted
                    initialNumToRender={10}
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                /> :
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size='large' color='#fff' />
                    </View>
                }
            </View>
        )
    }
 


    const renderItem = ({ item }) => {
        return <MessageCard item={item}  receiverid={contactDetail.name.replace(/[^0-9a-z]/gi, '')} uid={auth.token.uid} />
    }
    return (
        <Container>
            <View style={{ flex: 1 }}>
                <View style={{
                    //    position: 'absolute', zIndex: 1, left: 0, right: 0, 
                }}>
                    <InfoView contactDetail={contactDetail} boldTitle='Lase online at: ' />

                </View>

                 { ScreenConst.screenType==='Photos'?ProgressWithcPhoto()
                 :ScreenConst.screenType==='doc'?ProgressWithcDoc()
                 :ScreenConst.screenType==='Links'?ProgressWithcLink()
                 :ScreenConst.screenType==='Videos'?ProgressWithcVideo()
                 :ScreenConst.screenType==='Audio'?ProgressWithcAudio()
                 :ScreenConst.screenType==='cboBs'?ProgressWithcBob()
                 :ScreenConst.screenType==='cChats'?ProgressWithcACTIONGroup()
                 :ScreenConst.screenType==='cTexts'?ProgressWithctext()
                 :ScreenConst.screenType==='cBoBGroups'?ProgressWithcBobGroup()
                 :null  }
                {/* {ProgressWithcPhoto()}
                {ProgressWithcVideo()}
                {ProgressWithcAudio()}
                {ProgressWithcLink()}
                {ProgressWithcACTIONGroup()}
                {ProgressWithcBob()}
                {ProgressWithcBobGroup()}
                {ProgressWithctext()} 
                {ProgressWithcExternalSources()}*/}
                





                <FooterButtons navigation={navigation} />
            </View>

        </Container>
    )
}

