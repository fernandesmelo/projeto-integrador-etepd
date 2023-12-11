import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Separador from "../components/Separador";

export default function Tela2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Segunda-feira</Text>
      <Separador />
      <Button
        title="Ir para Tela 1"
        onPress={() => navigation.navigate("Tela1")}
      />
      <Separador />
      <Button
        title="Ir para Tela 3"
        onPress={() => navigation.navigate("Tela3")}
      />
      <Separador />
      <Button
        title="Ir para Tela 4"
        onPress={() => navigation.navigate("Tela4")}
      />
      <Separador />
      <Button
        title="Ir para Tela 5"
        onPress={() => navigation.navigate("Tela5")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
