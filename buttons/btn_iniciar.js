import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonIniciar({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#06aab6", "#1281d0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>Iniciar</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 200,
    marginTop: 110,
  },

  text: {
    fontSize: 22,
    color: "#FEFAE0",
    fontWeight: "bold",
    alignContent: "center",
  },

  button: {
    width: "130%",
    height: 50,
    borderRadius: 15,
    padding: 10,
    alignContent: "center",
    alignItems: "center",
  },
});
