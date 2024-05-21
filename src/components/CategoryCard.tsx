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
    width: 100,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f3f3f3",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    margin: 2,
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});
