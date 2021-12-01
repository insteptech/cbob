import React, { Component, useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorSet, opacityColor } from '../../styles/colors'
import { shadow } from '../../styles/shadow'
import Container from '../../util/Container'
import InfiniteScroll from '../../util/InfiniteScroll';
import { buttonColor } from '../splash'
import { appActivity, changeAppStatus } from "../../store/reducers/AppActivityReducer";
import InfinityList from '../../util/InfinityList';
import { initMobile, validateUser, addSafeName, addSafe, apiCall } from '../../store/actions/UserActions'
import { FooterButtons } from '../../util/FooterButtons'
import base64 from 'react-native-base64'
import { startUserSession } from '../../../CometChat/Users'
import axios from 'axios'
import {TokenContext} from '../../constents/context';
import SECRETS from '../../../CometChat/keys'
import { CometChat } from "@cometchat-pro/react-native-chat"
import { useSelector, useDispatch } from 'react-redux'


export const colorsPrimaryView = [colorSet.primaryGradient, opacityColor(colorSet.primary, 54), colorSet.primaryGradient];

export default function Login () {

    let auth = React.useContext(TokenContext);
    // console.log('auth.token.bober',auth.token.bober)
    
    
    // console.log('token',setAuth)
    
    
    // state = {
    //     safe: undefined,
    //     boBar: undefined,
    //     password: undefined,
    //     initData: []
    // }
    const [safeList,setSafeList] = useState({
        safe:safe,
        bober:boBar,
        safe:password
    })
    const [safe,setSafe] = useState('test')
    const [boBar,setBoBar] = useState('Kevin')

    const [password,setPassword] = useState('456789')

    const [initData,setInitData] = useState([])

    const registerUIDCometChat = (boBar) => {
        let authKey = SECRETS.Auth_Key;
        var uid = boBar;
        var name = boBar;
    
        var user = new CometChat.User(uid);
    
        user.setName(name);
    
        CometChat.createUser(user, authKey).then(
          user => {
            console.log("user created", user);
          }, error => {
            console.log("createUsererror", error);
          }
        )
      }
    
      const loginUIDCometChat = (boBar) => {
    
        var UID = boBar;
        var authKey = SECRETS.Auth_Key;
    
        CometChat.login(UID, authKey).then(
          user => {
            console.log("Login Successful:", { user });
            // alert(user.uid)
          },
          error => {
            console.log("Login failed with exception:", { error });
            alert(error.message)
    
          }
        );
      }

    
    // componentDidMount() {

    //     this.auth = 'Basic ' + base64.encode(this.state.boBar + ":" + this.state.password);
    //     console.log('this.auth', this.auth)
    //     // initMobile('demo', this.auth)



    //     let userName = 'TESTB1'
    //     let password = '123456'
    //     // let token = Buffer.from(userName+':'+password).toString('base64');

    //     axios.get('https://safe101.com.au/safe101-test/api/appApi/initMobile', {

    //         auth: {
    //             username: userName,
    //             password: password

    //         }
    //     })
    //         .then((res) => {
    //             // console.log('ares.data',res.data)
    //             this.setState({ initData: res.data })
    //             // console.log('this.state.initData',this.state.initData)
    //         })
    //         .catch((error) => {
    //             console.error('aerror', error)
    //         })



    // }

    // useEffect(()=>{

    //     let auth = 'Basic ' + base64.encode(boBar + ":" + password);
    //     console.log('this.auth', auth)
    //     // initMobile('demo', this.auth)



    //     let userName = 'TESTB1'
    //     let password = '123456'
    //     // let token = Buffer.from(userName+':'+password).toString('base64');

    //     axios.get('https://safe101.com.au/safe101-test/api/appApi/initMobile', {

    //         auth: {
    //             username: userName,
    //             password: password

    //         }
    //     })
    //         .then((res) => {
    //             // console.log('ares.data',res.data)
    //             setInitData({ initData: res.data })
    //             // console.log('initData',initData)
    //         })
    //         .catch((error) => {
    //             console.error('aerror', error)
    //         })

    // },[])
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("useefect")
        dispatch(apiCall()).then((result) => {
            
        }).catch((err) => {
            
        })
        // apiCall()
    }, [])

   const onSubmitForm = () => {

        appActivity(true);
        validateUser({
            safe: safe,
            username: boBar,
            password: password
        }).then(isValid => {
            appActivity(false);
            console.log('isValid', isValid)


            if(isValid){
                // AsyncStorage.setItem('userToken', response.data.data.token);

                auth.dispatch({
                    type: 'SAVE_AUTH',
                    safe: safe,
                    bober: boBar,
                    password:password,
                    auth:true,
                    uid:boBar.replace(/[^0-9a-z]/gi, '')
                  });
                  auth.dispatch({
                    type: 'SAVE_safelist',
                    safeList:'safeList'
                  });
               
                
            } 

            if (isValid) {
                startUserSession({ uid: boBar.replace(/[^0-9a-z]/gi, ''), name: `${boBar}` });
                addSafeName(safe);
                 registerUIDCometChat(boBar.replace(/[^0-9a-z]/gi, ''))
                loginUIDCometChat(boBar.replace(/[^0-9a-z]/gi, ''))
                changeAppStatus(2);
               
               
                auth.dispatch({
                    type: 'SAVE_home',
                    home:2
                  });
                
            }
   
           

        })




        // ----- TEST ----

        // if (!this.state.safe) {
        //     ToastSnack({ title: 'Safe is required', color: colorSet.error });
        //     return
        // }

        // if (!this.state.boBar) {
        //     ToastSnack({ title: 'BoBar is required', color: colorSet.error });
        //     return
        // }

        // if (!this.state.password) {
        //     ToastSnack({ title: 'Password is required', color: colorSet.error });
        //     return
        // }
        // addSafeName(this.state.safe);
        // addSafe({
        //     safe: this.state.safe,
        //     password: this.state.password,
        //     boBar: this.state.boBar,
        // });
        // changeAppStatus(2);


    }

 
        return (
            <Container>

                <InfinityList
                    list={[0, 1, 2, 3]}
                    item_height={135}
                    numberOfCopy={1}
                    renderItem={({ item, index }) => (
                        <>
                            {item == 0 && (
                                <LoginCard heading='SAFE' value={safe} onChangeText={(safe) => setSafe( safe )} />
                            )}

                            {item == 1 && (
                                <LoginCard heading='Bober' value={boBar} onChangeText={(boBar) => setBoBar( boBar )} />
                            )}
                            {item == 2 && (
                                <LoginCard heading='Password' value={password} onChangeText={(password) => setPassword( password )} />
                            )}
                            {item == 3 && (
                                <SubmitButton onPress={onSubmitForm} />
                            )}
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





export const LoginCard = ({ heading, onChangeText, value, icon = null, inputRef }) => {

    return (
        <LinearGradient colors={colorsPrimaryView} style={{ height: 98, borderRadius: 10, marginHorizontal: 15, padding: 10, marginTop: 20, ...shadow.s10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 20, color: colorSet.white }}>{heading}</Text>
                <Image source={require('../../assets/images/c.png')} style={{ width: 25, height: 25, }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, }}>
                <TextInput
                    value={value}
                    ref={(ref) => inputRef && inputRef(ref)}
                    onChangeText={onChangeText}
                    style={{
                        flex: 1,
                        borderRadius: 10,
                        borderColor: colorSet.primaryGradient,
                        ...shadow.s20,
                        borderWidth: 1,
                        backgroundColor: colorSet.white,
                        color: colorSet.primaryGradient
                    }} />
                {icon && (icon)}

            </View>
        </LinearGradient>
    )
}


const SubmitButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.7}>
            <LinearGradient colors={buttonColor} style={{ height: 93, width: 93, borderRadius: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30 }}>
                <Image source={require('../../assets/images/arrow.png')} style={{ width: 23, height: 23, transform: [{ scaleX: -1 }] }} />
            </LinearGradient>
        </TouchableOpacity>
    )
}




