import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={100}
          color="white"
        />
      </View>

      <View style={styles.form}>
        <Text
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#999"
        />
        <Text
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#999"
        />
        <Text
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver más</Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <MenuItem label="Documentos" />
        <MenuItem label="Notificaciones" />
        <MenuItem label="Rutina" />
        <MenuItem label="Salir" />
      </View>
    </View>
  );
}

const MenuItem = ({ label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuText}>{label}</Text>
    <FontAwesome name="chevron-right" size={16} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#005A79",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  form: {
    marginTop: -40,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    color: "#000",
    width: "90%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#E0E0E0",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
    width: "25%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
  menu: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  menuItem: {
    backgroundColor: "#E0E0E0",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    width: "90%",
    alignSelf: "center",
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
});
