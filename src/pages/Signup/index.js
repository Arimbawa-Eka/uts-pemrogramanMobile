import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import FlatButton from '../../Button';

const Signup = ({navigation}) => {
    return(
        <View style={styles.container} >
            <View style={styles.containersatu}>
                <View style={styles.header}>
                    <Text style={styles.title}>Sign Up!</Text>
                    <Text style={styles.desc}>Halo, silakan lengkapi data kamu dulu</Text>
                </View>
            </View>
            <View style={styles.containerdua}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    borderColor: '#a0634e',
                    borderRadius: 25,
                    paddingVertical: 2
                }}>
                    <Icon 
                    name={'person'}
                    color='#a0634e'
                    size={24} />
                    <TextInput style={{
                        paddingHorizontal: 10,
                        maxWidth: '90%',
                        width: '90%'
                    }}
                    placeholder={'Username'}
                    placeholderTextColor={'#a0634e'}
                    color={'#a0634e'}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    borderColor: '#a0634e',
                    borderRadius: 25,
                    paddingVertical: 2
                }}>
                    <Icon 
                    name={'mail'}
                    color='#a0634e'
                    size={24} />
                    <TextInput style={{
                        paddingHorizontal: 10,
                        maxWidth: '90%',
                        width: '90%'
                    }}
                    placeholder={'Email'}
                    placeholderTextColor={'#a0634e'}
                    color={'#a0634e'}
                    keyboardType={'email-address'}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    borderColor: '#a0634e',
                    borderRadius: 25,
                    paddingVertical: 2
                }}>
                    <Icon 
                    name={'lock'}
                    color='#a0634e'
                    size={24} />
                    <TextInput style={{
                        paddingHorizontal: 10,
                        maxWidth: '90%',
                        width: '90%'
                    }}
                    placeholder={'Password'}
                    placeholderTextColor={'#a0634e'}
                    color={'#a0634e'}
                    secureTextEntry
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    borderColor: '#a0634e',
                    borderRadius: 25,
                    paddingVertical: 2
                }}>
                    <Icon 
                    name={'lock'}
                    color='#a0634e'
                    size={24} />
                    <TextInput style={{
                        paddingHorizontal: 10,
                        maxWidth: '90%',
                        width: '90%'
                    }}
                    placeholder={'Konfirmasi Password'}
                    placeholderTextColor={'#a0634e'}
                    color={'#a0634e'}
                    secureTextEntry
                    />
                </View>
                <View style={{
                marginHorizontal: 40,
                justifyContent: 'center',
                marginTop: 15,
                }}>
                    <FlatButton text='Signup' onPress={() => Alert.alert('Berhasil Sign up')} />
                </View>
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
        flex: 0.20
    },
    containerdua: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 20
    },
    header: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20
    },
    desc: {
        fontSize: 15,
        color: '#fff'
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5
    }

    


})

export default Signup;