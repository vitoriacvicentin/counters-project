import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 28,
        textAlign: 'auto',
        fontWeight: 'bold',
    },
    viewTop:{
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        backgroundColor:'#000066',
        padding:20
    },
    fieldItem: {
        //display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        //borderTopWidth: 0.5,
      },
      ScrollView: {
        width: '100%',
        height: '100%',
    },
});