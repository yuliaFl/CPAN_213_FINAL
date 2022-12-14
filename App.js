import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./components/homePage";
import Login from "./components/login";
import MoviePage from "./components/moviePage"; 
import MovieSearch from "./components/movieSearch";
import MovieSearchGuest from "./components/movieSearchGuest";
import Navigation from "./components/navigation";
import Register from "./components/register";
import WatchList from "./components/watchList";
import Welcome from "./components/welcome";

const Stack = createNativeStackNavigator();

function MyStack() {
  var options = {
    headerStyle: { backgroundColor: '#262361' },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Group screenOptions={options}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Movies n' Me" component={Navigation} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MoviePage" component={MoviePage} />
      <Stack.Screen name="MovieSearch" component={MovieSearch} />
      <Stack.Screen name="MovieSearchGuest" component={MovieSearchGuest} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name ="WatchList" component={WatchList}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});