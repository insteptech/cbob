import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Text, View , PermissionsAndroid } from "react-native"
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import InfiniteScroll from '../../util/InfiniteScroll';
import ScreenConst, { screenTypes } from '../../constents/screenConst';
import { FooterButtons } from '../../util/FooterButtons';
import InfinityList from '../../util/7ElementScroller';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AudioRecord from 'react-native-audio-record';
import Modal from "react-native-modal";
import { CometChat } from "@cometchat-pro/react-native-chat";
import DocumentPicker from 'react-native-document-picker'
import SECRETS from '../../../CometChat/keys';
import { TokenContext } from '../../constents/context';
export default function ActionType({ navigation,route }) {

const contactDetail = route.params.contactDetail
const itemName = route.params.itemName.title
console.log('contactDetail',contactDetail)
console.log('itemName',itemName)
 let auth = React.useContext(TokenContext);
const [image, setImage] = useState(null)
const [isModalVisible, setIsModalVisible] = useState(false);
const [mediaMessages, setMediaMessages] = useState(null)
const options = {
    sampleRate: 16000,  // default 44100
    channels: 1,        // 1 or 2, default 1
    bitsPerSample: 16,  // 8 or 16, default 16
    audioSource: 6,     // android only (see below)
    wavFile: 'test.wav' // default 'audio.wav'
  };
  //AudioRecord.stop();
const stopAudio = async() => { //AudioRecord.stop() // or to get the wav file path 
				audioFile = await AudioRecord.stop();
				console.log('audioFile',audioFile)
				
				
				var file = {
                        name: Platform.OS === "android" ? 'audio01.wav': '',
                        type: Platform.OS === "android" ? 'audio/wav' : '',
                        uri: Platform.OS === "android" ? 'file:///'+audioFile: audioFile,
                      }
				
				setMediaMessages(file)
					 //const success = await sendMessage(file);
					 const success =  await sendVideoMessage(file);
                 //screen && navigation.navigate(screen.screen,contactDetail)
					  setIsModalVisible(() => !isModalVisible)
				AudioRecord.on('data', data => {
				  // base64-encoded audio data chunks
				  console.log('data',data)
				});
				navigation.navigate('MixedChat',contactDetail);
				
				
				
				}

const sendVideoMessage = async(file) => {
		
			console.log("Media message sending failed with error", file);

			var receiverID = contactDetail.name.replace(/[^0-9a-z]/gi, '');
			var messageType = CometChat.MESSAGE_TYPE.FILE;
			var receiverType = CometChat.RECEIVER_TYPE.USER;
			
			console.log(receiverID+" -- "+file+" -- "+messageType+" -- "+receiverType);

			var mediaMessage = new CometChat.MediaMessage(
				receiverID,
				file,
				messageType,
				receiverType
			);

			CometChat.sendMediaMessage(mediaMessage).then(
				message => {
				// Message sent successfully.
				console.log("Media message sent successfully", message);
				return true;
				},
				error => {
				console.log("Media message sending failed with error", error);
				// Handle exception.
				return false;
				}
			);
       
 }

 
 const sendMessage = async(file) => {
		
			console.log("Media message sending failed with error", file);

			var receiverID = contactDetail.name.replace(/[^0-9a-z]/gi, '');
			if(file.toString().endsWith("mp4"))
			{
				var messageType = CometChat.MESSAGE_TYPE.VIDEO;
				console.log("Media message messageType ", messageType);
			}
			else
				var messageType = CometChat.MESSAGE_TYPE.FILE;
			var receiverType = CometChat.RECEIVER_TYPE.USER;

			var mediaMessage = new CometChat.MediaMessage(
				receiverID,
				file,
				messageType,
				receiverType
			);

			CometChat.sendMediaMessage(mediaMessage).then(
				message => {
				// Message sent successfully.
				console.log("Media message sent successfully", message);
				return true;
				},
				error => {
				console.log("Media message sending failed with error", error);
				// Handle exception.
				return false;
				}
			);
       
 }
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
	
console.log('route.params',route.params)
    const onPressItem = async(screen,contactDetail) => {
        console.log('screen',screen)
        //  ScreenConst.screenType = screen.key
        
        
        if(screen.title==='Progress with cPHOTO'){
			try {
           const granted = await PermissionsAndroid.request(
				  PermissionsAndroid.PERMISSIONS.CAMERA,
				  {
					title: "Quick c App need permission to use camera",
					message:
					  "Quick c App need permission to use camera " +
					  "so you can take awesome pictures.",
					buttonNeutral: "Ask Me Later",
					buttonNegative: "Cancel",
					buttonPositive: "OK"
				  }
				);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                launchCamera(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 3840,
                    maxWidth: 2160,
                    skipBackup: true,
                  }, async(response) => {
                    console.log('response', response)
            
            
                    if (response.didCancel) {
                      console.log('User cancelled photo picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                      console.log('User tapped custom button: ', response.customButton);
                    } else {
                      console.log('ImagePicker Response: ', response);
                      if (Platform.OS === 'ios' && response.fileName != undefined) {
                        var ext = response.fileName.split('.')[1].toLowerCase();
                        var type = this.getMimeType(ext);
                        var name = response.fileName;
                        
                      } else {
                        var type = response.type;
                        var name = 'Camera_001.jpeg';
                      }
                      var file = {
                        name: Platform.OS === "android" ? response.assets[0].fileName : name,
                        type: Platform.OS === "android" ? response.assets[0].type : type,
                        uri: Platform.OS === "android" ? response.assets[0].uri : response.uri.replace("file://", ""),
                      }
                      console.log('file: ', file);
                      setMediaMessages(file)
					 const success = await sendMessage(file);

                      screen && navigation.navigate(screen.screen,contactDetail)

                    }
                  })
				   } else {
					  console.log("Camera permission denied");
					}
				  } catch (err) {
					console.warn(err);
				  }
          
        } else if(screen.title==='Progress with cVIDEO'){
          try {
           const granted = await PermissionsAndroid.request(
				  PermissionsAndroid.PERMISSIONS.CAMERA,
				  {
					title: "Quick c App need permission to use camera",
					message:
					  "Quick c App need permission to use camera " +
					  "so you can take awesome pictures.",
					buttonNeutral: "Ask Me Later",
					buttonNegative: "Cancel",
					buttonPositive: "OK"
				  }
				);
				
				const granted2 = await PermissionsAndroid.request(
				  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
				  {
					title: "Quick c App need permission to use WRITE_EXTERNAL_STORAGE",
					message:
					  "Quick c App need permission to use WRITE_EXTERNAL_STORAGE ",
					buttonNeutral: "Ask Me Later",
					buttonNegative: "Cancel",
					buttonPositive: "OK"
				  }
				);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            launchCamera(
              {
                mediaType: 'video',
                includeBase64: false,
                maxHeight: 3840,
                maxWidth: 2160,
                skipBackup: true,
              }, async(response) => {
                console.log('response', response)
        
        
                if (response.didCancel) {
                  console.log('User cancelled photo picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log('User tapped custom button: ', response.customButton);
                } else {
                  console.log('ImagePicker Response: ', response);
                  if (Platform.OS === 'ios' && response.fileName != undefined) {
                    var ext = response.fileName.split('.')[1].toLowerCase();
                    var type = this.getMimeType(ext);
                    var name = response.fileName;
                    
                  } else {
                    var type = response.type;
                    var name = 'Camera_001.mp4';
                  }
                  var file = {
                    name: Platform.OS === "android" ? response.assets[0].fileName : name,
                    type: Platform.OS === "android" ? response.assets[0].type : type,
                    uri: Platform.OS === "android" ? response.assets[0].uri : response.uri.replace("file://", ""),
                  }
				  if(typeof file.type == 'undefined')
					  file.type = 'video/mp4';
                  console.log('file: ', file);
                  setMediaMessages(file);
				const success =  await sendVideoMessage(file);
                 screen && navigation.navigate(screen.screen,contactDetail)

                }
              })
			   } else {
					  console.log("Camera permission denied");
					}
				  } catch (err) {
					console.warn(err);
				  }
      
    }  else if(screen.title==='Progress with cAUDIO'){
          
		 try {
            const grants = await PermissionsAndroid.requestMultiple([
			  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
			  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
			]);

			console.log('write external stroage', grants);

			if (
			  grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
				PermissionsAndroid.RESULTS.GRANTED &&
			  grants['android.permission.READ_EXTERNAL_STORAGE'] ===
				PermissionsAndroid.RESULTS.GRANTED &&
			  grants['android.permission.RECORD_AUDIO'] ===
				PermissionsAndroid.RESULTS.GRANTED
			) {
				AudioRecord.init(options);
				AudioRecord.start();
				setIsModalVisible(() => !isModalVisible);
				
				
				
		} else {
					  console.log("Camera permission denied");
					}
				  } catch (err) {
					console.warn(err);
				  }
        
	} 
else if(screen.title==='External Sources'){
	
	
	
	try {
  const response = await DocumentPicker.pick({
    type: [DocumentPicker.types.allFiles],
  })
  console.log(
    response
  );
  
	var file = {
	name: response[0].name,
	type: response[0].type,
	uri: Platform.OS === "android" ? response[0].uri : response[0].uri.replace("file://", ""),
	}
	console.log('file: ', file);
	setMediaMessages(file)
	const success = await sendMessage(file);

	screen && navigation.navigate(screen.screen,contactDetail)
		  
		  
} catch (err) {
  if (DocumentPicker.isCancel(err)) {
	  
	  console.log('err: ', err);
    // User cancelled the picker, exit any dialogs or menus and move on
  } else {
    throw err
  }
}
	
	
}

    
        else{
            screen && navigation.navigate(screen.screen,contactDetail)

        }
    
    
    
    }
    
   useEffect(() => {
        login()

    }, [])
    return (
        <Container>
            <InfinityList
                list={
                 ScreenConst.screenType==='Photos'?cChatsVideosETCList
                :
                ScreenConst.screenType==='doc'?cChatsVideosETCList
                 :
                ScreenConst.screenType==='Links'?cChatsVideosETCList
                 :
                 ScreenConst.screenType==='Videos'?cChatsVideosETCList
                 :
                ScreenConst.screenType==='Audio'?cChatsVideosETCList
                 :
                
                 
                ScreenConst.screenType==='cChats'?cChatsVideosETCList
                :
                ScreenConst.screenType==='cTexts'?cChatsVideosETCList
                 :
                itemName==='Progress with existing'?Progresswithexisting
                :itemName==='Start New'?StartNewList
                :
                cChatsVideosETCList}
                item_height={70}
                numberOfCopy={10}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton key={item.title} title={item.title} onPress={() => onPressItem(item,contactDetail)} />
                    </>
                )}
            />
            {/* <InfiniteScroll
                nextDuration={2000}
                renderItem={() => (
                    <>
                        {List.map(item => <RowButton key={item.title} title={item.title} onPress={() => onPressItem(item)} />)}
                    </>
                )}
            /> */}
			<Modal isVisible={isModalVisible}>
			<View style={{ flex: 1 }}>
			  <Text>Audio Is capturing!</Text>
			  <Button title="Stop Audio" onPress={stopAudio} />
			</View>
		  </Modal>
            <FooterButtons navigation={navigation} />
        </Container>
    )
}


