import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { StackParamsList } from "../../routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [number, setNumber] = useState("");
  const { signOut } = useContext(AuthContext);

  async function openOrder() {
    if (number === "") {
      return;
    }

    try {
      const response = await api.post(`/order`, {
        table: Number(number),
      });

      navigation.navigate("Order", {
        number: number,
        order_id: response.data.id,
      });
      setNumber("");
    } catch (err) {
      Alert.alert("Erro", "Não foi possível abrir a mesa");
    }
  }

  function handleLogout() {
    signOut();
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Novo Pedido</Text>

      <TextInput
        placeholder="Numero da mesa"
        placeholderTextColor="#f0f0f0"
        keyboardType="numeric"
        style={styles.input}
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1d1d2e",
  },
  logoutButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#ff5f5f",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#101026",
    paddingHorizontal: 8,
    borderRadius: 4,
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
  button: {
    backgroundColor: "#3fffa3",
    width: "90%",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    marginVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#101026",
    fontWeight: "bold",
  },
});
