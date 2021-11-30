import React from 'react'
import { View, Text, TouchableOpacity,  } from 'react-native'
import { RowButton } from '../../util/RowButton';
import Container from '../../util/Container'
import ScreenConst, { QuickCScreenTypes, screenTypes } from '../../constents/screenConst';

import { FooterButtons } from '../../util/FooterButtons';
import InfinityList from '../../util/InfinityList';
import InfoView from '../../util/InfoView';
import { CometChat } from "@cometchat-pro/react-native-chat"
// const InfoView = ({contactDetail,boldTitle,text}) => {

//     console.log('contactDetailsss',contactDetail)
//     return (
//         <LinearGradient
//             colors={colorsPrimaryView}
//             style={{ height: 80, borderRadius: 10, marginHorizontal: 15, padding: 10, marginTop: 20, alignItems: 'center' }}>
//             <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//                 color: colorSet.black,
//             }}>{contactDetail.name}</Text>

//             <Text style={{
//                 fontSize: 14,
//                 marginTop: 5,

//                 textAlign: 'center',
//                 color: colorSet.black,
//             }}>
//                 <Text style={{ fontWeight: 'bold', }}>
//                     {boldTitle}
//                 </Text>
//                 05-24-2011 11:37
//             </Text>
//         </LinearGradient>
//     )
// }


export default function ContactsDetail({ navigation, route }) {

    const contactDetail = route.params;
    // console.log('contactDetail', contactDetail)


    const onPressItem = (itemName, contactDetail) => {
        // console.log('item',item.title)
        // ScreenConst.screenType = screen.key
        // screen && 
        if (itemName.title === 'CALL') {
            alert('call')
			
			
			var receiverID = contactDetail.name.replace(/[^0-9a-z]/gi, '');
			var callType = CometChat.CALL_TYPE.VIDEO;
			var receiverType = CometChat.RECEIVER_TYPE.USER;

			var call = new CometChat.Call(receiverID, callType, receiverType);

			CometChat.initiateCall(call).then(
			  outGoingCall => {
				console.log("Call initiated successfully:", outGoingCall);
				// perform action on success. Like show your calling screen.
			  },
			  error => {
				console.log("Call initialization failed with exception:", error);
			  }
			);
        }
        else if(itemName.title === 'View Details'){
            alert('View Details')
        }
        else if(itemName.title === 'Set as Favourite'){
            alert('Set as Favourite')
        }
        else if(itemName.title === 'QUICKc Logo'){
            
            navigation.navigate('QUICKcLOGO', )

        }
        else if(itemName.title === 'READ'){
            
            alert('READ', )

        }
        else if(itemName.title === 'LISTEN'){
            
            alert('LISTEN', )

        }
        else if(itemName.title === 'FOLLOW'){
            
            alert('FOLLOW', )

        }
        else if(itemName.title === 'Save to Server'){
            
            alert('Save to Server', )

        }
        else{
            navigation.navigate('ActionType', { itemName: itemName, contactDetail, contactDetail })
        }
    }

    // console.log('ScreenConst.screenType',ScreenConst.screenType)


    return (
        <Container>
            {/* <View style={{ position: 'absolute', zIndex: 1, left: 0, right: 0, }}>
                <InfoView contactDetail={contactDetail.item} boldTitle= 'Lase online at: ' />

            </View> */}

            <InfinityList
                // list={ScreenConst.screenType==!screenTypes.cboBs?null:viacBobsList}
                list={ScreenConst.screenType == screenTypes.cboBs ? viacBobsList
                    : ScreenConst.screenType == screenTypes.doc ? viaDoucument
                        : ScreenConst.screenType == screenTypes.Photos ? viacPhotos
                            : ScreenConst.screenType == screenTypes.Videos ? viacVideos
                                : ScreenConst.screenType == screenTypes.Audio ? viacAudios
                                    : ScreenConst.screenType == screenTypes.Links ? viacLinks
                                        : ScreenConst.screenType == screenTypes.cChats ? viacChats
                                            : ScreenConst.screenType == screenTypes.cTexts ? viacTexts
                                                : ScreenConst.screenType == screenTypes.cBoBGroups ? viacBobsGroups
                                                    : null}

                item_height={70}
                // numberOfCopy={5}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton key={item.title} title={item.title} onPress={() => onPressItem(item, contactDetail.item)} />
                    </>
                )}
            />
            <FooterButtons navigation={navigation} />
        </Container>
    )
}


const viacBobsList = [
    // {
    //     title: 'Set as Favorite',
    //     screen: 'RecycleBin'
    // },
    {
        title: 'CALL',
        screen: ''
    },

    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },

]

const viacBobsGroups = [
    // {
    //     title: 'Set as Favorite',
    //     screen: 'RecycleBin'
    // },
    {
        title: 'CALL',
        screen: ''
    },

    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },

]

const viaDoucument = [
    // {
    //     title: 'Set as Favorite',
    //     screen: 'RecycleBin'
    // },




    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'READ',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },
]


const allList = [
    // {
    //     title: 'Set as Favorite',
    //     screen: 'RecycleBin'
    // },
    {
        title: 'CALL',
        screen: ''
    },
    {
        title: 'LISTEN',
        screen: ''
    },
    {
        title: 'FOLLOW',
        screen: ''
    },
    {
        title: 'READ',
        screen: ''
    },
    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },
]

const viacChats = [
    // {
    //     title: 'Set as Favorite',
    //     screen: 'RecycleBin'
    // },
    {
        title: 'CALL',
        screen: ''
    },
    {
        title: 'LISTEN',
        screen: ''
    },
    {
        title: 'FOLLOW',
        screen: ''
    },
    {
        title: 'READ',
        screen: ''
    },
    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },
]
const viacTexts = [


    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'READ',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },
]
const viacPhotos = [


    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },
]

const viacVideos = [


    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'VIEW',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },

]
const viacAudios = [


    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'LISTEN',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },

]

const viacLinks = [


    {
        title: 'QUICKc Logo',
        screen: ''
    },
    {
        title: 'Start New',
        screen: ''
    },
    {
        title: 'Progress with existing',
        screen: ''
    },
    {
        title: 'View Details',
        screen: ''
    },
    {
        title: 'Set as Favourite',
        screen: ''
    },
    {
        title: 'FOLLOW',
        screen: ''
    },
    {
        title: 'Save to Server',
        screen: ''
    },

]

