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
  Linking,
} from "react-native";

export default function App() {
  // class Converter extends Component {
  const [whatsApp, setWhatsApp] = useState('');
  const url = "https://api.whatsapp.com/send?phone=55";

  const [animeInput] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 90, y: 90 }))
  const [logoMarginTop] = useState(new Animated.Value(0))
  const [opacitySaudacao] = useState(new Animated.Value(0.6))
  // const [numero, setNumero] = useState("");


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

  function convertNumero() {
    const link_wts = "https://api.whatsapp.com/send?phone=55";
  }

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
          color: "white",
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
              backgroundColor: "transparent",
              opacity: opacity,
              transform: [{ translateY: animeInput.y }]
            }
          ]}
        >

          {/* DESCRICAO */}
          <Text style={styles.descricao}>Qual número deseja chamar?</Text>
          {/* FINAL DESCRICAO */}

          {/* INPUT */}
          <TextInput
            style={styles.input_entrada}
            onChangeText={whatsApp => setWhatsApp(whatsApp)}
            placeholder={'DD + Número'}
            keyboardType="numeric"
            placeholderTextColor="black"
            value={whatsApp}
          />
          {/* FINAL INPUT */}

          {/* BTN */}
          <TouchableOpacity style={styles.btn_default} onPress={() => {
            //Validação
            if (whatsApp === 0) {
              alert("informe o número de deseja chamar")
            }
            else if (whatsApp.length > 2) {
              Linking.openURL(url + whatsApp)
              { setWhatsApp("") }
            }
            else {
              alert("infome número completo")
            }
          }}>

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
    backgroundColor: "#525252d6",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",

    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  titulo: {
    fontFamily: "sans-serif",
    color: "white",
    fontSize: 30,
    opacity: 0.7,
    paddingTop: 10,
  },

  descricao: {
    fontSize: 20,
    color: "white",
    fontFamily: "sans-serif",
    marginBottom: 15,
    opacity: 1,
    maxWidth: "100%",
    textAlign: "center",
  },

  input_entrada: {
    height: 50,
    borderRadius: 15,
    fontFamily: "sans-serif",
    fontSize: 20,
    backgroundColor: "#f2f2f2",
    marginBottom: 30,
    padding: 15,
    textAlign: "center",
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
    fontSize: 30,
    fontFamily: "sans-serif",
    fontWeight: "500",
  },
});
