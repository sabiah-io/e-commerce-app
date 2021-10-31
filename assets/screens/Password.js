import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Home({ navigation }) {
    return (
        <View style={styles.main}>
            <Text style={{fontFamily: 'MontserratRegular'}}>Sorry you forgot your password but this feature is not available yet.</Text>

            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                <Text style={{fontFamily: 'MontserratRegular', marginTop: 30, color: 'blue'}}>Click here to access your access your account just this one time.</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
    }
})