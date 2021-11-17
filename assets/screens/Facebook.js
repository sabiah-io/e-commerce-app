import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Google({ navigation }) {
    return (
        <View style={styles.main}>
            <View>
                <Text style={{fontFamily: 'MontserratMedium'}}>Uh oh! This feature is yet to be implemented. Sorry for any inconvenience caused :(</Text>
                <Text style={{fontFamily: 'MontserratMedium', marginTop: 20}}>Press the button below to go back to the login screen</Text>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.pressMe} onPress={() => navigation.navigate('Login')}>
                <Text style={{fontFamily: 'MontserratMedium', color: '#4580ff'}}>Press me</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    pressMe: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#4580ff',
        borderRadius: 10,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 