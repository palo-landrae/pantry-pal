import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState, useMemo } from "react";
import type { Recipe } from "@/types/Recipe";
import RecipeItem from "src/components/RecipeItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecipeStackParamList } from "src/navigation/recipe/RecipeStackParamsList";
import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "@/api/fetchRecipes";
import { COLORS } from "@/types/Colors";
import { fetchUserData } from "@/api/fetchUserData";
import Discover from "@/components/svg/Discover";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabParamsList } from "src/navigation/tabs/BottomTabParamsList";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type BottomTabProps = BottomTabScreenProps<BottomTabParamsList, "Home">;

type Props = BottomTabProps;

export default function HomeScreen({ navigation }: Props) {
  const user = fetchUserData();
  const [searchText, setSearchText] = useState("");

  const {
    data: recipes = [],
    isLoading,
    error,
  } = useQuery<Recipe[], Error>({
    queryKey: ["recipes"],
    queryFn: fetchAllRecipes,
  });

  const filteredRecipes = useMemo(() => {
    const searchTextLower = searchText.toLowerCase();
    if (searchTextLower.length === 0) return recipes;

    return recipes.filter((item) =>
      item.recipe_name.toString().toLowerCase().includes(searchTextLower),
    );
  }, [searchText, recipes]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "white" }}
      behavior="height"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "MavenPro_500Medium",
            color: "#a2a2a2",
            textTransform: "capitalize",
          }}
        >
          Hi, {user.username}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "MavenPro_500Medium",
          }}
        >
          What do you want to cook today?
        </Text>
        <View style={styles.inputContainer}>
          <Feather name="search" size={16} color={COLORS.primary} />
          <TextInput
            placeholder="Search for your query"
            placeholderTextColor="grey"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.inputField}
          />
          <Ionicons name="menu" size={16} color={COLORS.primary} />
        </View>
        <View
          style={[
            styles.highlightContainer,
            searchText.length !== 0 && { display: "none" },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.highlightSubtitle}>Discover</Text>
            <Text style={styles.highlightTitle}>
              Just launched a new feature!
            </Text>
            <TouchableOpacity
              style={{
                width: 80,
                height: 20,
                backgroundColor: COLORS.accent,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: "MavenPro_500Medium",
                  fontSize: 10,
                  textTransform: "capitalize",
                  color: "white",
                }}
                onPress={() => navigation.jumpTo("Category")}
              >
                Find Out
              </Text>
            </TouchableOpacity>
          </View>
          <Discover width={100} height={100} />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "MavenPro_500Medium",
          }}
        >
          All Recipes
        </Text>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={filteredRecipes}
            numColumns={2}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Home", {
                    screen: "RecipeDetails",
                    params: { recipe: item },
                    initial: false,
                  })
                }
                style={{ maxWidth: "50%", width: "100%" }}
              >
                <RecipeItem {...item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.recipe_id.toString()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 50,
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  inputField: {
    flex: 1,
    fontSize: 12,
  },
  input: {
    flex: 1,
    maxWidth: "80%",
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    color: "#949494",
  },
  highlightContainer: {
    width: "100%",
    backgroundColor: "black",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 102,
  },
  highlightTitle: {
    fontSize: 16,
    color: "white",
    fontFamily: "MavenPro_500Medium",
    marginBottom: 8,
  },
  highlightSubtitle: {
    fontSize: 10,
    fontFamily: "MavenPro_500Medium",
    color: "#f3f3f3",
  },
  flatlistContainer: {
    flex: 2,
    marginHorizontal: "auto",
    width: "100%",
    gap: 4,
  },
});
