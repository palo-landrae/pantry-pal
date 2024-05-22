import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/types/Colors";

interface Props {
  text: string;
  icon: keyof typeof Feather.glyphMap;
}

const ProfileItem = ({ ...props }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Feather name={props.icon} size={18} color={COLORS.primary} />
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <Feather name="chevron-right" size={18} />
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 10,
    padding: 20,
  },
  innerContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "MavenPro_500Medium",
    textAlign: "left",
  },
});
