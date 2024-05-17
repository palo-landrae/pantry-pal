import { Instruction } from "@/types/Instruction";
import { StyleSheet, Text, View, Image, TextBase } from "react-native";
import { Entypo } from "@expo/vector-icons";

const InstructionItem = (instruction: Instruction) => {
  return (
    <View style={styles.container}>
      <Entypo name="dot-single" size={20} />
      <Text style={styles.ingredientLabel}>{instruction.content}</Text>
    </View>
  );
};

export default InstructionItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    paddingRight: 20,
    borderRadius: 10,
    marginVertical: 4,
  },
  ingredientLabel: {
    fontSize: 12,
  },
});
