import React from 'react';
import App from './App';
import Setting from './Setting';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// just comment either of those and check perf as your needs

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
console.log('Updated ');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerBackTitleStyle: {fontSize: 22},
          headerStyle: {backgroundColor: '#fd0054'},
          statusBarStyle: 'auto',
        }}>
        <Stack.Screen
          name="App"
          component={App}
          options={{
            title: 'Home',
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setting',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
