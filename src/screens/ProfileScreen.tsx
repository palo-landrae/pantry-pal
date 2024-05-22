import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { signOut } from "@/auth/AuthActions";
import { useContext } from "react";
import { AuthContext } from "@/auth/AuthContext";
import ProfileItem from "@/components/profile/ProfileItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamsList } from "src/navigation/profile/ProfileStackParamsList";

type Props = NativeStackScreenProps<ProfileStackParamsList, "ProfileMain">;

export default function ProfileScreen({ navigation }: Props) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={{ marginVertical: 10, alignItems: "center" }}>
        {user.avatarUrl ? (
          <Image source={{ uri: user.avatarUrl }} style={styles.avatarImage} />
        ) : (
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user.username.slice(0, 2)}</Text>
          </View>
        )}
        <Text style={styles.title}>{user.username}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Account")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <ProfileItem text="My Account" icon="user" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ResetPassword")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <ProfileItem text="Reset Password" icon="key" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("FAQ")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <ProfileItem text="FAQ" icon="flag" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={signOut}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <ProfileItem text="Log Out" icon="log-out" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "MavenPro_500Medium",
    fontSize: 28,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: "#f3f3f3",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 18,
    fontFamily: "MavenPro_500Medium",
    textTransform: "uppercase",
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
