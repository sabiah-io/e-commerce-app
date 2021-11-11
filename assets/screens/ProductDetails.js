import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'
import { useNavigationState } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'


const height = Dimensions.get("window").height


export default function ProductDetails({ route, navigation }) {

    const {item} = route.params
    const state = useNavigationState(state => state)
    const routeName = state.routeNames[2]

    //const [cartPressed, setCartPressed] = useState(false)
    const [addCartTextPressed, setAddCartTextPressed] = useState(false)
    const [cart, setCart] = useState([])
    const [savedItemId, setSavedItemID] = useState([])


    const save = () => {
        if (!savedItemId.includes(item.id)) {
            setCart([...cart, item])
        }
    }


    const saveSavedItem = async () => {
        setSavedItemID([...savedItemId, item.id])
        try {
            await AsyncStorage.setItem("savedItem", JSON.stringify(savedItemId))
        } catch(err) {
            alert(err)
        }
    }

    const loadSavedItem = async() => {
        try {
            let item = await AsyncStorage.getItem("savedItem")
            item = JSON.parse(item)
            if (item !== null) [
                setSavedItemID(item)
            ]
        } catch(err) {
            alert(err)
        }
    }

    const saveToCart = async () => {
        try {
            if (addCartTextPressed === true) {
                await AsyncStorage.setItem("MyCart", JSON.stringify(cart))
            }
        }catch(err) {
            alert(err)
        }
    }

    const loadCart = async () => {
        try{
            let cart = await AsyncStorage.getItem("MyCart")
            cart = JSON.parse(cart)
            if (cart !== null) {
                setCart(cart)
            }
        }catch(err) {
            alert(err)
        }
    }

    
    const clearCart = async() => {
        try {
            await AsyncStorage.removeItem("MyCart")
        } catch(e) {
            alert(e)
        } finally {
            setCart([])
        }
    }

    const clearSaved = async() => {
        try {
            await AsyncStorage.removeItem("savedItem")
        } catch(e) {
            alert(e)
        } finally {
            setCart([])
        }
    }

    useEffect(() =>{
        loadCart()
        loadSavedItem()
    }, [])


    const colors = ['white', 'black', 'blue', 'purple']
    const listColors = colors.map((color, index) => 
        <View key={index} style={{
            backgroundColor: color, 
            width: 40, 
            height: 40, 
            borderRadius: 40,
            marginHorizontal: 20
        }}></View>
    )

    const shirtSizes = ['S', 'M', 'L', 'XL']
    const listShirtSizes = shirtSizes.map((shirtSize, index) =>
        <View key={index} style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderColor: '#4580ff',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            borderRadius: 50
        }}>
            <Text style={{color: '#4580ff'}}>{shirtSize}</Text>
        </View>
    )

    const shoeSizes = ['39', '40', '41', '42']
    const listShoeSizes = shoeSizes.map((shoeSize, index) =>
        <View key={index} style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderColor: '#4580ff',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            borderRadius: 50
        }}>
            <Text style={{color: '#4580ff'}}>{shoeSize}</Text>
        </View>
    )

    const renderProperItemData = () => {
        if (item.category === "shirt") {
            return(
                <View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Color</Text>
                        <View style={styles.colorSizeItems}>
                            {listColors}
                        </View>
                    </View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Size</Text>
                        <View style={styles.colorSizeItems}>
                            {listShirtSizes}
                        </View>
                    </View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c',
                            marginTop: 10
                        }}>Review</Text>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#8f8f8f',
                            marginVertical: 10
                            }}>No reviews</Text>
                    </View>
                    <View style={[styles.titles, {flexDirection: 'row', alignItems: 'center'}]}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Promo Code</Text>

                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#4580ff',
                            marginVertical: 10
                            }}>10% PO42GFD3</Text>
                    </View>
                    <View style={{marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="exclamationcircleo" size={12} color="black" />
                        <Text style={{fontFamily: 'MontserratRegular', fontSize: 12, marginLeft: 10}}>Don't forget to use code at checkout</Text>
                    </View>
                </View>
            )
        } else if (item.category === "shoe") {
            return(
                <View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Color</Text>

                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#8f8f8f',
                            marginVertical: 10
                            }}>N/A</Text>
                    </View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Size</Text>
                        <View style={styles.colorSizeItems}>
                            {listShoeSizes}
                        </View>
                    </View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c',
                            marginTop: 10
                        }}>Review</Text>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#8f8f8f',
                            marginVertical: 10
                            }}>No reviews</Text>
                    </View>
                    <View style={[styles.titles, {flexDirection: 'row', alignItems: 'center'}]}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Promo Code</Text>

                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#4580ff',
                            marginVertical: 10
                            }}>10% PO42GFD3</Text>
                    </View>
                    <View style={{marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="exclamationcircleo" size={12} color="black" />
                        <Text style={{fontFamily: 'MontserratRegular', fontSize: 12, marginLeft: 10}}>Don't forget to use code at checkout</Text>
                    </View>
                </View>
            )
        } else {
            return(
                <View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Color</Text>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#8f8f8f',
                            marginVertical: 10
                            }}>N/A</Text>
                    </View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Size</Text>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#8f8f8f',
                            marginVertical: 10
                            }}>N/A</Text>
                    </View>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Review</Text>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#8f8f8f',
                            marginVertical: 10
                            }}>No reviews</Text>
                    </View>
                    <View style={[styles.titles, {flexDirection: 'row', alignItems: 'center'}]}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: '#1c1c1c'
                        }}>Promo Code</Text>

                        <Text style={{
                            fontFamily: 'MontserratSemiBold', 
                            fontSize: 16, 
                            color: '#4580ff',
                            marginVertical: 10
                            }}>5% EER24Y75</Text>
                    </View>
                    <View style={{marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="exclamationcircleo" size={12} color="black" />
                        <Text style={{fontFamily: 'MontserratRegular', fontSize: 12, marginLeft: 10}}>Don't forget to use code at checkout</Text>
                    </View>
                </View>
            )
        }
    }

    const renderCorrectAddItemFunction = () => {
        setAddCartTextPressed(true)
        if (savedItemId.includes(item.id)) {
            navigation.navigate('Cart', {item, cart, lastScreen: routeName})
        }
    }

    const renderCorrectText = () => {
        if (addCartTextPressed === true || savedItemId.includes(item.id)) {
            return (
                <Text style={styles.addCartTextPressed}>go to cart</Text>
            )
        } else {
            return (
                <Text style={styles.addCartText}>add to cart</Text>
            )
        }
    }

    return (
        <View style={styles.main}>
            <TouchableOpacity style={{marginTop: 40, left: 20}} 
            onPress={() => [navigation.goBack({cart})]}>
                <Ionicons name="arrow-back" size={30} style={{color: '#f2f2f2'}}/>
            </TouchableOpacity>

            <View style={styles.sixtyContainer}>
                <View style={styles.rotatedBox}></View>
                <Image source={item.image} style={styles.imageSize}/>
            </View>

            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.fortyContainer}>
                <TouchableOpacity style={styles.cartIconWrapper} 
                onPress={() => [navigation.navigate("Cart", {item, cart, lastScreen: routeName})]}>
                    <Ionicons name='cart-sharp' size={32} style={{color: '#4580ff'}}/>
                </TouchableOpacity>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titles}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 18,
                            color: '#1c1c1c'
                        }}>Description</Text>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 13,
                            color: '#707070',
                            marginTop: 10
                            }}>{item.description}</Text>
                    </View>

                    <View>{renderProperItemData()}</View>
                </ScrollView>
            
                <View style={styles.priceAddCartWrapper}>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.priceText}>$ {item.price}</Text>
                    </View>
                    <TouchableOpacity style={[ addCartTextPressed === true || savedItemId.includes(item.id) ? styles.addCartWrapperPressed : styles.addCartWrapper]} 
                    onPress={() => [renderCorrectAddItemFunction(), save(), saveToCart(), saveSavedItem()]}>
                        {renderCorrectText()}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        //flex: 1,
        paddingTop: 10,
        backgroundColor: '#4580ff'
    },
    sixtyContainer: {
        height: height * 0.45,
        alignItems: 'center'
    },
    rotatedBox: {
        backgroundColor: '#f2f2f2',
        width: 260,
        height: 260,
        borderRadius: 30,
        transform: [{ rotate: '45deg'}],
        position: 'absolute',
        top: 50,
        shadowColor: "#4580ff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        zIndex: 1
    },
    imageSize: {
        resizeMode: 'contain', 
        height: 160, 
        width: 200, 
        position: 'absolute',
        top: 80,
        zIndex: 2
    },
    fortyContainer: {
        height: height * 0.45,
        backgroundColor: "#f2f2f2",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    cartIconWrapper: {
        position: 'absolute',
        right: 0,
        marginRight: 40,
        marginTop: -30,
        backgroundColor: '#f2f2f2',
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 64,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        zIndex: 1
    },
    itemName: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
        marginLeft: 20,
        paddingBottom: 5,
        color: '#f2f2f2'
    },
    colorSizeItems: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    titles: {
        marginHorizontal: 20, 
        marginTop: 10,
        justifyContent: 'space-between',
    },
    priceAddCartWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 40
    },
    priceText: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 18,
        color: '#f2f2f2'
    },
    addCartWrapper: {
        borderWidth: 1,
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4580ff',
        borderRadius: 10
    },
    addCartWrapperPressed: {
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4580ff',
        borderRadius: 10
    },
    priceWrapper: {
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4580ff',
        borderRadius: 10
    },
    addCartText: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 16,
        color: '#4580ff'
    },
    addCartTextPressed: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 16,
        color: '#f2f2f2'
    },
})