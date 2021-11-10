import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, 
    TextInput, ScrollView, FlatList, Image, LogBox } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import catData from '../data/categories'
import todaysPickData from '../data/todaysPickAll'
import allData from '../data/all'
import capData from '../data/cap'
import glassData from '../data/glass'
import shirtData from '../data/shirt'
import shoeData from '../data/shoe'
import { useNavigationState } from '@react-navigation/core'



export default function Home({ route, navigation }) {

    const {cart1} = route.params
    const state = useNavigationState(state => state)
    const routeName = state.routeNames[1]


    const cart = []
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    console.log(shoeData)
    const [selectedCatID, setSelectedCat] = useState(1)
    const [selectedCatName, setSelectedCatName] = useState('All')
    const [liked, setLiked] = useState(false)
    const [selectedItemID, setSelectedItemID] = useState()

    const isLiked = ({item}) => {
        setLiked(!liked)
        setSelectedItemID(item.id)
        console.log(liked)
    }

    const toggleIsLiked = ({item}) => {
        if ( item.liked === liked) {
            return (
                <MaterialIcons name='favorite' size={20} style={{color: '#4580ff'}}/>
            )
        } else {
            return (
                <MaterialIcons name='favorite-outline' size={20} style={{color: '#4580ff'}}/>
            )
        }

    }

    const setNewCateogry = (item) => {
        setSelectedCat(item.id)
        setSelectedCatName(item.category)
    }

    const renderSelectedCategoryData = () => {
        if (selectedCatID === 1) {
            return (
                <View>
                    <Text style={styles.textAboveCard}>Today's Pick</Text>
                    <View>
                        <FlatList 
                        data={todaysPickData}
                        renderItem={renderTodaysPickData}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View>
                        <View style={[styles.textAboveCard, {flexDirection: 'row', alignItems: 'center'}]}>
                            <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10, marginTop: 30}}>Filtered by : </Text>
                            <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 18, marginTop: 30}}>{selectedCatName}</Text>
                        </View>
                        <FlatList 
                        numColumns={2}
                        data={allData}
                        renderItem={renderAllData}
                        keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            )
        }else if (selectedCatID === 2) {
            return (
                <View>
                    <View style={[styles.textAboveCard, {flexDirection: 'row', alignItems: 'center'}]}>
                        <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                        <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 18}}>{selectedCatName}</Text>
                    </View>
                    <FlatList 
                    numColumns={2}
                    data={shoeData}
                    renderItem={renderAllData}
                    keyExtractor={(item) => item.id}
                    />
                </View>
            )   
        }else if (selectedCatID === 3) {
            return (
               <View>
                   <View style={[styles.textAboveCard, {flexDirection: 'row', alignItems: 'center'}]}>
                       <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                       <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 18}}>{selectedCatName}</Text>
                   </View>
                   <FlatList 
                   numColumns={2}
                   data={shirtData}
                   renderItem={renderAllData}
                   keyExtractor={(item) => item.id}
                   />
               </View>
            )   
        }else if (selectedCatID === 4) {
            return (
               <View>
                   <View style={[styles.textAboveCard, {flexDirection: 'row', alignItems: 'center'}]}>
                       <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                       <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 18}}>{selectedCatName}</Text>
                   </View>
                   <FlatList 
                   numColumns={2}
                   data={glassData}
                   renderItem={renderAllData}
                   keyExtractor={(item) => item.id}
                   />
               </View>
            )   
        }else if (selectedCatID === 5) {
            return (
               <View>
                   <View style={[styles.textAboveCard, {flexDirection: 'row', alignItems: 'center'}]}>
                       <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                       <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 18}}>{selectedCatName}</Text>
                   </View>
                   <FlatList 
                   numColumns={2}
                   data={capData}
                   renderItem={renderAllData}
                   keyExtractor={(item) => item.id}
                   />
               </View>
            )   
        }
    }


    const renderCategoryData = ({item}) => {
        return (
            <TouchableOpacity onPress={() => setNewCateogry(item)}>
                <View style={[
                    item.id === selectedCatID ? styles.selectedCategory : styles.unselectedCategory,
                    {marginLeft: item.id === 1 ? 0 : 20}]}>
                    <Text style={[
                        item.id === selectedCatID ? styles.selectedCategoryDataText : styles.unselectedCategoryDataText
                    ]}>{item.category}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderTodaysPickData = ({item}) => {
        return (
            <View style={[styles.todaysPickItemsCard, {marginLeft: item.id === 1 ? 20 : 15}]}>
                <View style={styles.favoriteIcon}>
                    <TouchableOpacity onPress={() => isLiked({item})}>
                        {toggleIsLiked({item})}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {item})}>
                    <View>
                        <Image source={item.image} style={styles.imageSize}/>
                    </View>
                    <Text style={styles.todaysPickName}>{item.name}</Text>
                </TouchableOpacity>
                <View style={styles.todaysPickPriceWrapper}>
                    <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 16, color: 'white'}}>$ {item.price}</Text>
                </View>
            </View>
        )
    }

    const renderAllData = ({item}) => {
        return (
            <View style={styles.allItemsCard}>
                <View style={styles.favoriteIcon}>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {item})}>
                    <Image source={item.image} style={styles.imageSize}/>
                    <Text style={styles.todaysPickName}>{item.name}</Text>
                </TouchableOpacity>
                <View style={styles.todaysPickPriceWrapper}>
                    <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 16, color: 'white'}}>$ {item.price}</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.menuWrapper}>
                <Ionicons name="menu-outline" size={35} />
                <Text style={{fontFamily: 'MontserratBold', fontSize: 30, color: '#1c1c1c', marginLeft: 30}}>Welcome,</Text>
                <Text style={{fontFamily: 'MontserratBold', fontSize: 30, color: '#4580ff', marginLeft: 10}}>Fred!</Text>
            </View>

            <View style={styles.searchCart}>
                <View style={styles.searchWrapper}>
                    <Ionicons name="search" size={25} style={{marginHorizontal: 20}}/>
                    <TextInput placeholder='search product'/>
                </View>
                <View style={styles.cartWrapper}>
                    <TouchableOpacity  
                    onPress={() => navigation.navigate("Cart", {cart, lastScreen: routeName})}>
                        <Ionicons name='ios-cart' size={25} style={{color: 'white'}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.categoryWrapper}>
                <Text style={{fontFamily: 'MontserratSemiBold', fontSize: 18, marginTop: 30}}>Categories</Text>
                <FlatList 
                data={catData}
                renderItem={renderCategoryData}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </View>

            <ScrollView 
            style={{marginVertical: 20}} 
            bounces={true}
            showsVerticalScrollIndicator={false}>
                {renderSelectedCategoryData()}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },
    menuWrapper: {
        marginVertical: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchCart: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchWrapper: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        width: '82%',
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#f2f2f2'
    },
    cartWrapper: {
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#4580ff'
    },
    unselectedCategory: {
        width: 75,
        height: 35,
        marginTop: 20,
        borderColor: '#4580ff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    selectedCategory: {
        width: 75,
        height: 35,
        marginTop: 20,
        backgroundColor: '#4580ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    unselectedCategoryDataText: {
        fontFamily: 'MontserratMedium',
        color: '#4580ff',
        fontSize: 12
    },
    selectedCategoryDataText: {
        fontFamily: 'MontserratMedium',
        color: '#f2f2f2',
        fontSize: 12
    },
    categoryWrapper: {
        marginHorizontal: 20,
    },
    imageSize: {
        resizeMode: 'contain', 
        height: 100, 
        width: 160, 
        marginTop: 33,
    },
    textAboveCard: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20
    },
    todaysPickItemsCard: {
        height: 260,
        width: 170,
        backgroundColor: '#f2f2f2',
        marginLeft: 15,
        marginRight: 5,
        borderRadius: 20,
        paddingTop: 15,
        position: 'relative'
    },
    allItemsCard: {
        height: 260,
        width: 170,
        backgroundColor: '#f2f2f2',
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 20,
        paddingTop: 15,
        position: 'relative'
    },
    favoriteIcon: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 20, 
        marginBottom: 10,
        backgroundColor: "white",
        position: 'absolute',
        left: '75%',
        top: 8,
        width: 34,
        height: 34,
        borderColor: '#4580ff',
        //borderWidth: 1,
        borderRadius: 20,
        zIndex: 1
    },
    todaysPickName: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 13,
        marginHorizontal: 10,
        marginTop: 30,
        marginBottom: 10,
        color: '#757575'
    },
    todaysPickPriceWrapper: {
        backgroundColor: '#4580ff',
        width: 100,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 40,
        position: 'absolute',
        top: 215
    },
})