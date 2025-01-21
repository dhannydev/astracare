import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabButton } from "./components";

// Screens
import Home from "./app/screens/Home";
import Start from "./app/screens/Start";
import Chat from "./app/screens/Chat";
import Profile from "./app/screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Inicio() {
  const tabs = [
    {
      id: 1,
      title: "Chat",
      screen: "Chat",
      icon: "chat",
      Component: Chat,
    },
    {
      id: 2,
      title: "Home",
      screen: "Home",
      icon: "home",
      Component: Home,
    },
    {
      id: 3,
      title: "Profile",
      screen: "Profile",
      icon: "account",
      Component: Profile,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {tabs.map((item, index) => (
        <Tab.Screen
          key={item.id}
          name={item.title}
          component={item.Component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton item={item} {...props} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function Auth(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    position: "absolute",
    bottom: 20,
    marginHorizontal: 16,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#dadada",
    backgroundColor: "#076da6",
  },
});
