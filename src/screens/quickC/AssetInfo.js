import React, { Component } from 'react'
import { } from 'react'
import { View, Text, Image } from 'react-native'
import Container from '../../util/Container'
import LinearGradient from 'react-native-linear-gradient'
import { colorsPrimaryView } from '../auth/Login'
import { RowButton } from '../../util/RowButton'
import InfiniteScroll from '../../util/InfiniteScroll';
import { FooterButtons } from '../../util/FooterButtons';

class AssetsInfo extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <Container>

                <InfiniteScroll
                    renderItem={this._renderInfo}
                    nextDuration={5000}
                />
                <FooterButtons navigation={this.props.navigation} />

            </Container>
        )
    }

    _renderInfo = () => {
        return (
            <>
                <ShowCard title='Ready By' list={['Bober 3 on 05-31-2021 14:20', 'Bober 3 on 05-31-2021 14:21']} />
                <View style={{ marginHorizontal: 20 }}>
                    <RowButton title='Save to server' />
                </View>
                <ShowCard title='Saved By' list={['Bober 3 on 05-31-2021 14:20', 'Bober 3 on 05-31-2021 14:21']} />
                <ShowCard title='Sent By' list={['Bober 3 on 05-31-2021 14:20 in Group 1']} />
                <ShowCard title='Received By' list={['Bober 3 on 05-31-2021 14:20 in Group 1']} />
            </>
        )
    }
}

const ShowCard = ({ title, list = [] }) => {
    return (
        <LinearGradient
            colors={colorsPrimaryView}
            style={{
                borderRadius: 10,
                marginHorizontal: 15,
                padding: 10,

                paddingHorizontal: 15,
                marginTop: 20,
            }}
        >
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}:</Text>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    {list.map(item => <Text key={item} style={{ fontSize: 16 }}>{item}</Text>)}
                </View>
            </View>
        </LinearGradient>
    )
}


export default AssetsInfo;