// const onSubmitForm = () => {


//     //    initCheck
// //     axios.get(`https://safe101.com.au/safe101-test/api/appApi/initMobile`, {
// //         auth: {
// //             username: "Kevin",
// //             password: "456789"

// //         }
// //     })
// //         .then((res) => {
// //             // console.log('res.data.data.user.userId',res.data.user.userId)
// //             console.log('resa.data',res.data)
// //             let a = JSON.stringify(res.data)
// //             console.log('a',a)

// //             let b = JSON.parse(a)
// //             console.log('b',b)

// //             // setInitMobileData(res.data)
// //             // auth.dispatch({
// //             //     type: 'SAVE_AUTH',
// //             //     boberId: res.data.data.user.userId,
// //             //     initMobileData:res.data.data
// //             //   });
// //             // console.log('initData',initData)
// //         })
// //         .catch((error) => {
// //             console.error('initMoberror', error)
// //         })

     
    
    
// //     axios( {
// //         // `url` is the server URL that will be used for the request
// //         url: 'appApi/initMobile',
       
// //         // `method` is the request method to be used when making the request
// //         // method: 'get', // default
       
// //         // `baseURL` will be prepended to `url` unless `url` is absolute.
// //         // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
// //         // to methods of that instance.
// //         baseURL: 'https://safe101.com.au/safe101-test/api/',
       
