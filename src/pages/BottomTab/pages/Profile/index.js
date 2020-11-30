import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { IconProfile } from '../../../../assets';

const Profile = (navigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={IconProfile}/>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>Eka Arimbawa</Text>
                    <Text style={styles.mail}>ekatrojan05@gmail.com</Text>
                    <TouchableOpacity style={styles.boxinfo}>
                        <Icon name={'person'} color='#a0634e'size={24} />
                        <Text style={styles.textinfo}>Informasi Personal</Text>
                        <Icon name={'keyboard-arrow-right'} color={'#696969'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxinfo}>
                        <Icon name={'miscellaneous-services'} color='#a0634e'size={24} />
                        <Text style={styles.textinfo}>Pengaturan Akun</Text>
                        <Icon name={'keyboard-arrow-right'} color={'#696969'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxinfo}>
                        <Icon name={'backpack'} color='#a0634e'size={24} />
                        <Text style={styles.textinfo}>Transaksi</Text>
                        <Icon name={'keyboard-arrow-right'} color={'#696969'} />
                    </TouchableOpacity>
              
              <TouchableOpacity style={styles.buttonContainer} >
                <Text style={{color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}>Log out</Text>  
              </TouchableOpacity>              
                </View>
            </View>
      </View>
    )
}


const styles = StyleSheet.create({
    header:{
      backgroundColor: "#a0634e",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#5c4f4f",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
    //   flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    mail:{
      fontSize:12,
      color: "#696969",
      marginBottom: 20
    },
    boxinfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 25
    },
    textinfo: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '90%',
        color: '#696969'
    },
    buttonContainer: {
      marginTop:20,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width: '40%',
      borderRadius:30,
      backgroundColor: '#a0634e',
      elevation: 2
    },
  });
  

export default Profile;

