import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tela1 from "./screens/Tela1";
import Tela2 from "./screens/Tela2";
import Tela3 from "./screens/Tela3";
import Tela4 from "./screens/Tela4";
import Tela5 from "./screens/Tela5";
import Refeições from "./screens/Tela6";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8CC63F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Dias da Semana" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
        <Stack.Screen name="Refeições" component={Refeições} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
