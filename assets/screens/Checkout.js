import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Home({ navigation }) {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={styles.main}>
            <Text style={{fontFamily: 'MontserratRegular'}}>Checkout</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})