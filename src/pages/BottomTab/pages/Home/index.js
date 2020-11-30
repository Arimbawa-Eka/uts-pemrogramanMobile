import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { BusungeImg, FlintanImg, GronlidImg, BrimnesImg, LinnmonImg } from '../../../../assets';



const Home = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.containersatu}>
                <View style={styles.header}>
                    <Text style={styles.title}>Halo Eka</Text>
                    <Text style={styles.desc}>Temukan berbagai macam furniture di sini</Text>
                </View>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <Icon 
                        name={'search'}
                        color={'#a0634e'}
                        size={20} />
                        <TextInput 
                        underlineColorAndroid='transparent'
                        placeholder='Cari Furniture'
                        placeholderTextColor='#a0634e'
                        color={'#a0634e'}
                        style={{
                            fontWeight:'100',
                            fontSize: 15,
                            width: '90%'
                        }} />
                    </View>
                </View>
            </View>
            <View style={styles.containerdua}>
                <ScrollView>
                    <View style={styles.boxcontent}>
                        <View style={{width: '50%'}}>
                            <Text style={styles.catalog}>Rekomendasi</Text>
                            <View style={{
                                height: 4,
                                width: 115,
                                marginTop: -5
                            }}></View>
                        </View> 

                        <View style={{width: '50%', alignItems: 'flex-end'}}>
                            <TouchableOpacity style={styles.morebutton}>
                                <Text style={styles.moretext}>More</Text>

                            </TouchableOpacity>
                        </View>
                    </View>


                    
                    <View style={{width: '100%'}}>
                        <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{height:250}} >

                                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail',  {screen: 'Alldetail', params: {screen: 'Busunge'} })}>
                                    <Image source={BusungeImg} style={{width: 160, height: 160 }} />
                                    <View style={{paddingHorizontal: 12, paddingVertical: 10}}>
                                        <Text style={{fontWeight: 'bold', color: '#a0634e' }}>Busunge</Text>
                                        <Text style={{fontSize: 12, color: '#5c4f4f'}}>Rp.1.000.000</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail',  {screen: 'Alldetail', params: {screen: 'Flintan'} })}>
                                    <Image source={FlintanImg} style={{width: 160, height: 160 }} />
                                    <View style={{paddingHorizontal: 12, paddingVertical: 10}}>
                                        <Text style={{fontWeight: 'bold', color: '#a0634e' }}>Flitan</Text>
                                        <Text style={{fontSize: 12, color: '#5c4f4f'}}>Rp.800.000</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail',  {screen: 'Alldetail', params: {screen: 'Gronlid'} })}>
                                    <Image source={GronlidImg} style={{width: 160, height: 160 }} />
                                    <View style={{paddingHorizontal: 12, paddingVertical: 10}}>
                                        <Text style={{fontWeight: 'bold', color: '#a0634e' }}>Gronlid</Text>
                                        <Text style={{fontSize: 12, color: '#5c4f4f'}}>Rp.1.200.000</Text>
                                    </View>
                                </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View style={styles.boxcontent}>
                        <View style={{width: '50%'}}>
                            <Text style={styles.catalog}>Populer</Text>
                            <View style={{
                                height: 4,
                                backgroundColor: '#ble5d3',
                                width: 115,
                                marginTop: -5
                            }}></View>
                        </View>


                        <View style={{width: '50%', alignItems: 'flex-end'}}>
                            <TouchableOpacity style={styles.morebutton}>
                                <Text style={styles.moretext}>More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{width: '100%'}}>
                        <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{height:250}} >

                                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail',  {screen: 'Alldetail', params: {screen: 'Brimnes'} })}>
                                    <Image source={BrimnesImg} style={{width: 160, height: 160 }} />
                                    <View style={{paddingHorizontal: 12, paddingVertical: 10}}>
                                        <Text style={{fontWeight: 'bold', color: '#a0634e' }}>Brimnes</Text>
                                        <Text style={{fontSize: 12, color: '#5c4f4f'}}>Rp.2000.000</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail',  {screen: 'Alldetail', params: {screen: 'Linnmon'} })}>
                                    <Image source={LinnmonImg} style={{width: 160, height: 160 }} />
                                    <View style={{paddingHorizontal: 12, paddingVertical: 10}}>
                                        <Text style={{fontWeight: 'bold', color: '#a0634e' }}>Linnmon</Text>
                                        <Text style={{fontSize: 12, color: '#5c4f4f'}}>Rp.500.000</Text>
                                    </View>
                                </TouchableOpacity>
                        </ScrollView>
                    </View>
    
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0634e'
    },
    containersatu: {
        marginVertical: 10
    },
    containerdua: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20
    },
    header: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    desc: {
        fontSize: 14,
        opacity: 0.80,
        color: '#fff',
        marginHorizontal: 10,

    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 10,

    },
    search: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    boxcontent: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        width: '100%',
        alignItems: 'center'
    },
    catalog: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#5c4f4f'
    },
    morebutton: {
        backgroundColor: '#a0634e',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15
    },
    moretext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13
    },
    gradiendcard: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 10,
        marginTop: 220,
        top: 0
    },
    card: {
        height: 220,
        elevation: 2,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: 160
    }

    


})



export default Home;