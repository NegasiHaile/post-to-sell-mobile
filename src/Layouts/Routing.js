import React from "react";
import { useSelector } from "react-redux";

// Native navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screeans
import {
  Home,
  Signin,
  Signup,
  ForgetPassword,
  Products,
  ProductDetail,
} from "../Screens";

// Dev components
import BottomNav from "./BottomNav";

const Stack = createNativeStackNavigator();

const Routing = ({ theme }) => {
  const profile = useSelector((state) => state.profile);

  console.warn(profile);
  return (
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
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            title: "Product Detail",
          }}
        />
      </Stack.Navigator>
      <BottomNav />
    </NavigationContainer>
  );
};

export default Routing;
