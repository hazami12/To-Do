import {
  StyleSheet,
  View,
  Text,
  Platform,
  Button,
  Pressable,
} from "react-native";
import React from "react";

export default function EndFormButtons({ handleSubmit, setToDosNum }) {
  const addField = () => {
    setToDosNum((todosNum) => {
      let newToDos = todosNum.slice();
      newToDos.push(1);
      console.log(newToDos);
      return newToDos;
    });
  };
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <>
          <Button onPress={addField} title="Add Exercise" />
          <Button style={styles.button} onPress={handleSubmit} title="Submit" />
        </>
      ) : (
        <>
          <Pressable style={styles.button} onPress={addField}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  buttonText: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: 17,
    color: "rgb(0, 122,225)",
  },
  container: {
    marginBottom: 16,
  },
});
