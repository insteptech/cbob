import React from 'react'
import { BackHandler, Image } from 'react-native';
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import InfinityList from '../../util/7ElementScroller';



export default function Home({ navigation }) {

    const onPressItem = (screen) => {
        // ScreenConst.screenType = screen.key
        // screen.screen && navigation.navigate(screen.screen)
    }


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
            <FooterButtons
                onPressBack={BackHandler.exitApp}
                icon={(
                    <Image source={require('../../assets/images/c.png')} style={{ width: 25, height: 25, }} />
                )} />
        </Container>
    )
}


const List = [
    // {
    //     title: 'Feedback this App',
    //     screen: undefined
    // },
    // {
    //     title: 'Privacy Policy',
    //     screen: ''
    // },
    // {
    //     title: 'Terms & Condition',
    //     screen: 'permissions'
    // },
    // {
    //     title: 'About Company',
    //     screen: 'notification',
    // },
    {
        title: 'Lorem ipsum ',
        screen: undefined
    },
    {
        title: 'Lorem ipsum ',
        screen: ''
    },
    {
        title: 'Lorem ipsum ',
        screen: 'permissions'
    },
    {
        title: 'Lorem ipsum ',
        screen: 'notification',
    },
]