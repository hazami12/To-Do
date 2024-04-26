import React from "react";
import { TextInput, View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import SetsAddSection from "./SetsAddSection";

const ToDo = ({
  index: todoIndex,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  const [sets, setSets] = useState(Array(1).fill(0));
  return (
    <>
      <View style={styles.set}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`Exercise ${todoIndex + 1}`}</Text>
        </View>
        <TextInput
          placeholder="Subject Title"
          style={styles.textInput}
          onChangeText={handleChange(`exercise${todoIndex}`)}
          onBlur={handleBlur(`exercise${todoIndex}`)}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            marginRight: 8,
            marginBottom: 8,
          }}
        >
          <Text style={styles.label}>Task</Text>
          <Text style={styles.label}>Note</Text>
          <Text style={styles.label}>Time Due</Text>
        </View>
        {sets.map((set, setIndex) => {
          return (
            <SetsAddSection
              key={setIndex}
              todoIndex={todoIndex}
              setIndex={setIndex}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />
          );
        })}
        <Pressable
          style={styles.button}
          onPress={() => {
            setSets((sets) => {
              let newSets = sets.slice();
              newSets.push(1);
              return newSets;
            });
          }}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "LexendDeca_400Regular",
    backgroundColor: "rgba(158, 150, 150, .2)",
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 5,
    fontSize: 25,
    marginBottom: 16,
  },
  textInputSmall: {
    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 4,
    padding: 3,
    width: 80,
    marginBottom: 16,
    textAlign: "center",
  },
  set: {
    backgroundColor: "white",
    marginBottom: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: "#ECECEA",
    borderRadius: 22,
    paddingBottom: 16,
  },
  title: {
    color: "white",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 22,
  },
  titleContainer: {
    height: 48,
    backgroundColor: "#1B1B1B",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingLeft: 8,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 17,
    color: "rgb(0, 122,225)",
  },
  label: {
    flex: 1,
    textAlign: "center",
    fontFamily: "LexendDeca_400Regular",
  },
});

export default ToDo;
