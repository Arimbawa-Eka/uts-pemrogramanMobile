import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { AkunIlustration } from '../../assets';
import { Icon } from 'react-native-elements';
import FlatButton from '../../Button';


const Login = ({navigation}) => {
    return(
        <View style={{backgroundColor: '#fff', height: '100%'}}>
           <Image 
           source={AkunIlustration}
           style={{width: '100%', height: '40%', marginTop: 30}}
            />

            <Text style={{
                fontSize: 28, 
                alignSelf: 'center',
                fontWeight: 'bold'
                }} >Halo, Selamat Datang
            </Text>
            <Text style={{
                marginHorizontal: 40,
                textAlign: 'center',
                marginTop: 4,
                opacity: 0.5
            }}>Ayo login dan temukan berbagai macam
                furniture yang Anda butuhkan!
            </Text>
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
                placeholder={'Username atau Email'}
                placeholderTextColor={'#a0634e'}
                color={'#a0634e'}
                keyboardType={'email-address'} />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                borderWidth: 2,
                marginTop: 10,
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
                marginHorizontal: 40,
                justifyContent: 'center',
                marginTop: 15,
            }}
             >
                <FlatButton text='login' onPress={() => navigation.replace('BottomTab')} />
            </View>
            <Text style={{
                alignSelf: 'center',
                color: '#a0634e',
                paddingVertical: 30,
                textTransform: 'uppercase',
                fontWeight: 'bold'
            }}>Belum punya akun? <Text style={{
                textDecorationLine: 'underline'
            }} onPress={() => navigation.navigate('Signup')} >Ayo Sign up</Text>
            </Text>

        </View>
    )
}

export default Login;