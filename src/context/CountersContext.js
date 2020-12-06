import React, { createContext, useEffect, useState } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { cos } from 'react-native-reanimated';

const defaultValue = {
    counters: [],
    currentCounters: [],
    selectcounters: {
        id: null,
        number: 0,
    },
    setCounters: () => { },
    createCounters: () => { },
}

export const CountersContext = createContext(defaultValue);

export const CountersContextProvider = ({ children }) => {
    const [state, setState] = useState(defaultValue);


    const { counters, id, number, item, selectcounters } = state;

    const setCounters = (counters) => {
        setState((pv) => ({ ...pv, counters }))
    }
    const setSelectedCounters = (item) => {
        setState((pv) => ({ ...pv, selectcounters: item }))
    }

    const changeNumber = (number) => {
        const selectedCounter = { id: selectcounters.id, number }
        setState((pv) => ({ ...pv, selectcounters: selectedCounter }));
        let index = getIndex(counters, selectedCounter)
        counters[index] = selectedCounter
        setCounters(counters)
        updateCounters(counters)
    }

    const increment = (selectcounters) => {
        changeNumber(selectcounters.number + 1)
    };
    const decrement = (selectcounters) => {
        changeNumber(selectcounters.number - 1)
    };
    const reset = (selectcounters) => {
        changeNumber(0)
    };
    const remove = (selectcounters) => {
        setState((pv) => ({ ...pv, selectcounters: { id: selectcounters.id, number: 0 } }));
        let index = getIndex(counters, selectcounters)
        counters.splice(index, 1)
        setCounters(counters)
        updateCounters(counters)
        Alert.alert('Removido!', 'Contador removido com sucesso')

    };
    const updateCounters = async (counters) => {
        await AsyncStorage.setItem('Counters', JSON.stringify(counters))
    }
    const createCounters = async (counters) => {

        let storage = await AsyncStorage.getItem('Counters');
        try {
            storage = JSON.parse(storage);
            if (!storage || storage.length === 0) {
                storage = ([{ id: 0, number: 0 }]);
            }
            else {
                storage.push({ id: storage[storage.length - 1].id + 1, number: 0 });
            }
            await AsyncStorage.setItem('Counters', JSON.stringify(storage))
            setCounters(storage);
            Alert.alert('Sucesso!', 'O seu contador foi criado!')
        } catch (error) {
            Alert.alert('Erro ao criar contador');
        }
    }

    const getIndex = (counters, selectcounters) => {
        for (let i = 0; i < counters.length; i++) {
            if (counters[i].id == selectcounters.id) {
                return i
            }
        }
        return -1
    }

    useEffect(() => {
        AsyncStorage.getItem('Counters').then((data) => {
            try {
                const result = JSON.parse(data);
                if (result && Array.isArray(result) && result.length > 0) {
                    setCounters(result);
                }
            } catch (error) {
                console.log(error)
            }

        });
    }, []);
    return (
        <CountersContext.Provider value={{ counters, id, number, increment, decrement, reset, remove, selectcounters, setCounters, createCounters, setSelectedCounters }}>
            {children}
        </CountersContext.Provider>
    )
}