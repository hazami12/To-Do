import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useFonts,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
  useEffect,
  useState,
  ToDoCardWithPressMenu,
  getFormData,
  Boxes,
  StyleSheet,
} from "../components/home/homeBarrel";

const HomeScreen = () => {
  const [ToDos, setToDos] = useState([]);
  const [itemChange, SetItemChange] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_700Bold,
  });

  useEffect(() => {
    setDataFromDB(setToDos);
    setDataLoaded(true);
  }, [itemChange]);

  if (fontsLoaded && dataLoaded) {
    return (
      <>
        <View style={styles.home}>
          <ScrollView>
            <Text style={styles.heroText}>Hi John 👋</Text>
            <Text style={styles.subHeroText}>What are you going to do?</Text>

            <Boxes setToDos={setToDos} />

            {ToDos.map((todo) => {
              return (
                <ToDoCardWithPressMenu
                  todo={todo}
                  SetItemChange={SetItemChange}
                />
              );
            })}
          </ScrollView>
        </View>
        {/* <BottomBar /> */}
      </>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  home: { flex: 1, backgroundColor: "white" },
  heroText: {
    fontSize: 29,
    fontFamily: "LexendDeca_700Bold",
    marginLeft: 24,
    marginTop: 32,
    marginBottom: 16,
    color: "#1B1B1B",
  },
  subHeroText: {
    fontSize: 16,
    fontFamily: "LexendDeca_400Regular",
    color: "#1B1B1B",
    marginLeft: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;

export function setDataFromDB(setToDos) {
  const data = getFormData();
  // The time out is for the data to load
  setTimeout(async function () {
    let actualData = data["_z"];
    const todoObjectsArray = createToDoObjects(actualData);
    setToDos(todoObjectsArray);
  }, 1000);
}

export function createToDoObjects(actualData) {
  let todoObjectsArray = [];
  for (let index = 0; index < actualData.length; index++) {
    let todoObject = {};
    todoObject.name = actualData[index].name;
    todoObject.exercises = actualData[index].exercises;
    todoObject.lastPerformed = actualData[index].lastPerformed;
    todoObject.key = actualData[index].key;

    todoObjectsArray.push(todoObject);
  }
  return todoObjectsArray;
}
