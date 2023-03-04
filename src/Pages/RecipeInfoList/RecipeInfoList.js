import React,{ useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import styles from "./RecipeInfoList.style";
import {RECIPE_INFO,RAND_RECIPE_URL,API_KEY} from "@env";
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch/useFetch';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Item = ({ name, amount, units }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name.toUpperCase()}</Text>
    <Text style={styles.title}>
      {amount} {units}
    </Text>
  </View>
);
const apiKeyString="/information?includeNutrition=false&";

function RecipeInfoList({ route, navigation }) {
  const { ItemId } = route.params;

  const [favIconColor,setFavIconColor] = useState("white");

  const getColor = async (itemID) => {
    try {
      const jsonValue = await AsyncStorage.getItem(itemID.toString())
      if (jsonValue) {
        setFavIconColor("#FFCA28");
      } else {
        setFavIconColor("white");
      }
    } catch(e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    getColor(ItemId);
  }, []);

  const apiURL = RECIPE_INFO + ItemId + apiKeyString +API_KEY;
  const { data, loading, error } = useFetch(apiURL);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { extendedIngredients } = data;

  const onHeartIconPress = async (FavItem) => {
    try {
      const jsonValue = JSON.stringify(FavItem);
      const existingValue = await AsyncStorage.getItem(FavItem.id.toString());
      if (existingValue !== null) {
        // Item is already favorited, so remove it
        await AsyncStorage.removeItem(FavItem.id.toString());
        setFavIconColor("#FFFFFF"); // set unfavorite icon color
      } else {
        // Item is not favorited, so add it
        await AsyncStorage.setItem(FavItem.id.toString(), jsonValue);
        setFavIconColor("#FFCA28"); // set favorite icon color
      }
    } catch (e) {
      console.log("Error ocurred");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.recipeNameContainer}>
          <Text style={styles.recipeTitle}>{data.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: data.image }} />
          <Text
            style={{
              textAlign: "right",
              fontStyle: "italic",
              fontWeight: "bold",
              margin: 2,
            }}
          >
            Ready in {data.readyInMinutes} minutes
          </Text>
          <View style={styles.IconContainer}>
            <Ionicons
              style={styles.favIcon}
              name="heart"
              size={40}
              color={favIconColor}
              onPress={async()=>onHeartIconPress(data)}
            ></Ionicons>
          </View>
        </View>

        <View style={styles.ingredientContainer}>
          <Text style={{ fontWeight: "bold", padding: 5, fontSize: 20 }}>
            Ingredients:{" "}
          </Text>
          <View>
            <FlatList
              horizontal
              data={extendedIngredients}
              renderItem={({ item }) => (
                <Item name={item.name} amount={item.amount} units={item.unit} />
              )}
            />
          </View>
        </View>
        
        <View style={styles.instructionsContainer}>
  <Text style={{ fontWeight: "bold", padding: 5, fontSize: 20 }}>
    Instructions:
  </Text>
  {data.analyzedInstructions.length === 0 ? (
    <Text style={{fontWeight: "bold", padding: 5, fontSize: 20}}>No instructions found for this recipe...</Text>
  ) : (
    data.analyzedInstructions.map((instruction) => (
      <View key={instruction.name}>
        {instruction.steps.map((step) => (
          <Text
            style={{
              fontSize: 20,
              padding: 5,
              margin: 5,
              fontStyle: "italic",
            }}
            key={step.number}
          >
            <Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Step: {step.number}</Text>
            {"\n\n"}{step.step.toUpperCase()}
          </Text>
        ))}
      </View>
    ))
  )}
</View>

      </ScrollView>
    </SafeAreaView>
  );
}
export default RecipeInfoList;
