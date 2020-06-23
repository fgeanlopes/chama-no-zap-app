import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
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

import {
  Tela,
  Container,
  Titulo,
  Descricao,
  CampoEntrada,
  BtnEnviar,
  TituloBtn,
} from './styles';

export default function App() {
  const [whatsApp, setWhatsApp] = useState('');
  const url = "https://api.whatsapp.com/send?phone=55";

  const [animeInput] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity] = useState(new Animated.Value(1));
  const [opacitySaudacao] = useState(new Animated.Value(.6))

  const image = { uri: "https://reactjs.org/logo-og.png" };

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
  function KeyboardDidShowListener() {
    Animated.parallel([
      Animated.timing(opacitySaudacao, {
        toValue: 0,
        duration: 100,
      })
    ]).start()
  }
  function KeyboardDidHideListener() {
    Animated.parallel([
      Animated.timing(opacitySaudacao, {
        toValue: 0.6,
        speed: 100,
      })
    ]).start();
  }

  return (

    <Tela>
      <ImageBackground style={styles.image} source={require("./assets/fundoApp.png")}>
        <Container>
          <Titulo>
            Chama no
          </Titulo>
          <View style={styles.traco_decorado}></View>
          <Titulo style={styles.tituloGrande}>
            Zap!
           </Titulo>
          <View style={styles.traco_decorado_grande}></View>
        </Container>
        <Container>
          <Animated.View
            style={[
              styles.container, {
                width: "100%",
                opacity: opacity,
                transform: [{ translateY: animeInput.y }]
              }
            ]}
          >
          </Animated.View>
          {/* <Descricao ></Descricao> */}

          <Animated.Text style={{
            fontSize: 25,
            color: "#fff",
            // backgroundColor: "green",
            fontFamily: "sans-serif",
            position: "relative",
            fontWeight: "bold",
            bottom: 25,
            width: "100%",
            textAlign: "center",
            opacity: opacitySaudacao,

          }}>Qual número deseja chamar?</Animated.Text>

          <Animated.View
            style={[
              styles.container, {
                width: "100%",
                opacity: opacity,
                transform: [{ translateY: animeInput.y }]
              }
            ]}
          >
            <CampoEntrada
              onChangeText={whatsApp => setWhatsApp(whatsApp)}
              placeholder={'DD + Número'}
              keyboardType="numeric"
              placeholderTextColor="#fff"
              value={whatsApp}
            />

            <BtnEnviar onPress={() => {
              if (whatsApp === 0) {
                alert("informe o número de deseja chamar")
              }
              else if (whatsApp.length > 10) {
                Linking.openURL(url + whatsApp)
                { setWhatsApp("") }
              }
              else {
                alert("infome número completo")
              }
            }}>
              <TituloBtn>Chamar no Zap</TituloBtn>
            </BtnEnviar>
          </Animated.View>
        </Container>

      </ImageBackground>
    </Tela >
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    minHeight: 400,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  tituloGrande: {
    fontSize: 60,
    paddingLeft: -45,
    lineHeight: 80,
    fontWeight: "bold",
  },
  traco_decorado: {
    width: "100%",
    position: "relative",
    bottom: 23,
    backgroundColor: "#25d366",
    maxWidth: "10%",
    marginLeft: "-90%",
    height: 5,
  },
  traco_decorado_grande: {
    width: "40%",
    position: "relative",
    right: 25,
    top: 60,
    backgroundColor: "#fff",
    height: 7,
  },
});

