import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  renderers,
  MenuTrigger,
} from "react-native-popup-menu";
import {
  addToDoToCalendar,
  deleteDocument,
  updateLastPerformedDate,
} from "../../data/firestopreRealTime";
import ToDoCard from "../singleToDo/ToDoCard";

const { SlideInMenu } = renderers;

const ToDoCardWithPressMenu = (props) => {
  const todo = props.todo;

  const title = props.todo.name;
  const lastPreformed = props.todo.lastPreformed;
  const exercises = props.todo.exercises;
  const key = props.todo.key;
  const SetItemChange = props.SetItemChange;

  const navigation = useNavigation();
  return (
    <View key={todo.key}>
      <Menu renderer={SlideInMenu}>
        <MenuTrigger
          customStyles={{
            TriggerTouchableComponent: TouchableWithoutFeedback,
          }}
        >
          <ToDoCard todo={todo}></ToDoCard>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            style={{ padding: 36, backgroundColor: "#1B1B1B" }}
            onSelect={() => {
              navigation.navigate("ToDoScreen", {
                title,
                lastPreformed,
                exercises,
                key,
              });
              updateLastPerformedDate(
                todo.key,
                new Date().toLocaleDateString()
              );
              addToDoToCalendar();
              SetItemChange((value) => !value);
            }}
          >
            <Text
              style={{
                fontFamily: "LexendDeca_700Bold",
                fontSize: 19,
                color: "white",
              }}
            >
              Start Activity
            </Text>
          </MenuOption>
          <MenuOption
            // style={{ padding: 36 }}
            onSelect={() => {
              deleteDocument("users", key).then(
                SetItemChange((value) => !value)
              );
            }}
          >
            <Text
              style={{
                padding: 36,
                fontFamily: "LexendDeca_400Regular",
                fontSize: 16,
                color: "red",
              }}
            >
              Delete
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default ToDoCardWithPressMenu;
