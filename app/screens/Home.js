import { Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/logo.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <StatusBar style="light" />
      <Text style={styles.welcome}>Bienvenido de nuevo, user_name!</Text>
      <Text style={styles.frase}>
        El mejor seguimiento a tu consulta médica
      </Text>
      <View style={styles.containerSelect}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="time-outline" size={32} color="black" />
          <Text style={styles.buttonText}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="qr-code-outline" size={32} color="black" />
          <Text style={styles.buttonText}>Código QR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slogan}>
        <Image source={Logo} style={styles.Logo} />
        <Text style={styles.sloganText}>
          Más que una app, un aliado para tú salud
        </Text>
      </View>
    </View>
  );
}

const styles = {
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

  welcome: {
    fontSize: 30,
    textAlign: "left",
    margin: 10,
    marginTop: 60,
    marginTop: -180,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlignVertical: "top",
  },

  frase: {
    fontSize: 17,
    textAlign: "left",
    margin: 10,
    marginTop: 25,
    marginLeft: 20,
    color: "#fff",
    fontWeight: "600",
    textAlignVertical: "top",
  },

  containerSelect: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 80,
    padding: 30,
  },

  button: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  buttonText: {
    marginTop: 8,
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },

  slogan: {
    marginTop: 10,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 50,
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 10,
    height: "28%",
  },

  Logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
    alignSelf: "center",
  },

  sloganText: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 10,
    lineHeight: 24,
    alignSelf: "center",
    maxWidth: 250,
  },
};
