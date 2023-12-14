import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
} from "react-native";
import Separador from "../components/Separador";

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/imagemSuperiorEsquerdo.png")} style={styles.imagemSuperiorEsquerdo} />
      <Separador />
      <View style={styles.buttonContainer}>
        <Button
          title="Segunda-feira"
          onPress={() => navigation.navigate("Tela2")}
          color="#8CC63F"
        />
        <Separador />
        <Button
          title="Terça-feira"
          onPress={() => navigation.navigate("Tela3")}
          color="#8CC63F"
        />
        <Separador />
        <Button
          title="Quarta-feira"
          onPress={() => navigation.navigate("Tela4")}
          color="#8CC63F"
        />
        <Separador />
        <Button
          title="Quinta-feira"
          onPress={() => navigation.navigate("Tela5")}
          color="#8CC63F"
        />
        <Separador />
        <Button
          title="Sexta-feira"
          onPress={() => navigation.navigate("Refeições")}
          color="#8CC63F"
        />
       </View>
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
    height: 200, 
  },
  imagemInferiorDireito: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 300, 
    height: 200, 
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  buttonContainer: {
    width: "30%",
  },
});
