import React, { useEffect } from 'react'
import { View, Platform, UIManager, LayoutAnimation } from 'react-native';
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { BackButton, FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import { ButtonColors, RoundButton } from '../../util/Button';
import InfinityList from '../../util/SingleRangeScroller';
import { useState } from 'react';
import { changeSafePosition } from '../../store/actions/UserActions';
import { changeAppStatus } from '../../store/reducers/AppActivityReducer';


export default function safeExit({ navigation }) {

    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);

    const createLayoutAnimation = () => {
        LayoutAnimation.configureNext({
            duration: 300,
            create:
            {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY,
                // springDamping: 12
            },
            update:
            {
                type: LayoutAnimation.Types.easeInEaseOut,
            }
        });
    }

    const onChange = (pos) => {
        if (position == pos) {
            return
        }
        changeSafePosition(pos);
        createLayoutAnimation();
        setPosition(pos);

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
                        <RowButton title='Are you want to exit' />
                        <RoundButton text='Yes' onPress={() => changeAppStatus(2)} color={ButtonColors.green} />
                        <RoundButton text='No' onPress={() => navigation.navigate('SafeChange')} color={ButtonColors.red} />
                    </>
                )}
            />
            <FooterButtons navigation={navigation} home = 'safes'/>
        </Container>
    )
}

