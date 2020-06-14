import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";

export default function App() {
  const [numero, setNumero] = useState("");

  const [animeInput] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(animeInput.y, {
        toValue: 0,
        speed: 1,
        bounciness: 0,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start()
  }, [])

  function convertNumero() { }
  return (
    // CONTAINER
    <View style={styles.container}>

      {/* LOGO */}
      <Image
        style={styles.img_logo}
        source={require("./assets/icon.png")}
      ></Image>
      {/* FINAL LOGO */}

      {/* TITULO  */}
      <Text style={styles.titulo}>Chama no Zap</Text>
      {/* FINAL TITULO */}

      {/* DESCRICAO */}
      <Text style={styles.descricao}>Qual número deseja chamar?</Text>
      {/* FINAL DESCRICAO */}

      {/* VIEW DE ANIMACAO */}
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{
              translateY: animeInput.y
            }
            ]
          }
        ]}
      >

        {/* INPUT */}
        <TextInput
          style={styles.input_entrada}
          value={numero}
          onChangeText={(numero) => setNumero(numero)}
          placeholder={"Adicione o número aqui."}
          keyboardType="numeric"
        />
        {/* FINAL INPUT */}

        {/* BTN */}
        <TouchableOpacity style={styles.btn_default} onPress={convertNumero}>
          <Text style={styles.text_btn_default}>Chamar no Zap</Text>
        </TouchableOpacity>
        {/* FINAL BTN */}

        {/* FINAL VIEW ANIMADA */}
      </Animated.View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",

    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  img_logo: {

  },

  titulo: {
    fontSize: 30,
    opacity: 0.7,
  },

  descricao: {
    fontSize: 16,
    opacity: 0.6,
    maxWidth: "80%",
    textAlign: "center",
  },

  input_entrada: {
    height: 50,
    borderRadius: 15,
    fontSize: 20,
    backgroundColor: "#f2f2f2",
    color: "black",
  },

  btn_default: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    width: "100%",
    height: 60,

    backgroundColor: "#25d366",
    borderRadius: 15,
  },
  text_btn_default: {
    color: "white",
    fontSize: 25,
  },
});
