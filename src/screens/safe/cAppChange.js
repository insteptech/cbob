import React from 'react'
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons, FooterButtonsSingle } from '../../util/FooterButtons';
import InfinityList from '../../util/7ElementScroller';
import { changeAppStatus } from '../../store/reducers/AppActivityReducer';
import { addSafeName } from '../../store/actions/UserActions'
import { useSelector } from 'react-redux';





export default function cAppChange({ navigation }) {

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
            else{
                null
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
        title: 'cWORKPLACE',
        safe: 'test',
        task :''
    },
    {
        title: 'QUICKc',
        safe: '',
        task:''
    },
    {
        title: 'LOOKc',
        safe: '',
        task:''

    },
   
]