// //         // `transformRequest` allows changes to the request data before it is sent to the server
// //         // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
// //         // The last function in the array must return a string, an ArrayBuffer, or a Stream
// //         transformRequest: [function (data) {
// //           // Do whatever you want to transform the data
       
// //           return data;
// //         }],
       
// //         // `transformResponse` allows changes to the response data to be made before
// //         // it is passed to then/catch
// //         transformResponse: [function (data) {
// //           // Do whatever you want to transform the data
// //        console.log('data',data)
// //           return data;
// //         }],
       
// //         // `headers` are custom headers to be sent
// //         headers: {'X-Requested-With': 'XMLHttpRequest'},
       
// //         // `params` are the URL parameters to be sent with the request
// //         // Must be a plain object or a URLSearchParams object
// //         params: {
// //           ID: 12345
// //         },
       
// //         // `paramsSerializer` is an optional function in charge of serializing `params`
// //         // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
// //         // paramsSerializer: function(params) {
// //         //   return Qs.stringify(params, {arrayFormat: 'brackets'})
// //         // },
       
// //         // `data` is the data to be sent as the request body
// //         // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
// //         // When no `transformRequest` is set, must be of one of the following types:
// //         // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
// //         // - Browser only: FormData, File, Blob
// //         // - Node only: Stream
// //         // data: {
// //         //   firstName: 'Fred'
// //         // },
       
// //         // `timeout` specifies the number of milliseconds before the request times out.
// //         // If the request takes longer than `timeout`, the request will be aborted.
// //         timeout: 1000,
       
// //         // `withCredentials` indicates whether or not cross-site Access-Control requests
// //         // should be made using credentials
// //         withCredentials: false, // default
       
// //         // `adapter` allows custom handling of requests which makes testing easier.
// //         // Return a promise and supply a valid response (see [response docs](#response-api)).
// //         // adapter: function (config) {
// //         //   /* ... */
// //         // },
       
// //         // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
// //         // This will set an `Authorization` header, overwriting any existing
// //         // `Authorization` custom headers you have set using `headers`.
// //         auth: {
// //           username: 'Kevin',
// //           password: '456789'
// //         },
       
// //         // `responseType` indicates the type of data that the server will respond with
// //         // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
// //         responseType: 'json', // default
       
// //         // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
// //         xsrfCookieName: 'XSRF-TOKEN', // default
       
// //         // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
// //         xsrfHeaderName: 'X-XSRF-TOKEN', // default
       
// //         // `progress` allows handling of progress events for 'POST' and 'PUT uploads'
// //         // as well as 'GET' downloads
// //         progress: function (progressEvent) {
// //           // Do whatever you want with the native progress event
// //         },
       
// //         // `maxContentLength` defines the max size of the http response content allowed
// //         maxContentLength: 2000,
       
// //         // `validateStatus` defines whether to resolve or reject the promise for a given
// //         // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
// //         // or `undefined`), the promise will be resolved; otherwise, the promise will be
// //         // rejected.
// //         validateStatus: function (status) {
// //           return status >= 200 && status < 300; // default
// //         },
       
// //         // `maxRedirects` defines the maximum number of redirects to follow in node.js.
// //         // If set to 0, no redirects will be followed.
// //         maxRedirects: 5, // default
       
// //         // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
// //         // and https requests, respectively, in node.js. This allows to configure options like
// //         // `keepAlive` that are not enabled by default.
// //         // httpAgent: new http.Agent({ keepAlive: true }),
// //         // httpsAgent: new https.Agent({ keepAlive: true })
// //       })

    
// //     initCheck

