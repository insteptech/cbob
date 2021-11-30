import React from 'react'
import { View } from 'react-native';
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import InfiniteScroll from '../../util/InfiniteScroll';
import { FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import { ButtonColors, RoundButton } from '../../util/Button';
import InfinityList from '../../util/7ElementScroller';
import { changeAppStatus } from '../../store/reducers/AppActivityReducer';
import { addSafeName } from '../../store/actions/UserActions'
import { useSelector } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import { colorSet } from '../../styles/colors';





export default function Home({ navigation }) {

    const safes = useSelector((state) => state.UserReducer.safes);
    console.log(safes);

    const onPressItem = (screen) => {
        addSafeName(screen.safe);
        setTimeout(() => {
            if(screen.task==='test')
            {
                changeAppStatus(2)
            }
            else if(screen.task==='safeEnter'){
                changeAppStatus(1)
            }
            else if(screen.task==='safeExit'){
                navigation.navigate('safeExit')
            }
            
            // Snackbar.show({
            //     text: 'Safe change successfully to: ' + screen.safe,
            //     backgroundColor: colorSet.bgColor
            // })
        }, 100);
    }


    return (
        <Container>
            <InfinityList
                list={List}
                item_height={70}
                // numberOfCopy={20}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton key={item.safe} title={item.title} onPress={() => onPressItem(item)} />
                    </>
                )}
            />
            <FooterButtons navigation={navigation} />
        </Container>
    )
}


const List = [
    {
        title: 'test',
        safe: 'test',
        task :'test'
    },
    {
        title: 'SAFE Enter',
        safe: '',
        task:'safeEnter'
    },
    {
        title: 'SAFE Exit',
        safe: '',
        task:'safeExit'

    },
   
]