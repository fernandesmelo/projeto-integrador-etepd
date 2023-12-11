import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Separador from "../components/Separador";

export default function Tela5({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Esta é a Tela 5</Text>
      <Separador />
      <Button
        title="Voltar para Tela 1"
        onPress={() => navigation.navigate("Tela1")}
      />
      <Separador />
      <Button
        title="Voltar para Tela 2"
        onPress={() => navigation.navigate("Tela2")}
      />
      <Separador />
      <Button
        title="Voltar para Tela 3"
        onPress={() => navigation.navigate("Tela3")}
      />
      <Separador />
      <Button
        title="Voltar para Tela 4"
        onPress={() => navigation.navigate("Tela4")}
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
