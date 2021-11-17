import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, 
    Image, ScrollView, Dimensions, Async, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'
import { Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons'
import { Divider } from 'react-native-elements'


export default function Cart({ route, navigation }) {

    const {lastScreen} = route.params
    const {item} = route.params
    const {cart} = route.params

    const [cartB, setCartB] = useState(cart)
    const [mainCart, setMainCart] = useState([])
    let [count, setCount] = useState(1)
    const [itemPressed, setItemPressed] = useState(null)
    const [verify, setVerify] = useState(0)
    let totalItemPrice = 0

    for (let i = 0; i < mainCart.length; i++) {
        totalItemPrice += mainCart[i].price
    }

    const shippingfee = 49.99
    const promocode = 50


    let total = totalItemPrice + shippingfee - promocode


    // save cart to memory
    const saveCart = async() => {
        try {
            await AsyncStorage.setItem("cart", JSON.stringify(cartB))
        } catch(e) {
        }
    }


    // load cart from memory
    const loadCart = async() => {
        try {
            let cart = await AsyncStorage.getItem("cart")
            cart = JSON.parse(cart)
            if (cart !== null) {
                setMainCart(cart)
            }
        } catch(e) {
        }
    }


    // remove/empty cart from memory
    const clearCart = async() => {
        try {
            await AsyncStorage.removeItem("cart")
        } catch(e) {
        } finally {
            setMainCart([])
            setVerify(1)
        }
    }

    useEffect(() => {
        loadCart()
    }, [])

    //console.log(mainCart)

 
    const increaseCount = () => {
        setItemPressed(item.id)
        if (itemPressed == index) {
            setCount(count++)
        }
    }

    const decreaseCount = () => {
        setItemPressed(item.id)
        if (itemPressed == index) {
            setCount(count--)
        }
    }


    // pass some props based on the correct return screen
    const renderCorrectReturnScreen = () => {
        if (lastScreen == "ProductDetails") {
            navigation.navigate("ProductDetails", {item, verify})
            saveCart()
        } else {
            navigation.navigate("Home")
        }
    }


    // display items in cart
    const renderCartStatus = mainCart.map((item, index) =>
        <View key={index} style={styles.itemWrapper}>
            <View style={styles.imageWrapper}>
                <Image source={item.image} style={{resizeMode: 'contain', width: 80, height: 70}}/>
            </View>
            <View style={styles.itemExtra}>
                <View style={styles.itemTrashWrapper}>
                    <View>
                        <Text style={{
                            fontFamily: 'MontserratMedium',
                            fontSize: 13
                        }}>{item.name}</Text>
                    </View>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name='trash-outline' size={20} style={{color: '#4580ff'}}/>
                        <Text style={{
                            fontFamily: 'MontserratMedium',
                            fontSize: 10,
                            color: '#4580ff'
                        }}>REMOVE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style={{
                            fontFamily: 'MontserratMedium',
                            color: '#8f8f8f',
                            fontSize: 12,
                            marginTop: 6
                        }}>Size: N/A</Text>
                        <Text style={{
                            fontFamily: 'MontserratMedium',
                            color: '#8f8f8f',
                            fontSize: 12,
                            marginVertical: 6
                        }}>Color: N/A</Text>
                    </View>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} 
                    onPress={() => navigation.navigate("ProductDetails", {item})}>
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
                    }}>$ {item.price}</Text>
                    <View style={styles.countWrapper}>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => decreaseCount()}>
                            <Feather name='minus-circle' size={25} style={{color: '#4580ff'}}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: 'MontserratMedium',
                            marginLeft: 10
                        }}>{count}</Text>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => increaseCount()}>
                            <AntDesign name='pluscircle' size={25} style={{color: '#4580ff', marginLeft: 10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )


    // display prices, promo price, etc., 
    const renderCorrectPriceTemplate = () => {
        if (mainCart.length == 0) {
            return (
                <View style={styles.calculationWrapper}>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Items</Text>
                        <Text style={styles.calcPrice}>$ 0.00</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Shipping fee</Text>
                        <Text style={styles.calcPrice}>$ 0.00</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Promo code</Text>
                        <Text style={styles.calcPrice}>$ 0.00</Text>
                    </View>
                    <Divider orientation='Horizontal' style={{marginVertical: 10}}/>
                    <View style={[styles.details, {marginVertical: 10}]}>
                        <Text style={styles.calcPrice}>Total</Text>
                        <Text style={[styles.calcPrice, {color: '#4580ff'}]}>$ 0.00</Text>
                    </View>                     
                </View>
            )
        } else {
            return (
                <View style={styles.calculationWrapper}>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Items</Text>
                        <Text style={styles.calcPrice}>$ {parseFloat(totalItemPrice).toFixed(2)}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Shipping fee</Text>
                        <Text style={styles.calcPrice}>$ {shippingfee}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.calcText}>Promo code</Text>
                        <Text style={styles.calcPrice}>- $ {parseFloat(promocode).toFixed(2)}</Text>
                    </View>
                    <Divider orientation='Horizontal' style={{marginVertical: 10}}/>
                    <View style={[styles.details, {marginVertical: 10}]}>
                        <Text style={styles.calcPrice}>Total</Text>
                        <Text style={[styles.calcPrice, {color: '#4580ff'}]}>$ {parseFloat(total).toFixed(2)}</Text>
                    </View>                     
                </View>
            )
            
        }
    }
    
    return (
        <View style={styles.main}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity 
                onPress={() => lastScreen == 'ProductDetails' ? [renderCorrectReturnScreen(), saveCart()] : renderCorrectReturnScreen()}>
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{
                        fontFamily: 'MontserratSemiBold', 
                        fontSize: 16, 
                        color: '#8f8f8f',
                        marginVertical: 10
                        }}>{mainCart.length} item(s)</Text>
                    <TouchableOpacity onPress={() => [clearCart()]} 
                    style={{
                        borderWidth: 0.5,
                        width: 100,
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderColor: '#4580ff'
                        }}>
                        <Text style={{fontFamily: 'MontserratSemiBold', color: '#4580ff'}}>Clear Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginVertical: 10}}>
                {renderCartStatus}
                
                {renderCorrectPriceTemplate()}
            </ScrollView>

            <TouchableOpacity 
             onPress={() => [navigation.navigate("Checkout", {cart})]}>
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
        marginVertical: 10
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