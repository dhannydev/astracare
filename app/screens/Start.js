import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Logo from "../../assets/logo.png";
import ButtonIniciar from "../../buttons/btn_iniciar";

const Start = ({ navigation }) => {
  const handleHome = () => {
    navigation.navigate("Inicio");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.welcome}>
        Bienvenido a tu app de salud, AstraCare
      </Text>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.containerButton}>
        <ButtonIniciar onPress={handleHome} />
        <Text style={styles.text}>Company. AstraCare</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1fcff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
  },

  welcome: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "left",
    margin: 20,
    marginTop: 40,
    textAlignVertical: "top",
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: "40%",
    alignSelf: "center",
  },

  containerButton: {
    alignItems: "center",
    marginTop: 70,
  },

  text: {
    fontSize: 12,
    marginTop: 20,
    fontWeight: "600",
  },
});

export default Start;
