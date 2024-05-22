import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  category_name: string;
  category_icon: ImageSourcePropType;
}

export default function CategoryCard(props: Props) {
  return (
    <View style={[styles.container]}>
      <Image style={styles.image} source={props.category_icon} />
      <Text
        style={{
          fontFamily: "MavenPro_500Medium",
        }}
      >
        {props.category_name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "98%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f3f3f3",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    margin: 1,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
