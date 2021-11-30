import React, { useEffect } from 'react'
import { View } from 'react-native';
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import InfiniteScroll from '../../util/InfiniteScroll';
import ScreenConst, { screenTypes } from '../../constents/screenConst';
import { FooterButtonsSingle } from '../../util/FooterButtons';
import { ButtonColors, RoundButton } from '../../util/Button';
import InfinityList from '../../util/7ElementScroller';
import { changeAppStatus } from '../../store/reducers/AppActivityReducer';
import { TokenContext } from '../../constents/context';
import axios from 'axios';



export default function Home({ navigation }) {

    
    let auth = React.useContext(TokenContext);

    const onPressItem = (screen) => {
        console.log(screen.screen)
        if (screen.key == 'SAFE_ENTER') {
            changeAppStatus(1);
            return
        }
        ScreenConst.screenType = screen.key

        {screen.screen===undefined?null:screen.screen && navigation.navigate(screen.screen)}
    }
    const imagefetchApiCall = () => {
            axios({
            method: 'get',
            url: `https://safe101.com.au/safe101-${auth.token.safe}/api/resourceApi/getPhoto`,
            // headers: {}, 
            params: {
                "id":75405,
        
            },
            auth :{
                username: "Kevin",
                password: "456789"
            }
          })
                 .then((response) => {
                console.log('imageResponse',typeof response.data)
                // this.setState({ initData: res.data })
                // console.log('this.state.initData',this.state.initData)
            })
            .catch((error) => {
                console.error('aerror', error)
            })
    }

    useEffect(()=>{
        imagefetchApiCall();
    },[])
    return (
        <Container>
            <InfinityList
                list={List}
                item_height={70}
                numberOfCopy={5}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton 
                        key={item.title} 
                        title={item.title} 
                        onPress={() => onPressItem(item)}
                        image={item.image} />
                    </>
                )}
            />

            <FooterButtonsSingle home={3}/>
        </Container>
    )
}


const List = [
  
    // {
    //     title: 'Notifications',
    //     screen: 'notification',
    // },

    // {
    //     title: 'SAFE Exit',
    //     screen: 'exit',
    // },
    // {
    //     title: 'SAFE Position',
    //     screen: 'safe_position',
    // },
    // {
    //     title: 'Date Format',
    //     screen: 'AssetsList',
    //     key: screenTypes.Audio
    // },



    {
        // image :'https://Kevin:456789@safe101.com.au/safe101-test/api/resourceApi/getPhoto?id=75405',        

        image :'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',        
        // screen: 'firstLast',
    },
    {
        title: 'Warren Buffet',
        // screen: 'firstLast',
    },
    {
        title: 'cSETTINGS',
        screen: 'cSETTINGS',
    },



    {
        title: 'SAFE Change',
        screen: 'SafeChange',
    },
    // {
    //     title: 'SAFE Enter',
    //     key: 'SAFE_ENTER'
    // },
    {
        title: 'cAPP Change',
        key: 'cAPPChange',
        screen: 'cAppChange',
    },
    {
        title: 'cMyLIBRARY',
        key: 'cMyLIBRARY'
    },
    {
        title: 'cSAFE Logo',
        key: 'cSAFELogo',
        screen:'cSafeLogo'
    },

    
    // {
    //     title: 'LOOKc',
    //     screen: undefined
    // },
    // {
    //     title: 'cWORKPLAN',
    //     screen: ''
    // },
    // {
    //     title: 'Permissions',
    //     screen: 'permissions',

    // },
    {
        title: 'cMyBob',
        // screen: 'cMyBob',
    },

]