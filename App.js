import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./src/Pages/MainScreen/MainScreen";
import RecipePage from "./src/Pages/RecipePage/Recipes";
import RecipeInfo from "./src/Pages/RecipeInfo/RecipeInfo";
import Ingredients from "./src/Pages/Ingredients/Ingredients";
import SelectedIngredients from "./src/Pages/SelectedIngredients/SelectedIngredients";
import RecipesbyIngredient from "./src/Pages/RecipesbyIngredient/RecipesbyIngredient";
import Favorites from "./src/Pages/FavoritesPage/Favorites";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const FavStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: "Get A Recipe" }}
      />
      <HomeStack.Screen
        name="RecipePage"
        component={RecipePage}
        options={{ title: "Recipes" }}
      />
      <HomeStack.Screen
        name="RecipeInfo"
        component={RecipeInfo}
        options={{ title: "Recipe Information" }}
      />
      <HomeStack.Screen
        name="Ingredients"
        component={Ingredients}
        options={{ title: "Ingredients" }}
      />
    </HomeStack.Navigator>
  );
}
function IngredientListStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="SelectedIngredients"
        component={SelectedIngredients}
        options={{ title: "Selected Ingredients" }}
      />
      <Stack.Screen
        name="RecipesbyIngredient"
        component={RecipesbyIngredient}
        options={{ title: "Recipes" }}
      />
      <Stack.Screen
        name="RecipeInfo"
        component={RecipeInfo}
        options={{ title: "Recipe Information" }}
      />
    </Stack.Navigator>
  );
}
function FavoritesStack() {
  return (
    <FavStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}>
      <FavStack.Screen
        name="FavoritesPage"
        component={Favorites}
        options={{ title: "Favorites" }}
      ></FavStack.Screen>
      <FavStack.Screen
        name="RecipeInfo"
        component={RecipeInfo}
        options={{ title: "Recipe Information" }}
      ></FavStack.Screen>
    </FavStack.Navigator>
  );
}
import IngredientListProvider from "./src/components/context/Provider";

export default function App() {
  return (
    <IngredientListProvider>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "IngredientListStack") {
                iconName = focused ? "list" : "list-outline";
              } else if (route.name === "Favorites") {
                iconName = focused ? "heart" : "heart-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: [
              {
                display: "flex",
              },
              null,
            ],
          })}
        >
          <Tab.Screen
            name="IngredientListStack"
            component={IngredientListStack}
            options={{ tabBarLabel: "Ingredient List" }}
          />
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Favorites" component={FavoritesStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </IngredientListProvider>
  );
}
