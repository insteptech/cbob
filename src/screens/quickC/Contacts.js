import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import {decode as atob, encode as btoa} from 'base-64'
import Container from '../../util/Container'
import { RowButton } from '../../util/RowButton';
import { FooterButtons } from '../../util/FooterButtons';
import InfinityList from '../../util/InfinityList';
import axios from 'axios'
import { TokenContext } from '../../constents/context';
import ScreenConst, { screenTypes } from '../../constents/screenConst';


export default function Contacts({ navigation, route }) {

    let auth = React.useContext(TokenContext);
    console.log('auth.token.bober', auth.token.bober)
console.log("i am ahererer 3 ");


    const [data1, setData1] = useState([])
    const data = route.params;
    // console.log('data1', data1)





    // let filterPeople = data1.filter((data2) => {
    //     if (data2.type.code === "PEOPLE") {
    //         return data2
    //     }
    // })
    // console.log('filterPeople',filterPeople)


    const onPressItem = (item, screen) => {
        // console.log('title',item)
        // console.log('title.name',item.name)
        // ScreenConst.screenType = screen.title
        // screen &&
        if (ScreenConst.screenType==='cboBs'){
            navigation.navigate('ContactsDetail', { item: item })

        }else if(ScreenConst.screenType==='cBoBGroups')
        {
            navigation.navigate('ContactsDetail', { item: item })


        }
        else{
            navigation.navigate('SingleChat',{ item: item })

        }
    }

    // useEffect(() => {


    //     let userName = auth.token.bober
    //     let password = auth.token.password
    //     // let token = Buffer.from(userName+':'+password).toString('base64');

    //     axios.get(`https://safe101.com.au/safe101-${auth.token.safe}/api/resourceApi/list`, {

    //         auth: {
    //             username: userName,
    //             password: password

    //         }
    //     })
    //         .then((res) => {
    //             // console.log('ares.data', typeof (res.data))
    //             setData1(res.data)
    //         })
    //         .catch((error) => {
    //             console.error('aerror', error)
    //         })

    // }, [])


    const bobsList = () => {
      console.log("i am ahererer 2");
        axios({
            method: 'get',
            url: `https://safe101.com.au/safe101-${auth.token.safe}/api/structureApi/getStructM`,
            // headers: {}, 
            params: {
                "id": 729418,
                "incAllCtrlDocs": true,
                "incAllRes": true,
                "incUnlinkedRes": true,
                "module": "PEOPLE",
				"level":0
            },
            auth: {
                username: auth.token.bober,
                password: auth.token.password
            }
        })
            .then((res) => {
               
				var re = JSON.parse(res.data.slice(6))
				 console.log('res.data.resources', re)
				 
                setData1(re.data.resources)


            })
            .catch((error) => {
                console.error('aerror', error)
            })
    }

    const bobsGroupList = () => {
    
        axios({
            method: 'get',
            url: `https://safe101.com.au/safe101-${auth.token.safe}/node/ajaxListData`,
            // headers: {}, 
            params: {
                "module":"PEOPLE",
                "id":739070,
                "incAllCtrlDocs":true,
                "incAllRes":true,
                "incUnlinkedRes":true,
                "level":0
            },
            auth: {
                username: auth.token.bober,
                password: auth.token.password
            }
        })
            .then((res) => {
                console.log('res.data.node', res.data.node.displayName)


            })
            .catch((error) => {
                console.error('aerror', error)
            })
    }



    useEffect(() => {
		console.log("i am ahererer ");
        bobsList()
        bobsGroupList()
    }, [])

    return (

        <Container>

            {!data1.length ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
            </View> : <InfinityList
                list={data1}
                item_height={70}
                // numberOfCopy={5}
                renderItem={({ item, index }) => (
                    <>
                        <RowButton key={item.id} title={item.name} onPress={() => onPressItem(item)} item={item} />
                    </>
                )}
            />}
            <FooterButtons navigation={navigation} home = 'quickc' />
        </Container>
    )
}

