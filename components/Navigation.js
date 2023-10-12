import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GameSelectionScreen from '../screens/GameSelectionScreen';
import TicTacToeScreen from "../screens/TicTacToeScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GameSelection">
                <Stack.Screen name="GameSelection" component={GameSelectionScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Game" component={TicTacToeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
