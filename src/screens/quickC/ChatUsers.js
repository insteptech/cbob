import React from 'react'
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons } from '../../util/FooterButtons';
import InfinityList from '../../util/7ElementScroller';


export default function Contacts({ navigation }) {

    const onPressItem = (screen) => {
        screen && navigation.navigate('ContactsDetail', { user: screen })
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
            <FooterButtons navigation={navigation} />
        </Container>
    )
}

const List = [
    {
        title: 'Captain America',
        id: 'superhero2',
    },
    {
        title: 'Cyclops',
        id: 'superhero5',
    },
    {
        title: 'Iron Man',
        id: 'superhero1',
    },
    {
        title: 'Bad boy',
        id: '12356',
    },
    {
        title: 'Gourav',
        id: 'user_1',
    },
    {
        title: 'Shive Bhati',
        id: 'gourav_bhati1111',
    },
]