import React, { useEffect, useState } from 'react'
import {decode as atob, encode as btoa} from 'base-64'
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import ScreenConst, { QuickCScreenTypes, screenTypes } from '../../constents/screenConst';
import { FooterButtonsSingle } from '../../util/FooterButtons';
import InfinityList from '../../util/7ElementScroller';
import axios from 'axios'
import { TokenContext } from '../../constents/context';






export default function Home({ navigation }) {
    let auth = React.useContext(TokenContext);
    console.log('authHomeScreen', auth)
    const [initMobileData, setInitMobileData] = useState([])
    const [data, setData] = useState([])
    // console.log('initMobileData', initMobileData)

    const initApiCall = () => {
        axios.get(`https://safe101.com.au/safe101-${auth.token.safe}/api/appApi/initMobile`, {
            auth: {
                username: auth.token.bober,
                password: auth.token.password

            }
        })
            .then((res) => {
                // console.log('res.data.data.user.userId',res.data.user.userId)
                // console.log('resa.data', res.data)

                setInitMobileData(res.data)
                // auth.dispatch({
                //     type: 'SAVE_AUTH',
                //     boberId: res.data.data.user.userId,
                //     initMobileData:res.data.data
                //   });
                // console.log('initData',initData)
            })
            .catch((error) => {
                console.error('initMoberror', error)
            })
    }

    const rootAccess  =()=>{
        axios({
            method: 'get',
            url: `https://safe101.com.au/safe101-${auth.token.safe}/api/structureApi/getStructM`,
            // headers: {}, 
            params: {
                "module":"PEOPLE",
                //id:729418
                "incAllCtrlDocs":true,
                "incAllRes":true,
                "incUnlinkedRes":true,
                "level":-1
            },
            auth :{
                username: auth.token.bober,
                password: auth.token.password
            }
          })
                 .then((res) => {
                console.log('res.data',res.data)

             
            })
            .catch((error) => {
                console.error('aerror', error)
            })
      }

    
  

    useEffect(() => {

        // onSubmitForm = () => {
        //     appActivity(true);
        //     init({
        //         safe: this.state.safe,
        //         username: this.state.boBar,
        //         password: this.state.password
        //     }).then(isValid => {
        //         appActivity(false);

        //         if (isValid) {
        //             startUserSession({ uid: this.state.boBar, name: `BoBar : ${this.state.boBar}` });
        //             addSafeName(this.state.safe);
        //             changeAppStatus(2);
        //         }
        //         // else {
        //         //     changeAppStatus(2);

        //         // }
        //     })

        //     // ----- TEST ----

        //     // if (!this.state.safe) {
        //     //     ToastSnack({ title: 'Safe is required', color: colorSet.error });
        //     //     return
        //     // }

        //     // if (!this.state.boBar) {
        //     //     ToastSnack({ title: 'BoBar is required', color: colorSet.error });
        //     //     return
        //     // }

        //     // if (!this.state.password) {
        //     //     ToastSnack({ title: 'Password is required', color: colorSet.error });
        //     //     return
        //     // }
        //     // addSafeName(this.state.safe);
        //     // addSafe({
        //     //     safe: this.state.safe,
        //     //     password: this.state.password,
        //     //     boBar: this.state.boBar,
        //     // });
        //     // changeAppStatus(2);
        // }




        // let userName = 'Dinah'
        // let password = '567890'
        // // let token = Buffer.from(userName+':'+password).toString('base64');

        // axios.get('https://safe101.com.au/safe101-demo/api/resourceApi/list', {

        //    auth : {
        //        username :userName,
        //        password:password

        //    }
        // })
        //     .then((res) => {
        //         // console.log('ares.data', res.data)
        //         setData(res.data)
        //         console.log('data', data)

        //     })
        //     .catch((error) => {
        //         console.error('aerror', error)
        //     })

        initApiCall();
        rootAccess();



    }, [initMobileData])

    const onPressItem = (screen) => {
        ScreenConst.screenType = screen.key
        { screen.screen === undefined ? null : screen && navigation.navigate(screen.screen, data) }
    }


    return (
        <Container>
            <InfinityList
                list={List}
                item_height={70}
                numberOfCopy={5}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton {...item} onPress={() => onPressItem(item)} />
                    </>
                )}
            />
            <FooterButtonsSingle home={2}/>
        </Container>
    )
}


const List = [
    // {
    //     title: 'Contacts',
    //     screen: 'Contacts'
    // },
    {
        title: 'Favourite Group1',
        // screen: 'RecycleBin'
    },
    {
        title: 'cBoBs',
        screen: 'Contacts',
        key:QuickCScreenTypes.cboBs
        
    },

    {
        title: 'cChats',
        screen: 'ChatUsers',
         key: QuickCScreenTypes.cChats
    },
    {
        title: 'cTexts',
        screen: 'ChatUsers',
         key: QuickCScreenTypes.cTexts
    },
    {
        title: 'cDocuments',
        screen: 'AssetsList',
        // key: screenTypes.doc
        key:QuickCScreenTypes.doc

        
    },
    {
        title: 'cPhotos',
        screen: 'AssetsList',
        // key: screenTypes.Photos
        key:QuickCScreenTypes.Photos
    },
    {
        title: 'cVideos',
        screen: 'AssetsList',
        // key: screenTypes.Videos
        key:QuickCScreenTypes.Videos
    },

    {
        title: 'cAudios',
        screen: 'AssetsList',
        // key: screenTypes.Audio
        key: QuickCScreenTypes.Audio

    },
    {
        title: 'cLinks',
        screen: 'AssetsList',
        // key: screenTypes.Links
        key: QuickCScreenTypes.Links

    },
    {
        title: 'cBoB Groups',
         screen: 'cBoBGroups',
        //  key: screenTypes.Links
        key: QuickCScreenTypes.cBoBGroups

    },
    {
        title: 'cRecycle Bin',
        screen: 'RecycleBin'
    },
    {
        title: 'QUICKc Logo',
         screen: 'QUICKcLOGO'
    },





]