const cChatsVideosETCList = [
   
    {
        title: 'Progress with cBoB',
        screen: 'Contacts',
        key: screenTypes.Videos
    },
    {
        title: 'Progress with cBoB Group',
        screen: 'Contacts',
        key: screenTypes.Videos
    },
    
   
    
]



 
const Progresswithexisting = [
   
    {
        title: 'Progress with Existing cLINK',
        screen: 'MixedChat',
        key: screenTypes.Links
    },
    {
        title: 'Existing External Sources',
        screen: 'MixedChat',
        key: screenTypes.Videos
    },
    {
        title: 'QUICKc Logo',
        screen: 'QUICKcLOGO',
        key: screenTypes.cboBs
    },
    // {
    //     title: 'Favourite 1 to x',
    //     screen: 'SingleChat',
    //     key: screenTypes.Links
    // },
    {
        title: 'Progress with cBoB ',
        screen: 'MixedChat',
        key: screenTypes.cboBs
    },
    {
        title: 'Progress with cBoB Group',
        screen: 'SingleChat',
        key: screenTypes.cBoBGroups
    },
    {
        title: 'Progress with cACTION Group',
        screen: 'MixedChat',
        key: screenTypes.cChats
    },
    {
        title: 'Progress with Existing cTEXT',
        screen: 'MixedChat',
        key: screenTypes.cTexts
    },
    // {
    //     title: 'Progress with cDOCUMENT',
    //     screen: '',
    //     key: screenTypes.Photos
    // },
    {
        title: 'Progress with Existing cPHOTO',
        screen: 'MixedChat',
        key: screenTypes.doc
    },
    {
        title: 'Progress with Existing cVIDEO',
        screen: 'MixedChat',
        key: screenTypes.Videos
    },
    {
        title: 'Progress with Existing cAUDIO',
        screen: 'MixedChat',
        key: screenTypes.Videos
    },
   
    
]

