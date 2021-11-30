import React from 'react'
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import { ButtonColors, RoundButton } from '../../util/Button';
import InfinityList from '../../util/SingleRangeScroller';


export default function Home({ navigation }) {


    return (
        <Container>

            <InfinityList
                list={[0]}
                item_height={330}
                numberOfCopy={20}
                inputRange={[,]}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton title='Notifications' />
                        <RoundButton text='On' onPress={navigation.goBack} color={ButtonColors.green} />
                        <RoundButton text='Off' onPress={navigation.goBack} color={ButtonColors.red} />
                    </>
                )}
            />
            <FooterButtons navigation={navigation} home = 'quickc'/>
        </Container>
    )
}

