import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Boxes({ setToDos }) {
  const navigation = useNavigation();
  return (
    <View style={styles.boxesContainer}>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <View style={[styles.heroBox, { backgroundColor: "#1B1B1B" }]}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/dashboard.png")}
          ></Image>
        </View>
        <Text style={styles.textStyles}>To Do</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("CreateTemplate", { setToDos })}
      >
        <View style={styles.heroBox}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/writing.png")}
          ></Image>
        </View>
        <Text style={styles.textStyles}>Create New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("HistoryScreen")}
      >
        <View style={styles.heroBox}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/calendar.png")}
          ></Image>
        </View>
        <Text style={styles.textStyles}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <View style={styles.heroBox}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/share.png")}
          ></Image>
        </View>
        <Text style={styles.textStyles}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxesContainer: {
    margin: 24,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heroBox: {
    width: 65,
    height: 65,
    borderRadius: 15,
    borderColor: "#ECECEA",
    borderWidth: 1,
    marginBottom: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  icon: { width: 32, height: 32 },
  textStyles: {
    fontFamily: "LexendDeca_400Regular",
  },
});
