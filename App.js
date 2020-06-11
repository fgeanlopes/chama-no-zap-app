import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [numero, setNumero] = useState("");

  function convertNumero() {}

  return (
    <View style={styles.container}>
      {/* LOGO DA APLICACAO */}
      <Text>Chama Zap</Text>

      <Text>Adicione o número no campo abaixoque deseja chamar.</Text>

      <TextInput
        style={styles.input_entrada}
        value={numero}
        onChangeText={(numero) => setNumero(numero)}
        placeholder={"Adicione o número aqui."}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.btn_default} onPress={convertNumero}>
        <Text>Chamar no Zap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
