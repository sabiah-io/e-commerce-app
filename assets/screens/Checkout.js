import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, Modal } from 'react-native'
import Constants from 'expo-constants'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useNavigationState } from '@react-navigation/core'
import * as ImagePicker from 'expo-image-picker'


export default function Checkout({ route, navigation }) {

    const state = useNavigationState(state => state)
    const routeName = state.routeNames[4]

    const [image, setImage] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisibleEmptyValues, setModalVisibleEmptyValues] = useState(false)
    const [cardNumber, setCardNumber] = useState(null)

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
        setImage(result.uri);
      }
    };

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
                            <TextInput keyboardType='numbers-and-punctuation'/>
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
                            <TextInput 
                            placeholder='**** **** **** 3367' 
                            style={{width: '100%'}}
                            onChangeText={setCardNumber}
                            value={cardNumber}
                            keyboardType='numeric'
                            />
                        </View>

                        <View style={styles.expireCvvWrapper}>
                            <View>
                                <Text style={styles.infoText}>Expiration</Text>
                                <View style={[styles.textInputContainer, {width: 130}]}>
                                <TextInput 
                                placeholder='12/22'
                                keyboardType='numbers-and-punctuation'
                                />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.infoText}>CVV</Text>
                                <View style={[styles.textInputContainer, {width: 130}]}>
                                    <TextInput 
                                    placeholder='***'
                                    keyboardType='numeric'
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
                    <Text style={{fontFamily: 'MontserratMedium', color: '#4a4a4a'}}>OR</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        width: 200,
                        height: 40,
                        borderColor: '#4580ff',
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => pickImage()}>
                        <Text style={{fontFamily: 'MontserratMedium', color: '#4580ff'}}>Upload image of CC</Text>
                    </TouchableOpacity>
                    {image && <Image source={{ uri: image }} style={{ width: 300, height: 200, marginTop: 20, borderRadius: 15 }} />}
                </View>

            </ScrollView>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleEmptyValues}
                    onRequestClose={() => {
                        setModalVisibleEmptyValues(!modalVisibleEmptyValues)
                        }}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, {alignItems: 'center', width: 300, height: 150}]}>
                            <View>
                                <Text>Please fill in your credit card details or upload an image of it</Text>
                            </View>
                            <TouchableOpacity style={{
                                backgroundColor: '#4580ff',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 60,
                                height: 30,
                                borderRadius: 10,
                                marginTop: 25
                            }} onPress={() => setModalVisibleEmptyValues(!modalVisibleEmptyValues)}>
                                <Text style={{fontFamily: 'MontserratMedium', color: '#f2f2f2'}}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    //Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, {width: 300, height: 200}]}>
                            <View style={{alignItems: 'center'}}>
                                <Text style={[styles.orderText, {marginBottom: 20}]}>Order placed!</Text>
                                <Text style={styles.orderText}>Order ID: #2572783518</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 50, justifyContent: 'space-between'}}>
                                <TouchableOpacity 
                                style={styles.close}
                                onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{fontFamily: 'MontserratMedium', color: '#4580ff'}}>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={styles.thankYou}
                                onPress={() => [setModalVisible(!modalVisible), navigation.navigate('Home')]}>
                                    <Text style={{fontFamily: 'MontserratMedium', color: '#f2f2f2'}}>Thank You</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>    
            <View style={styles.placeOrderWrapper}>
                    <TouchableOpacity style={styles.homeButton} 
                     onPress={() => navigation.navigate("Home")}>
                        <AntDesign name='home' size={25} style={{color: '#4580ff'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.placeOrderButton} 
                    onPress={() => cardNumber == null ? setModalVisibleEmptyValues(true) : setModalVisible(true)}>
                        <Text style={{
                            fontFamily: 'MontserratSemiBold',
                            fontSize: 16,
                            color: "#f2f2f2"
                        }}>Place Order</Text>
                    </TouchableOpacity>
                </View>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 22,
      },
    modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
        //marginVertical: 20,
        marginBottom: 40
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
    },
    orderText: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 15,
        color: '#4580ff'
    },
    close: {
        borderWidth: 1,
        width: 100,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4580ff'
    },
    thankYou: {
        width: 100,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4580ff'
    }
})