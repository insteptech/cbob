import React from 'react'
import { View } from 'react-native';
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import { ButtonColors, RoundButton } from '../../util/Button';
import InfinityList from '../../util/SingleRangeScroller';
import { changeAppStatus } from '../../store/reducers/AppActivityReducer';
import { useSelector } from 'react-redux';
import { removeSafe } from '../../store/actions/UserActions';
import Snackbar from 'react-native-snackbar';
import { colorSet } from '../../styles/colors';



export default function Home({ navigation }) {

    const user = useSelector((state) => state.UserReducer);
    const onSAfeEXit = () => {

        const removedSafe = user.safes.filter((safe) => safe.safe !== user.safeName);

        setTimeout(() => {
            Snackbar.show({
                text: 'Safe changed successfully',
                backgroundColor: colorSet.bgColor
            });
            removeSafe(removedSafe);
            changeAppStatus(1);
        }, 100);

    }

    return (
        <Container>
            <InfinityList
                list={[0]}
                item_height={330}
                numberOfCopy={20}
                inputRange={[,]}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton title='Are you suer?' />
                        <RoundButton text='Yes' onPress={onSAfeEXit} color={ButtonColors.green} />
                        <RoundButton text='No' onPress={navigation.goBack} color={ButtonColors.red} />
                    </>
                )}
            />
            <FooterButtons navigation={navigation} home = 'safes'/>
        </Container>
    )
}

