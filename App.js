import React from "react";

// Native navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Nativebase components
import { NativeBaseProvider, extendTheme, Box } from "native-base";

// Screeans
import { Home, Signin, Signup, ForgetPassword } from "./src/Screens";
import { Products } from "./src/Screens";

// Dev components
import { BottomNav } from "./src/Layouts";

// Constants
import { Colors } from "./src/Theme";

const Stack = createNativeStackNavigator();

export default () => {
  const theme = extendTheme({ colors: Colors });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary["900"],
            },
            headerTintColor: theme.colors.primary["50"],
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              title: "Sign In",
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              title: "Sign Up",
            }}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{
              title: "Forget Password",
            }}
          />
          <Stack.Screen
            name="Products"
            component={Products}
            options={{
              title: "All Products",
            }}
          />
        </Stack.Navigator>
        <BottomNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