// //         axios({
// //             method: 'post',
// //             url: "https://safe101.com.au/safe101-test/api/loginApi/validate",
// //             // headers: {}, 
// //             data: {
// //                 "j_username": "Kevin",
// //                 "j_password": "456789"
// //             }
// //           })
// //                  .then((res) => {
// //                 console.log('ares.data',res.data)
// //                 // this.setState({ initData: res.data })
// //                 // console.log('this.state.initData',this.state.initData)
// //             })
// //             .catch((error) => {
// //                 console.error('aerror', error)
// //             })

// //                 axios({
// //             method: 'get',
// //             url: "https://safe101.com.au/safe101-test/node/ajaxListData",
// //             // headers: {}, 
// //             params: {
// //                 "id":729418,
// //                 "incInactDoc":true,
// //                 "incInactRes":true,
// //                 "isVirtual":false,
// //                 "mode":"PEOPLE",
// //             },
// //             auth :{
// //                 username: "Kevin",
// //                 password: "456789"
// //             }
// //           })
// //                  .then((res) => {
// //                 console.log('ares.data',res.data.node.resources[0].name)
// //                 // this.setState({ initData: res.data })
// //                 // console.log('this.state.initData',this.state.initData)
// //             })
// //             .catch((error) => {
// //                 console.error('aerror', error)
// //             })



// //   transformResponse
// //         axios.get(`https://safe101.com.au/safe101-test/api/appApi/initMobile`, {
// //             auth: {
// //                 username: "Kevin",
// //                 password: "456789"

// //             },
// //             transformResponse: [function (data) {
// //                 console.log('transformResponsedata',data); // "{ name: "apple", type: "fruit"}"
// //             }]
// //         })
        
// //         transformResponse

// //         axios.get(`https://safe101.com.au/safe101-test/api/appApi/initMobile`, 
// //         {
// //             auth: {
// //                 username: "Kevin",
// //                 password: "456789"
// //             },
// //             transformResponse: [
// //                 function (data) {
// //                     if (data.startsWith(")]}',\n")) {
// //                         return data.substring(6);
// //                     } else {
// //                         return data;
// //                     }
// //                 }
// //             ]
// //         })
// //         .then(function (response) {
// //             console.log("responsssdsdsdseass:", response.data);
// //         });

//         appActivity(true);
//         validateUser({
//             safe: safe,
//             username: boBar,
//             password: password
//         }).then(isValid => {
//             appActivity(false);
//             console.log('isValid', isValid)


//             if(isValid){
//                 // AsyncStorage.setItem('userToken', response.data.data.token);

//                 auth.dispatch({
//                     type: 'SAVE_AUTH',
//                     safe: safe,
//                     bober: boBar,
//                     password:password,
//                     auth:true,
//                     uid:boBar.replace(/[^0-9a-z]/gi, '')
//                   });
//                   auth.dispatch({
//                     type: 'SAVE_safelist',
//                     safeList:'safeList'
//                   });
               
                
//             } 

//             if (isValid) {
//                 startUserSession({ uid: boBar.replace(/[^0-9a-z]/gi, ''), name: `${boBar}` });
//                 addSafeName(safe);
//                  registerUIDCometChat(boBar.replace(/[^0-9a-z]/gi, ''))
//                 loginUIDCometChat(boBar.replace(/[^0-9a-z]/gi, ''))
//                 changeAppStatus(2);
               
               
//                 auth.dispatch({
//                     type: 'SAVE_home',
//                     home:2
//                   });
                
//             }
   
           

//         })




//         // ----- TEST ----

//         // if (!this.state.safe) {
//         //     ToastSnack({ title: 'Safe is required', color: colorSet.error });
//         //     return
//         // }

//         // if (!this.state.boBar) {
//         //     ToastSnack({ title: 'BoBar is required', color: colorSet.error });
//         //     return
//         // }

//         // if (!this.state.password) {
//         //     ToastSnack({ title: 'Password is required', color: colorSet.error });
//         //     return
//         // }
//         // addSafeName(this.state.safe);
//         // addSafe({
//         //     safe: this.state.safe,
//         //     password: this.state.password,
//         //     boBar: this.state.boBar,
//         // });
//         // changeAppStatus(2);


//     }