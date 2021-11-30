import React, { Component } from 'react';
import { FlatList, VirtualizedList, Animated } from 'react-native';


const AnimatedList = Animated.createAnimatedComponent(VirtualizedList);

export default class InfiniteScroll extends Component {

    state = {
        data: new Array(20).fill(1)
    }

    flatListRef = React.createRef(null);
    scrollX = new Animated.Value(0)
    count = 0

    componentDidMount() {
        setTimeout(() => {
            try {
                this.flatListRef.current && this.flatListRef.current.scrollToIndex({ animated: false, index: 10 })
            }
            catch {

            }
        }, this.props.nextDuration ? this.props.nextDuration : 500);
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        const visibleIndex = changed[0].index;
        this.count += 1;
        if (visibleIndex >= 14) {
            // if (this.state.data.length > 100) {
            //     this.setState({ data: new Array(20).fill(1) });
            //     return
            // }
            // this.setState({ data: [...this.state.data, ...new Array(10).fill(1)] });
            this.count > 1 && this.flatListRef.current.scrollToIndex({ animated: false, index: 10 })
            return
        }

        if (visibleIndex <= 6) {
            this.count > 1 && this.flatListRef.current.scrollToIndex({ animated: false, index: 10 })
        }
        console.log("Visible items are", visibleIndex);
    }

    render() {
        return (
            <>
                <AnimatedList
                    data={this.state.data}
                    {...this.props}
                    bounces={false}
                    ref={this.flatListRef}
                    onScrollToIndexFailed={() => {

                    }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    getItemCount={() => this.state.data.length}
                    // renderItem={this._renderItem}
                    renderItem={this.props.renderItem}
                    getItem={() => ({ id: '_task' })}
                    // snapToAlignment='start'
                    // scrollEventThrottle={16}
                    // onScroll={Animated.event(
                    //     [{ nativeEvent: { contentOffset: { y: this.scrollX } } }],
                    //     { useNativeDriver: true }
                    // )}
                    // bounces={false}
                    viewabilityConfig={{
                        itemVisiblePercentThreshold: 50
                    }}
                />
            </>
        );
    }

    _renderItem = (props) => {



        const { index } = props;
        const scrollX = this.scrollX;

        const inputRange = [
            (index - 1) * 370,
            index * 370,
            (index + 1) * 370
        ];

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [, 1, 1],
            extrapolate: 'clamp',
        })
        const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: ['-15deg', '0deg', '15deg'],
            extrapolate: 'clamp',
        })
        const rotateX = scrollX.interpolate({
            inputRange,
            outputRange: ['-15deg', '0deg', '15deg'],
            extrapolate: 'clamp',
        })
        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [.7, 1, .7],
            extrapolate: 'clamp',
        })


        return (
            <Animated.View style={{
                height: 370,
                opacity,
                transform: [

                    { rotateX },
                    { scale }
                ]
            }}>
                {this.props.renderItem(props)}
            </Animated.View>
        )
    }
}