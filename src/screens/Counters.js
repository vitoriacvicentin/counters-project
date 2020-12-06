import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList, ScrollView, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import useSafeAreaStyles from '../hooks/useSafeArea';
import { CountersContext } from '../context/CountersContext';
import globalStyles from '../styles/globalStyles';

const initialState = {
    select: true,
}

const Counters = ({ navigation }) => {
    const [state, setState] = useState(initialState);
    const countersContext = useContext(CountersContext);
    const stylesSA = useSafeAreaStyles();
    const { counters } = countersContext

    const onPressSelected = (item) => {
        itemSelected(item)
    }

    const itemSelected = async (item) => {
        countersContext.setSelectedCounters(item)
        navigation.navigate('Config')
    }

    return (
        <View style={[stylesSA.container]}>
            <View style={globalStyles.viewTop}>
                <Text style={globalStyles.title}>
                    {'Counters'}
                </Text>
            </View>
            <View style={[stylesSA.footer,styles.viewcontainer]}>
                <FlatList
                    data={counters}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={true}
                    style={{ marginBottom: 100 }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.viewcontainer}>
                                <TouchableOpacity style={styles.touch} onPress={() => { onPressSelected(item) }}>
                                    <Text style={styles.counter}>{'Counter ' + `${item.id}`}</Text>
                                    <View style={styles.viewbottom}>
                                        <Text style={styles.number}>{`${item.number}`}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Counters
const styles = StyleSheet.create({
    touch: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        width: 300,
        height: 200,
        borderTopWidth: 1,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    counter: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold'
    },
    number: {
        color: 'black',
        fontSize: 100,
        fontWeight: 'bold',

    },
    viewbottom: {
        alignItems: 'flex-end'
    },
    viewcontainer: {
        alignItems: 'flex-end',
        backgroundColor: '#0099ff',
    }

})
