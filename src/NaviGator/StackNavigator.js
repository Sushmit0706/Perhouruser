import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPassword from "../Register/RegisterPassword";
import LoginPassword from "../Login/LoginPassword";
import RegisterDetails from "../Register/RegisterDetails";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
            fullScreenGestureEnabled: true,
            navigationBarHidden: false,
          }}
        />

        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
            fullScreenGestureEnabled: true,
            navigationBarHidden: false,
          }}
        />
        <Stack.Screen
          name="details"
          component={RegisterDetails}
          options={{
            headerShown: false,
            fullScreenGestureEnabled: true,
            navigationBarHidden: false,
          }}
        />
        <Stack.Screen
          name="registerpassword"
          component={RegisterPassword}
          options={{
            headerShown: false,
            fullScreenGestureEnabled: true,
            navigationBarHidden: false,
          }}
        />
        <Stack.Screen
          name="loginpassword"
          component={LoginPassword}
          options={{
            headerShown: false,
            fullScreenGestureEnabled: true,
            navigationBarHidden: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
