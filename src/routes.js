import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './screens/Main';
import Food from './screens/Foods';

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerLayoutPreset="center"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ea3c4f',
        },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{title: 'Ki sushi'}}
      />
      <Stack.Screen
        name="Foods"
        component={Food}
        options={{title: 'Minhas comidas'}}
      />
    </Stack.Navigator>
  );
}
