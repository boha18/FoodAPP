
import React from 'react';
import {
    Text,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen, SplashScreen, WelcomeScreen } from '../screens';

const bottomNav = createBottomTabNavigator();

const NvigBar = () => {
    return (
        <NavigationContainer>
            <bottomNav.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}>
                <bottomNav.Screen name="SplashScreen" component={SplashScreen} />
                <bottomNav.Screen name="WelcomeScreen" component={WelcomeScreen} />
            </bottomNav.Navigator>
        </NavigationContainer>
    )
};

export default NvigBar;