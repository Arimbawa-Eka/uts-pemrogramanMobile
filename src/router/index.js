import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Signup, BottomTab, Detail } from '../pages';





const Stack = createStackNavigator();



// Router disini mengumpulkan semua page yang  terkumpul di pages/indexedDB.js
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Splash" 
            component={Splash }
            options={{
                headerShown: false
            }} />
            <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
                headerShown: false
            }} />
            <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{
                headerShown: false
            }} />
            <Stack.Screen 
            name="BottomTab" 
            component={BottomTab}
            options={{
                headerShown: false
            }} />
            <Stack.Screen 
            name="Detail" 
            component={Detail}
            options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    )
}

export default Router;