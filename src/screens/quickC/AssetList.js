import React, { Component, useEffect, useState } from 'react'
import { } from 'react'
import Container from '../../util/Container'
import ScreenConst, { screenTypes } from '../../constents/screenConst'
import PhotosVideo from '../../util/AassetsCards/photos';
import DocView from '../../util/AassetsCards/DocView';
import Link from '../../util/AassetsCards/Link';

import Audio from '../../util/AassetsCards/Audio';
import { FooterButtons } from '../../util/FooterButtons';
import InfinityList from '../../util/InfinityList';
import { View } from 'react-native';




const AssetsList = (props) => {
    const [showList, setShowList] = useState(true)
    const [assetType, setAssetType] = useState(undefined)

    useEffect(() => {
        
        setAssetType(ScreenConst.screenType)
        setShowList(true)
    }, [])



    const onSelectItem = () => {
        props.navigation.navigate('AssetInfo');
    }
    const onItemSelect = (item) => {
        console.log('item', item)
        props.navigation.navigate('ContactsDetail', { item: item });

    }

    const _audioView = () => {
        if (assetType !== screenTypes.Audio)
            return null

        return (
            <InfinityList
                list={['good.wa', 'wrong.wa', 'background.ogg', 'Sound 4']}
                item_height={150}
                numberOfCopy={7}
                renderItem={({ item, index }) => (
                    <Audio text={item} onCPress={onSelectItem} onAssetPress={onItemSelect}/>
                )}
            />
        )

    }

    const _videoView = () => {
        if (assetType !== screenTypes.Videos)
            return null


        return (
            <InfinityList
                list={['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5']}
                item_height={275}
                numberOfCopy={7}
                renderItem={({ item, index }) => (
                    <PhotosVideo text={item} onCPress={onSelectItem} onAssetPress={onItemSelect}/>
                )}
            />
        )

    }

    const _photoView = () => {
        if (assetType !== screenTypes.Photos)
            return null
        return (
            <InfinityList
                list={['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4', 'Photo 5']}
                item_height={275}
                numberOfCopy={7}
                renderItem={({ item, index }) => (
                    <PhotosVideo text={item} onCPress={onSelectItem} onAssetPress={onItemSelect} />
                )}
            />
        )
    }

    const _docView = () => {
        if (assetType !== screenTypes.doc)
            return null

        return (
            <InfinityList
                list={['CV.pdf', 'CV.pdf', 'CV.pdf', 'CV.pdf', 'CV.pdf']}
                item_height={145}
                numberOfCopy={7}
                renderItem={({ item, index }) => (
                    <DocView showIcon={true} text={item} onCPress={onSelectItem} onAssetPress={onItemSelect}/>
                )}
            />
        )
    }

    const _linkView = () => {
        if (assetType !== screenTypes.Links)
            return null

        return (
            <InfinityList
                list={['CV.pdf', 'CV.pdf', 'CV.pdf', 'CV.pdf', 'CV.pdf']}
                item_height={145}
                numberOfCopy={7}
                renderItem={({ item, index }) => (
                    <Link showIcon={true} text={item} onCPress={onSelectItem} onAssetPress={onItemSelect}/>
                )}
            />
        )

    }

    const _cChatsView = () => {
        if (assetType !== screenTypes.cChats)
            return null

        return (
            <InfinityList
                list={['all Chats', 'all Chats', 'all Chats', 'all Chats', 'all Chats']}
                item_height={145}
                numberOfCopy={7}
                renderItem={({ item, index }) => (
                    <Link showIcon={true} text={item} onCPress={onSelectItem} onAssetPress={onItemSelect}/>
                )}
            />
        )

    }

    

    const _cTextsView = () => {
        if (assetType !== screenTypes.cTexts)
            return null

        return (
            <InfinityList
                list={['all texts', 'all texts', ]}
                item_height={145}
                numberOfCopy={7}
                renderItem={({ item, index }) => (
                    <Link showIcon={true} text={item} onCPress={onSelectItem} onAssetPress={onItemSelect}/>
                )}
            />
        )

    }
    return (
        <Container>
            <View style={{flex:1}}>
             
            {_audioView()}
            {_videoView()}
            {_photoView()}
            {_docView()}
            {_linkView()}
            {_cChatsView()}
            {_cTextsView()}
            </View>
            <FooterButtons navigation={props.navigation} />
        </Container>
    )


  
}


export default AssetsList;