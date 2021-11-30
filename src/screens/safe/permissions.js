import React from 'react'
import { View ,PermissionsAndroid} from 'react-native';
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import { ButtonColors, RoundButton } from '../../util/Button';
import InfinityList from '../../util/SingleRangeScroller';


export default function Home({ navigation }) {

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
                list={[0, 1,3]}
                item_height={320}
                numberOfCopy={20}
                renderItem={({ item, index }) => (
                    <>
                        {item == 0 && (
                            <>
                                <RowButton title='Camera Permission' />
                                <RoundButton text='On' onPress={requestCameraPermission} color={ButtonColors.green} />
                                <RoundButton text='Off' onPress={navigation.goBack} color={ButtonColors.red} />
                            </>
                        )}

                        {item == 1 && (
                            <>
                                <RowButton title='Microphone Permission' />
                                <RoundButton text='On' onPress={navigation.goBack} color={ButtonColors.green} />
                                <RoundButton text='Off' onPress={navigation.goBack} color={ButtonColors.red} />
                            </>
                        )}
                           {item == 3 && (
                            <>
                                <RowButton title='Permission' />
                                <RoundButton text='On' onPress={requestCameraPermission} color={ButtonColors.green} />
                                <RoundButton text='Off' onPress={navigation.goBack} color={ButtonColors.red} />
                            </>
                        )}
                    </>
                )}
            />
            <FooterButtons navigation={navigation} home = 'safes'/>
        </Container>
    )
}

