import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigationState } from '@react-navigation/core'


export default function Checkout({ route, navigation }) {

    const state = useNavigationState(state => state)
    const routeName = state.routeNames[4]

    return (
        <View style={styles.main}>
            <View style={styles.headerWrapper}>
                <View style={{flexDirection: 'row', marginTop: 10}}> 
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("Cart", {lastSreen: routeName})}>
                        <Ionicons name="arrow-back" size={30} style={{color: '#242424', marginRight: 30}}/>
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily: 'MontserratSemiBold',
                        fontSize: 20,
                        color: '#242424',
                    }}>Checkout</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical: 10, marginBottom: 20}}>
                <KeyboardAvoidingView>
                    <View style={styles.userDetails}>
                        <Text style={styles.infoText}>Full Name</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput/>
                        </View>
                        <Text style={styles.infoText}>Address</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput/>
                        </View>
                        <Text style={styles.infoText}>Phone</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput/>
                        </View>
                        <Text style={styles.infoText}>Email</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput/>
                        </View>

                        <View style={{marginTop: 20}}>
                            <Text style={styles.infoText}>Card Number</Text>
                        </View>
                        <View style={styles.cardNumberWrapper}>
                            <View>
                                <Image source={require("../images/visalogo.png")} 
                                style={{
                                    width: 20,
                                    height: 10,
                                    marginRight: 20
                                }} />
                            </View>
                            <TextInput placeholder='**** **** **** 3367' style={{width: '100%'}}/>
                        </View>

                        <View style={styles.expireCvvWrapper}>
                            <View>
                                <Text style={styles.infoText}>Expiration</Text>
                                <View style={[styles.textInputContainer, {width: 130}]}>
                                <TextInput placeholder='12/22'/>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.infoText}>CVV</Text>
                                <View style={[styles.textInputContainer, {width: 130}]}>
                                    <TextInput placeholder='***'/>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <View style={styles.placeOrderWrapper}>
                    <TouchableOpacity style={styles.homeButton} 
                     onPress={() => navigation.navigate("Home")}>
                        <AntDesign name='home' size={25} style={{color: '#4580ff'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.placeOrderButton}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: "#f2f2f2"
                        }}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    headerWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userDetails: {
        marginHorizontal: 30,
        marginTop: 30
    },
    infoText: {
        fontFamily: 'MontserratMedium',
        fontSize: 14,
        color: '#424242',
        marginBottom: 5
    },
    textInputContainer: {
        backgroundColor: '#f2f2f2',
        height: 50,
        marginBottom: 15,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    cardNumberWrapper: {
        backgroundColor: '#f2f2f2',
        height: 50,
        marginBottom: 20,
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    expireCvvWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    placeOrderWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
        marginTop: 70
    },
    homeButton: {
        borderWidth: 1,
        borderRadius: 10,
        width: 50,
        height: 50,
        borderColor: '#4580ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    placeOrderButton: {
        height: 50,
        width: 250,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4580ff',
        borderRadius: 10
    }
})