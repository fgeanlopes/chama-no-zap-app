import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {

  const [numero, setNumero] = useState("");

  const [animeInput] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 90, y: 90 }))
  const [logoMarginTop] = useState(new Animated.Value(0))
  const [opacitySaudacao] = useState(new Animated.Value(0.6))

  useEffect(() => {

    KeyboardDidShowListener = Keyboard.addListener("keyboardDidShow", KeyboardDidShowListener);
    KeyboardDidHideListener = Keyboard.addListener("keyboardDidHide", KeyboardDidHideListener);

    Animated.parallel([
      // ANIMACAO DO INPUT
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

  // TECLADO ABERTO
  function KeyboardDidShowListener() {
    Animated.parallel([
      Animated.timing(logo.y, {
        toValue: 90,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 90,
        duration: 100,
      }),
      Animated.spring(logoMarginTop, {
        toValue: 50,
        speed: 1,
      }),
      Animated.timing(opacitySaudacao, {
        toValue: 0,
        duration: 100,
      })
    ]).start()
  }

  // TECLADO FECHADO
  function KeyboardDidHideListener() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 90,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 90,
        duration: 100,
      }),
      Animated.spring(logoMarginTop, {
        toValue: 0,
        speed: 1,
      }),
      Animated.timing(opacitySaudacao, {
        toValue: 0.6,
        speed: 100,
      })
    ]).start();
  }


  function convertNumero() { }
  return (

    <KeyboardAvoidingView style={styles.tela}>
      <View style={styles.container}>

        {/* LOGO */}
        <Animated.Image
          style={{
            marginTop: logoMarginTop,
            width: logo.y,
            height: logo.x,
            borderRadius: 15,
          }}
          source={require("./assets/icon.png")}
        ></Animated.Image>
        {/* FINAL LOGO */}


        {/* TITULO  */}
        <Text style={styles.titulo}>Chama no Zap</Text>
        {/* FINAL TITULO */}

        {/* SAUDACAO */}
        <Animated.Text style={{
          fontSize: 20,
          paddingTop: 10,
          opacity: opacitySaudacao,
          maxWidth: "80%",
          textAlign: "center",
        }}>Seja bem vindo!</Animated.Text>
        {/* FINAL SAUDACAO */}

      </View >

      <View style={styles.container}>
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

          {/* DESCRICAO */}
          <Text style={styles.descricao}>Qual número deseja chamar?</Text>
          {/* FINAL DESCRICAO */}

          {/* INPUT */}
          <TextInput
            style={styles.input_entrada}
            value={numero}
            onChangeText={(numero) => setNumero(numero)}
            placeholder={"DD + Número"}
            keyboardType="numeric"
            placeholderTextColor="black"
          />
          {/* FINAL INPUT */}

          {/* BTN */}
          <TouchableOpacity style={styles.btn_default} onPress={convertNumero}>
            <Text style={styles.text_btn_default}>Chamar no Zap</Text>
          </TouchableOpacity>
          {/* FINAL BTN */}

          {/* FINAL VIEW ANIMADA */}
        </Animated.View>
      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  titulo: {
    fontFamily: "MuseoModerno-SemiBold",
    fontSize: 30,
    opacity: 0.7,
    paddingTop: 10,
  },



  descricao: {
    fontSize: 20,
    marginBottom: 15,
    opacity: 0.6,
    maxWidth: "100%",
    textAlign: "center",
  },

  input_entrada: {
    height: 50,
    borderRadius: 15,
    fontSize: 20,
    backgroundColor: "#f2f2f2",
    color: "black",
    marginBottom: 30,
    padding: 15,
    width: "100%",
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
