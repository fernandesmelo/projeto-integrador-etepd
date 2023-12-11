import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./styles";
import Separador from "../Separador";

export default function ProductInfoModal({ isVisible, onClose, product }) {
  return (
    <Modal
      style={styles.modal}
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{product.nome}</Text>
          <Text style={styles.modalText}>{product.info}</Text>
          <Separador />
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