const StartNewList = [
   
    {
        title: 'Progress with cLINK',
        screen: 'SingleChat',
        key: screenTypes.Videos
    },
    {
        title: 'External Sources',
        screen: 'MixedChat',
        key: screenTypes.Videos
    },
    {
        title: 'QUICKc Logo',
        screen: 'QUICKcLOGO',
        key: screenTypes.Videos
    },
    // {
    //     title: 'Favourite 1 to x',
    //     screen: '',
    //     key: screenTypes.Links
    // },
    // {
    //     title: 'Progress with cBoB ',
    //     screen: '',
    //     key: screenTypes.Videos
    // },
      // {
    //     title: 'Progress with cBoB Group',
    //     screen: '',
    //     key: screenTypes.Videos
    // },
    {
        title: 'Progress with cACTION Group',
        screen: 'MixedChat',
        key: screenTypes.Audio
    },
    {
        title: 'Progress with cTEXT',
        screen: 'SingleChat',
    },
    // {
    //     title: 'Progress with cDOCUMENT',
    //     screen: '',
    //     key: screenTypes.Photos
    // },
    {
        title: 'Progress with cPHOTO',
        screen: 'MixedChat',
        key: screenTypes.doc
    },
    {
        title: 'Progress with cVIDEO',
        screen: 'MixedChat',
        key: screenTypes.Videos
    },
    {
        title: 'Progress with cAUDIO',
        screen: 'MixedChat',
        key: screenTypes.Videos
    },
   
    
]