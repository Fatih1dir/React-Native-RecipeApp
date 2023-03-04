import React from "react";
import { View, Text, FlatList, Alert, Pressable } from "react-native";
import { useSelector } from "react-redux";
import styles from "./SelectedIngredients.style";
import Button from "../../components/Button/Button";

const SelectedIngredients = ({ navigation }) => {
  const list = useSelector((s) => s.ingredientList);

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Searching",
      "Do you want to search a recipe with ingredients you choose?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes", onPress: () => onYesPress() },
      ]
    );

  const onYesPress = () => {
    navigation.navigate("RecipesbyIngredient", list);
  };
  const onPressSearch = () => {
    createTwoButtonAlert();
  };

  const RenderList = ({ item }) => (
    <View style={styles.ingredientCard}>
      <Text>{item.toUpperCase()}</Text>
    </View>
  );
  return (
    <View>
      {list.length === 0 ? (
        <>
          <Text style={styles.emptyListMessage}>
            Try adding ingredients to search a recipe...
          </Text>
          <Pressable style={styles.AddIngredientsButton} onPress={()=>navigation.navigate("Home",{screen:'Ingredients'})}>
            <Text style={styles.AddIngredientsButtonText}>Add Ingredients</Text>
          </Pressable>
        </>
      ) : (
        <View>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={list}
            renderItem={RenderList}
          ></FlatList>
          <Button
            iconName="search"
            styleChoose={"searchButton"}
            size={60}
            onPress={onPressSearch}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SelectedIngredients;
