import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons'
import { Divider } from 'react-native-elements'


export default function Cart({ route, navigation }) {

    const {addItem} = route.params
    const {lastScreen} = route.params

    const [newItem, setItem] = useState(addItem)
    const [cart, setCart] = useState([])
    const item = newItem[1]

    const renderCorrectReturnScreen = () => {
        if (lastScreen == "ProductDetails") {
            navigation.navigate("ProductDetails", {item})
        } else {
            navigation.navigate("Home", {addItem})
        }
    }
    return (
        <View style={styles.main}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity 
                onPress={() =>  navigation.goBack("ProductDetails",{item})}>
                    <Ionicons name="arrow-back" size={30} style={{color: '#242424', marginRight: 30}}/>
                </TouchableOpacity>
                <Text style={{
                    fontFamily: 'MontserratSemiBold',
                    fontSize: 20,
                    color: '#242424',
                }}>Cart</Text>
            </View>
            <View style={styles.titles}>
                <Text style={{
                    fontFamily: 'MontserratSemiBold',
                    fontSize: 16,
                    color: '#1c1c1c',
                    marginTop: 10
                }}>Cart count</Text>
                <Text style={{
                    fontFamily: 'MontserratSemiBold', 
                    fontSize: 16, 
                    color: '#8f8f8f',
                    marginVertical: 10
                    }}>3 items</Text>
            </View>

            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginVertical: 10}}>
                <View style={styles.itemWrapper}>
                    <View style={styles.imageWrapper}>
                    </View>
                    <View style={styles.itemExtra}>
                        <View style={styles.itemTrashWrapper}>
                            <View>
                                <Text style={{
                                    fontFamily: 'MontserratMedium',
                                    fontSize: 13
                                }}>Item name</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Ionicons name='trash-outline' size={20} style={{color: '#4580ff'}}/>
                                <Text style={{
                                    fontFamily: 'MontserratMedium',
                                    fontSize: 10,
                                    color: '#4580ff'
                                }}>REMOVE</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{
                                    fontFamily: 'MontserratMedium',
                                    color: '#8f8f8f',
                                    fontSize: 12,
                                    marginTop: 6
                                }}>Size: 25</Text>
                                <Text style={{
                                    fontFamily: 'MontserratMedium',
                                    color: '#8f8f8f',
                                    fontSize: 12,
                                    marginVertical: 6
                                }}>Color: red</Text>
                            </View>
                            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} 
                            onPress={() => navigation.navigate("ProductDetails")}>
                                <Entypo name='eye' size={20} style={{color: '#4580ff'}}/>
                                <Text style={{
                                    fontFamily: 'MontserratMedium',
                                    fontSize: 10,
                                    color: '#4580ff',
                                    marginLeft: 5
                                }}>PREVIEW</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.priceCountWrapper}>
                            <Text style={{
                                fontFamily: 'MontserratMedium',
                                fontSize: 16,
                                color: '#4580ff'
                            }}>$ 40</Text>
                            <View style={styles.countWrapper}>
                                <Feather name='minus-circle' size={25} style={{color: '#4580ff'}}/>
                                <Text style={{
                                    fontFamily: 'MontserratMedium',
                                    marginLeft: 10
                                }}>3</Text>
                                <AntDesign name='pluscircle' size={25} style={{color: '#4580ff', marginLeft: 10}}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.calculationWrapper}>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Items</Text>
                        <Text style={styles.calcPrice}>$ 1000.00</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Shipping fee</Text>
                        <Text style={styles.calcPrice}>$ 89.99</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Promo code</Text>
                        <Text style={styles.calcPrice}>$ -100.00</Text>
                    </View>
                    <Divider orientation='Horizontal' style={{marginVertical: 10}}/>
                    <View style={[styles.details, {marginVertical: 10}]}>
                        <Text style={styles.calcPrice}>Total</Text>
                        <Text style={[styles.calcPrice, {color: '#4580ff'}]}>$ 989.99</Text>
                    </View>                     
                </View>
            </ScrollView>

            <TouchableOpacity 
             onPress={() => navigation.navigate("Checkout", {addItem})}>
                <View style={styles.checkoutButton}>
                    <Text style={{
                        fontFamily: 'MontserratSemiBold',
                        fontSize: 16,
                        color: '#f2f2f2'
                    }}>Proceed to Checkout</Text>
                    <AntDesign name='arrowright' size={20} style={{
                        position: 'absolute',
                        right: 20,
                        color: '#f2f2f2'
                    }}/>
                </View>
            </TouchableOpacity>
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
        alignItems: 'center'
    },
    titles: { 
        marginTop: 10,
        justifyContent: 'space-between',
    },
    itemWrapper: {
        flexDirection: 'row',
    },
    imageWrapper: {
        width: 100,
        height: 100,
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemExtra: {
        width: 240
    },
    itemTrashWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    priceCountWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    countWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4580ff',
        marginBottom: 60,
        height: 50,
        borderRadius: 10
    },
    calculationWrapper: {
        backgroundColor: '#f2f2f2',
        marginTop: 50,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: 300,
        height: 180,
        marginHorizontal: 25
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    calcText: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
        color: '#9e9e9e'
    },
    calcPrice: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
    }
})