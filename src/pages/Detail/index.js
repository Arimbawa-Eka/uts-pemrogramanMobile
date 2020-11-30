import * as React from 'react';
import { Button, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, } from '@react-navigation/stack';
import { Home } from '../BottomTab/pages';
import { BusungeImg, FlintanImg, GronlidImg, BrimnesImg, LinnmonImg } from '../../assets'

function Busunge({ navigation }) {
    return (
        <View style={{width: '100%'}}>
            <Image source={BusungeImg}
            style={{width: '100%', height: 300}  } />
            <View style={styles.boxnamabarang}>
                    <Text style={styles.namabarang}>Busunge</Text>
                    <Text style={{alignSelf: 'flex-end', marginHorizontal: -30, marginVertical: 20}}>Rp.1000.000</Text>
            </View>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Deskripsi Produk</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Varian</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Review</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonKeranjang}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}><Icon name={'add-shopping-cart'} color={'#fff'} /></Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBeli}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}>Beli</Text>  
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

function Flintan ({ navigation }) {
    return (
        <View style={{width: '100%'}}>
            <Image source={FlintanImg}
            style={{width: '100%', height: 300}  } />
            <View style={styles.boxnamabarang}>
                    <Text style={styles.namabarang}>Flintan</Text>
                    <Text style={{alignSelf: 'flex-end', marginHorizontal: -30, marginVertical: 20}}>Rp.800.000</Text>
            </View>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Deskripsi Produk</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Varian</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Review</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonKeranjang}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}><Icon name={'add-shopping-cart'} color={'#fff'} /></Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBeli}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}>Beli</Text>  
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

function Gronlid ({ navigation }) {
    return (
        <View style={{width: '100%'}}>
            <Image source={GronlidImg}
            style={{width: '100%', height: 300}  } />
            <View style={styles.boxnamabarang}>
                    <Text style={styles.namabarang}>Gronlid</Text>
                    <Text style={{alignSelf: 'flex-end', marginHorizontal: -30, marginVertical: 20}}>Rp.1.200.000</Text>
            </View>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Deskripsi Produk</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Varian</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Review</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonKeranjang}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}><Icon name={'add-shopping-cart'} color={'#fff'} /></Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBeli}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}>Beli</Text>  
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

function Brimnes ({ navigation }) {
    return (
        <View style={{width: '100%'}}>
            <Image source={BrimnesImg}
            style={{width: '100%', height: 300}  } />
            <View style={styles.boxnamabarang}>
                    <Text style={styles.namabarang}>Brimnes</Text>
                    <Text style={{alignSelf: 'flex-end', marginHorizontal: -30, marginVertical: 20}}>Rp.1.800.000</Text>
            </View>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Deskripsi Produk</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Varian</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Review</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonKeranjang}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}><Icon name={'add-shopping-cart'} color={'#fff'} /></Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBeli}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}>Beli</Text>  
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

function Linnmon ({ navigation }) {
    return (
        <View style={{width: '100%'}}>
            <Image source={LinnmonImg}
            style={{width: '100%', height: 300}  } />
            <View style={styles.boxnamabarang}>
                    <Text style={styles.namabarang}>Linnmon</Text>
                    <Text style={{alignSelf: 'flex-end', marginHorizontal: -30, marginVertical: 20}}>Rp.500.000</Text>
            </View>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Deskripsi Produk</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Varian</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxinfo}>
                    <Text style={styles.infobarang} >Review</Text>
                    <Icon name={'keyboard-arrow-right'} color={'#696969'} />  
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonKeranjang}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}><Icon name={'add-shopping-cart'} color={'#fff'} /></Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBeli}>
                    <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}>Beli</Text>  
                </TouchableOpacity>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    boxnamabarang: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 2,
        // borderRadius: 25
    },
    boxinfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 2,
        // borderRadius: 25
    },
    namabarang: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '80%',
        color: '#696969',
        fontWeight: 'bold',
        fontSize: 20
    },
    infobarang: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '92%',
        color: '#696969',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonKeranjang: {
        marginTop:20,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#a0634e',
        elevation: 2
    },
    buttonBeli: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#a0634e',
        elevation: 2
    }
})



  
const Stack = createStackNavigator();

function Alldetail () {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Busunge" component={Busunge} />
            <Stack.Screen options={{headerShown: false}}name="Flintan" component={Flintan} />
            <Stack.Screen options={{headerShown: false}}name="Gronlid" component={Gronlid} />
            <Stack.Screen options={{headerShown: false}}name="Brimnes" component={Brimnes} />
            <Stack.Screen options={{headerShown: false}}name="Linnmon" component={Linnmon} />
            
        </Stack.Navigator>  
    )
}

const Detail = () => {
    return (
        <Stack.Navigator>  
            <Stack.Screen options={{headerShown: false}} name="Alldetail" component={Alldetail} />
        </Stack.Navigator>  
    )
}

export default Detail;