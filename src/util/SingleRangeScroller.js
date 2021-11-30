import React, { Component } from 'react'
import { Text, View, StyleSheet, VirtualizedList, Animated, Dimensions, Vibration } from 'react-native';

const ListView = Animated.createAnimatedComponent(VirtualizedList);

const array = new Array(100).fill(0);

const { width, height } = Dimensions.get('screen');

const ItemHeight = 170;

const viewConfig = {
    // minimumViewTime: 100,
    itemVisiblePercentThreshold: 50
};

export default class InfinityList extends Component {


    flatListRef = React.createRef(null);
    startAnimation = new Animated.Value(0);
    numberOfCopy = 6;
    endLS = new Array(20).fill(1);
    scrollY = new Animated.Value(0);
    item_height = 100;
    count = 0;
    paddingVertical = height / 2;

    state = {
        list: [],
    }

    componentDidMount() {

        if (this.props.numberOfCopy) {
            this.numberOfCopy = this.props.numberOfCopy;
        }

        this.item_height = this.props.item_height;
        this.paddingVertical = this.props.paddingVertical ? this.props.paddingVertical : (height / 2.2) - (this.item_height / 2);

        const arr = new Array((this.numberOfCopy + 1) * this.props.list.length).fill(1);
        this.setState({
            list: arr
        }, this.scrollToFirstOffset);
    }

    start = () => {
        Animated.timing(this.startAnimation, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true
        }).start();
    }

    scrollToFirstOffset = () => {
        const scrollIndex = parseInt(this.numberOfCopy / 2) * this.props.list.length;

        setTimeout(() => {
            this.flatListRef.current?.scrollToOffset({ animated: false, offset: this.item_height * scrollIndex });
            this.start();
        }, 100);
    }

    onViewableItemsChanged = ({ changed }) => {

        if (changed.length > 0) {
            const visibleIndex = changed[0].index;
            this.count += 1;
            // First fire
            if (!this.count > 2) {
                return
            }

            Vibration.vibrate(3);

            // Scroll to top
            if (visibleIndex <= this.props.list.length) {
                this.flatListRef.current?.scrollToIndex({ animated: false, index: parseInt(this.numberOfCopy / 2) * this.props.list.length });
                return
            }

            // Scroll to bottom
            if (visibleIndex >= this.state.list.length - (this.props.list.length * 1)) {
                this.flatListRef.current?.scrollToIndex({ animated: false, index: parseInt(this.numberOfCopy / 2) * this.props.list.length });
                return
            }

        }
    }



    render() {
        const item_height = this.item_height;

        const { list } = this.state;

        const opacity = this.startAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });


        const translateY = this.startAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 0]
        });


        return (
            <Animated.View style={{
                opacity: opacity,
                flex: 1,
                transform: [
                    { translateY }
                ]
            }}>
                <ListView
                    data={list}
                    ref={this.flatListRef}
                    keyExtractor={(item, id) => String(id)}
                    contentContainerStyle={{ paddingVertical: this.paddingVertical }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='always'
                    getItemCount={() => this.state.list.length}
                    renderItem={this._renderItem}
                    getItem={(data, index) => this.endLS[index % this.props.list.length]}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                    decelerationRate='fast'
                    onScrollToIndexFailed={() => {
                        console.log('--->')
                    }}
                    style={{ flexGrow: 0 }}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    onEndReachedThreshold={.5}
                    onEndReached={() => {
                        this.flatListRef.current?.scrollToIndex({ animated: false, index: parseInt(this.numberOfCopy / 2) * this.props.list.length });
                    }}

                // onMomentumScrollEnd={(event) => {

                //     // console.log(event.nativeEvent.contentOffset.y / this.item_height)
                //     // this.flatListRef.current?.scrollToIndex({ viewPosition: .5, animated: true, index: parseInt(event.nativeEvent.contentOffset.y / this.item_height) });
                // }}
                />
            </Animated.View>
        )
    }

    _renderItem = ({ index, item }) => {

        const item_height = this.item_height;

        const inputRange = [

            (index - 1) * item_height,
            index * item_height,
            (index + 1) * item_height,
        ];

        const opacity = this.scrollY.interpolate({
            inputRange,
            outputRange: [.6, 1, .6],
            extrapolate: 'clamp',
        });

        const scale = this.scrollY.interpolate({
            inputRange,
            outputRange: [.7, 1, .7],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View
                style={{
                    height: item_height,
                    opacity: opacity,
                    overflow: 'hidden',
                    // backgroundColor: 'red',
                    transform: [{ scale }]
                }}>
                {this.props.renderItem({ item: this.props.list[index % this.props.list.length], index: index })}
            </Animated.View>
        )
    }
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'pink'
    }
})