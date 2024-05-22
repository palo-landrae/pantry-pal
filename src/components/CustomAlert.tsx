import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

const CustomAlert = () => {
  const [visible, setVisible] = useState(false);

  const showAlert = () => {
    setVisible(true);
  };

  const closeAlert = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <Button title="Show Custom Alert" onPress={showAlert} />
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={closeAlert}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Custom Alert</Text>
            <Text style={styles.modalMessage}>
              This is a custom alert message.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeAlert}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CustomAlert;
