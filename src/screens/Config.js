import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import useSafeAreaStyles from '../hooks/useSafeArea';
import globalStyles from '../styles/globalStyles';
import { CountersContext } from '../context/CountersContext';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const initialState = {
    counters: [],
}

export const Config = (props) => {
    const [state, setState] = useState(initialState);
    const stylesSA = useSafeAreaStyles();
    const countersContext = useContext(CountersContext);
    const { counters, id, number } = state;
    let selectcounters = countersContext.selectcounters

    const onPressCreate = (v) => {
        setState((pv) => ({ ...pv, counters: { id: id + 1, number: 0 } }));
        onPressContext(counters)
    }

    const onPressContext = async (counters) => {
        countersContext.createCounters(counters)
    }
    const increment = (selectcounters) => {
        countersContext.increment(countersContext.selectcounters)
    };
    const decrement = () => {
        countersContext.decrement(countersContext.selectcounters)
    };
    const reset = () => {
        countersContext.reset(countersContext.selectcounters)
    };
    const remove = () => {
        countersContext.remove(countersContext.selectcounters)
    };
    return (
        <View style={[stylesSA.container]}>
            <View style={[styles.View]}>
                <View style={[globalStyles.viewTop]}>
                    <Text style={[globalStyles.title]}>
                        {'Config'}
                    </Text>
                </View>
                <ScrollView style={globalStyles.ScrollView} >
                    <View style={globalStyles.fieldItem}>
                        <TouchableOpacity style={styles.buttom} onPress={onPressCreate}>
                            <Text style={styles.text}>Add Counter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttom} onPress={remove}>
                            <Text style={styles.text}>Remove Counter</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        {(selectcounters.id === null
                            ? <Text style={styles.subtitle}>
                                {'Selected Counter'}
                            </Text>
                            : <Text style={styles.subtitle}>
                                {'Selected Counter: ' + `${selectcounters?.id}`}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.fieldItem}>
                        <TouchableOpacity style={styles.buttomControl} onPress={increment} >
                            <Ionicons name="md-add-circle-outline" size={24} color="#00e600" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttomControl} onPress={decrement}>
                            <AntDesign name="minuscircleo" size={24} color="#ff0000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttomControl} onPress={reset}>
                            <MaterialCommunityIcons name="numeric-0-circle-outline" size={24} color="#ff9900" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}

export default Config

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#0099ff'
    },
    buttom: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 5,
        width: 150,
        height: 60,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#4d79ff',
        flex: 1,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'black',
        fontSize: 25,
        padding: 20,
        fontWeight: 'bold'
    },
    buttomControl: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 5,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

})