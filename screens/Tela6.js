import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Separador from "../components/Separador";
import ProductInfoModal from "../components/Modal";

const products = [
  {
    nome: "Café da Manhã",
    info: "Papa de aveia (96,51 Kcal)",
    image: require("./assets/cafe.png"),
  },
  {
    nome: "Almoço",
    info: "Arroz branco, feijão, salada + suco de abacaxi (197,27 Kcal)",
    image: require("./assets/almoco.png"),
  },
  {
    nome: "Lanche",
    info: "Maçã cortadas em cubos (75,04 Kcal)",
    image: require("./assets/lanche.png"),
  },
  {
    nome: "Jantar",
    info: "Sopa de frango + suco de abacaxi (161,23 Kcal)",
    image: require("./assets/jantar.png"),
  },
];

export default function Tela6() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const renderProducts = () => {
    return products.map((product, index) => (
      <View key={index} style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.texto}>{product.nome}</Text>
          <Text>00:00</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => openModal(product)}>
            <Image source={product.image} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Sexta-Feira</Text>
        {renderProducts()}

        {selectedProduct && (
          <ProductInfoModal
            isVisible={!!selectedProduct}
            onClose={closeModal}
            product={selectedProduct}
          />
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
    backgroundColor: "#FFFFFF",
    width: "200px",
  },
  image: {
    width: 200,
    height: 150,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  textoBotoes: {
    color: "white",
    textAlign: "center",
  },
});
