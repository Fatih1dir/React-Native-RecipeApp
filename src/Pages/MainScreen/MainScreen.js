import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import styles from "./MainScreen.style";
import useFetch from "../../hooks/useFetch/useFetch";
import { RAND_RECIPE_URL,API_KEY } from "@env";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Item = ({ title, imgSource, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={styles.logo}
      source={{
        uri: imgSource,
      }}
    />
  </TouchableOpacity>
);

function MainScreen({ navigation }) {
  /*const { data, loading, error } = useFetch(RAND_RECIPE_URL+API_KEY);

  const parsedData = JSON.parse(JSON.stringify(data));
  const results = parsedData.results;*/

  function navigatetoRecipe() {
    navigation.navigate("RecipePage");
  }
  function navigatetoIngredients() {
    navigation.navigate("Ingredients");
  }

  /*if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }*/

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Recipecontainer}>
        <FlatList
          horizontal
          data={results}
          renderItem={({ item }) => (
            <Item title={item.title} imgSource={item.image} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button} onPress={navigatetoRecipe}>
          <Text>Search a Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigatetoIngredients}>
          <Text>Search Recipes with Ingredients</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const results = [
  {
    id: 654439,
    image: "https://spoonacular.com/recipeImages/654439-312x231.jpg",
    imageType: "jpg",
    title: "Pan Seared Shrimp & Scallops Over Bacon-Corn-Chile Relish",
  },
  {
    id: 632199,
    image: "https://spoonacular.com/recipeImages/632199-312x231.jpg",
    imageType: "jpg",
    title: "Almond Torte With Cream & Cherries",
  },
  {
    id: 658277,
    image: "https://spoonacular.com/recipeImages/658277-312x231.jpg",
    imageType: "jpg",
    title: "Rice Pilaf",
  },
  {
    id: 635342,
    image: "https://spoonacular.com/recipeImages/635342-312x231.jpg",
    imageType: "jpg",
    title: "BLT Sandwich",
  },
  {
    id: 664748,
    image: "https://spoonacular.com/recipeImages/664748-312x231.jpg",
    imageType: "jpg",
    title: "Veggie Meatloaf",
  },
  {
    id: 631732,
    image: "https://spoonacular.com/recipeImages/631732-312x231.png",
    imageType: "png",
    title: "Caponata Style Celery Spaghetti",
  },
  {
    id: 1096034,
    image: "https://spoonacular.com/recipeImages/1096034-312x231.jpg",
    imageType: "jpg",
    title: "Smoked Jalapeño Poppers with Bacon, Apple, and Brie",
  },
];

export default MainScreen;
