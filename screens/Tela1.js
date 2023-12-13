import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Separador from "../components/Separador";

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/imagemSuperiorEsquerdo.png")} style={styles.imagemSuperiorEsquerdo} />
      <Separador />
      <Button
        title="Segunda-feira"
        onPress={() => navigation.navigate("Tela2")}
      />
      <Separador />
      <Button
        title="Terça-feira"
        onPress={() => navigation.navigate("Tela3")}
      />
      <Separador />
      <Button
        title="Quarta-feira"
        onPress={() => navigation.navigate("Tela4")}
      />
      <Separador />
      <Button
        title="Quinta-feira"
        onPress={() => navigation.navigate("Tela5")}
      />
      <Separador />
      <Button
        title="Sexta-feira"
        onPress={() => navigation.navigate("Tela6")}
      />
      <Separador />
      <Image source={require("./assets/imagemInferiorDireito.png")} style={styles.imagemInferiorDireito} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagemSuperiorEsquerdo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300, 
    height: 100, 
  },
  imagemInferiorDireito: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 300, 
    height: 100, 
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  confirmar: {
    width: 150,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  cancelar: {
    width: 150,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  textoBotoes: {
    color: "white",
    textAlign: "center",
  },
});
