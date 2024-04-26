import { useState } from "react";
import { TextInput, View, StyleSheet, Text, ScrollView } from "react-native";
import { Formik } from "formik";
import ToDo from "../components/createTemplateForm/ToDo";
import EndFormButtons from "../components/createTemplateForm/EndFormButtons";
import { writeFormData } from "../data/firestopreRealTime";
import { formatFormForFirebaseUpload } from "../formFormatter";
import { useNavigation } from "@react-navigation/native";
import { setDataFromDB } from "./HomeScreen";

const submitForm = (values, navigation, setToDos) => {
  const form = formatFormForFirebaseUpload(values);
  writeFormData(form);

  /*
   * Updating values in home screen so they
   * so it re-renders and shows the new objects
   */
  setDataFromDB(setToDos);

  navigation.navigate("Home");
};
const CreateTemplateScreen = ({ route }) => {
  const { setToDos } = route.params;
  const navigation = useNavigation();
  const [todoesNum, setToDosNum] = useState(Array(1).fill(0));

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{}}
      onSubmit={(values) => submitForm(values, navigation, setToDos)}
    >
      {({ handleChange, handleBlur, setFieldValue, handleSubmit, values }) => (
        <ScrollView>
          <View>
            <View style={styles.todoTitleContainer}>
              <Text style={styles.todoTitle}> To-Do Title </Text>
            </View>
            <TextInput
              style={[
                styles.textInput,
                {
                  marginHorizontal: 24,
                  marginBottom: 24,
                  fontFamily: "LexendDeca_400Regular",
                },
              ]}
              placeholder="Day of Week"
              onChangeText={handleChange("templateName")}
              onBlur={handleBlur("templateName")}
              value={values.templateName}
            />

            {todoesNum.map((exercise, index) => {
              return (
                <ToDo
                  key={index}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  index={index}
                  setFieldValue={setFieldValue}
                />
              );
            })}

            <EndFormButtons
              handleSubmit={handleSubmit}
              todoesNum={todoesNum}
              setToDosNum={setToDosNum}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "rgba(158, 150, 150, .2)",
    borderRadius: 8,
    padding: 5,
    fontSize: 25,
  },
  todoTitle: {
    fontFamily: "LexendDeca_400Regular",
    fontWeight: "bold",
    fontSize: 24,
  },
  todoTitleContainer: {
    marginVertical: 24,
    alignItems: "center",
  },
});

export default CreateTemplateScreen;
