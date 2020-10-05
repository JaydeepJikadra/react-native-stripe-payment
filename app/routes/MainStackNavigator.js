import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../scenes/home/Home';
import PaymentScreen from '../scenes/payment/Payment';
import DetailScreen from '../scenes/detail/Detail';
import {screenTitle} from '../constants';
import * as colors from '../colors';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenTitle.HOME}
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: colors.secondaryColor,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: colors.primaryTextColor,
          headerBackTitleVisible: false,
        }}
        headerMode="float">
        <Stack.Screen
          name={screenTitle.HOME}
          component={HomeScreen}
          options={{title: screenTitle.HOME}}
        />
        <Stack.Screen
          name={screenTitle.PAYMENT}
          component={PaymentScreen}
          options={{title: screenTitle.PAYMENT}}
        />
        <Stack.Screen
          name={screenTitle.DETAIL}
          component={DetailScreen}
          options={{title: screenTitle.DETAIL}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStackNavigator;
