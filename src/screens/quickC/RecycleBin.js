import React from 'react'
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import InfiniteScroll from '../../util/InfiniteScroll';
import ScreenConst, { screenTypes } from '../../constents/screenConst';
import { FooterButtons } from '../../util/FooterButtons';
import InfinityList from '../../util/7ElementScroller';



export default function RecycleBin({ navigation }) {


    const onPressItem = (screen) => {
        if(screen.screen==='QUICKcLOGO'){
            navigation.navigate(screen.screen)

        }
        else{
            alert('No Items Deleted')

        }
        // ScreenConst.screenType = screen.key
        // screen && navigation.navigate(screen.screen)
    }

    return (
        <Container>
            <InfinityList
                list={List}
                item_height={70}
                numberOfCopy={10}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton key={item.title} title={item.title} onPress={() => onPressItem(item)} />
                    </>
                )}
            />
            {/* <InfiniteScroll
                nextDuration={2000}
                renderItem={() => (
                    <>
                        {List.map(item => <RowButton key={item.title} title={item.title} onPress={() => onPressItem(item)} />)}
                    </>
                )}
            /> */}
            <FooterButtons navigation={navigation} />
        </Container>
    )
}


const List = [

    {
        title: 'cTexts',
        screen: 'AssetsList',
        key: screenTypes.Videos
    },
    {
        title: 'cDocuments',
        screen: 'AssetsList',
        key: screenTypes.Audio
    },
    {
        title: 'cPhotos',
        screen: '',
    },
    {
        title: 'cVideos',
        screen: 'AssetsList',
        key: screenTypes.Photos
    },
    {
        title: 'cAudios',
        screen: 'AssetsList',
        key: screenTypes.doc
    },
    {
        title: 'cLinks',
        screen: 'AssetsList',
        key: screenTypes.Photos
    },
    {
        title: 'QUICKc Logo',
        screen: 'QUICKcLOGO',
        key: screenTypes.doc
    },
    {
        title: 'cChats',
        screen: 'AssetsList',
        key: screenTypes.Links
    },
]