import { TextInput, View, StyleSheet, Text } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";

export default function SetsAddSection({
  todoIndex,
  setIndex,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontFamily: "LexendDeca_400Regular",
        }}
      >
        {setIndex + 1}
      </Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          keyboardType="numeric"
          style={styles.textInputSmall}
          placeholder="Note"
          onChangeText={handleChange(
            `weight ToDo: ${todoIndex}, S: ${setIndex}`
          )}
          onBlur={handleBlur(`weight ToDo: ${todoIndex} S: ${setIndex}`)}
        />
      </View>
  
      <TextInput
        keyboardType="numeric"
        style={styles.textInputSmall}
        placeholder="Time"
        onChangeText={handleChange(
          `reps ToDo: ${todoIndex}, S: ${setIndex}`
        )}
        onBlur={handleBlur(`reps ToDo: ${todoIndex} S: ${setIndex}`)}
      ></TextInput> 
    </View>
  );
}

const styles = StyleSheet.create({
  textInputSmall: {
    fontFamily: "LexendDeca_400Regular",
    backgroundColor: "rgba(150, 150, 150, .1)",
    borderRadius: 4,
    padding: 3,
    width: 100,
    marginRight: 17,
    marginBottom: 8,
    textAlign: "center",
  },
  scrollPickerContainer: { width: 60, margin: 5, flex: 1 },
});