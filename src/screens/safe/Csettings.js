import React from 'react'
import { View, PermissionsAndroid, Text } from 'react-native';
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import InfinityList from '../../util/7ElementScroller';


export default function Csettings({ navigation }) {

  const onPressItem = (screen) => {
    console.log('screen.screen',screen.screen)
    {screen.screen===undefined?null:screen && navigation.navigate(screen.screen, { user: screen })}
}

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        alert("You can use the camera")
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };


  return (
    <Container>

      <InfinityList
        list={List}
        item_height={70}
        numberOfCopy={5}
        renderItem={({ item, index }) => (
          <>
            <RowButton key={item.title} title={item.title} onPress={() => onPressItem(item)} />
          </>
        )}
      />
      <FooterButtons navigation={navigation} home = 'safes'/>
    </Container>
  )
}

const List = [
  {
    title: 'Phone',
    id: 'Phone',
  },
  {
    title: 'cSAFE Logo',
    id: 'cSAFE Logo',
  },
  {
    title: 'Permissions',
    id: 'Permissions',
    screen:'permissions'
  },
  {
    title: 'Notifications',
    id: 'Notifications',
    screen:'notification'
    
  },
  {
    title: 'SAFE Position',
    id: 'SAFE Position',
    screen:'safe_position'
  },
  {
    title: 'Date/Time Format',
    id: 'Date/Time Format',
    screen:'date_time_format'
  },
  {
    title: 'Email',
    id: 'Email',
  },
  {
    title: 'Date of Birth',
    id: 'Date of Birth',
  },
  {
    title: 'BoB ID',
    id: 'BoB ID',
  },
  {
    title: 'BoB Type',
    id: 'BoB Type',
  },

]

