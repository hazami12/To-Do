import { View, Text, StyleSheet, Platform } from "react-native";
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Set = ({ index, reps, weight }) => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.set}>
      <Text style={styles.textFont}>Task: {index + 1}</Text>
      <Text style={styles.textFont}>Time Due: {reps}</Text>
      <Text style={styles.textFont}>Note: {weight}</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox
          color="#007AFF"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.doneText}>{checked ? "Done" : "Not Done"}</Text>
      </View>
    </View>
  );
};

const ExerciseLog = ({ exercise }) => {
  const name = exercise.name;
  const reps = exercise.reps;
  const sets = exercise.sets;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>

      {sets.map((set, index) => {
        return (
          <Set key={index} index={index} reps={set.reps} weight={set.weight} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: "#ECECEA",
    borderRadius: 22,
    paddingBottom: 16,
  },
  titleContainer: {
    height: 48,
    backgroundColor: "#1B1B1B",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingLeft: 8,
    marginBottom: 24,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontFamily: "LexendDeca_400Regular",
    fontSize: 22,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 10,
    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  set: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEA",
  },
  textFont: {
    fontFamily: "LexendDeca_400Regular",
    color: "#1B1B1B",
    marginBottom: 8,
  },
  doneText: {
    marginLeft: 10,
    color: "#007AFF",
  },
});

export default ExerciseLog;
