import React, { useEffect, useState } from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import store from '../store';
import { colorSet } from '../styles/colors';


export function RootAppSpinner() {

    const [activity, setActivity] = useState(false);

    store.subscribe(() => {
        setActivity(store.getState().AppActivityReducer.loading);
    });

    useEffect(() => {
        setActivity(store.getState().AppActivityReducer.loading);
    }, [store.getState().AppActivityReducer.loading])

    if (activity)
        return (
            <Modal visible={activity} transparent={true}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: `rgba(0,0,0,0.2)` }} >
                    <ActivityIndicator size='large' color={colorSet.primary} />
                </View>
            </Modal>
        )
    return null
}

export default RootAppSpinner
