import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { RECIPEBYINGREDIENT,API_KEY } from "@env";
import styles from "../RecipesbyIngredient/RecipesbyIngredient.style";
import { StyleSheet } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const apiKey = "&number=5&ranking=1&";
const RecipesbyIngredients = ({ route, navigation }) => {
  const { width, height } = Dimensions.get("screen");
  const scrollX = React.useRef(new Animated.Value(0)).current;

  let ingredientString = "";
  let index = 0;
  while (index < route.params.length) {
    ingredientString = ingredientString + route.params[index] + ",+";
    index += 1;
  }
  ingredientString = ingredientString.substring(0, ingredientString.length - 2);

  const url=RECIPEBYINGREDIENT + ingredientString + apiKey + API_KEY;

  const {data,loading,error} = useFetch(url)

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  

  const Item = ({ name, amount, units }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name.toUpperCase()}</Text>
      <Text style={styles.title}>
        {amount} {units}
      </Text>
    </View>
  );

  

  return (
    <View style={{ flex: 1 }}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              key={`image-${index}`}
              source={{ uri: item.image }}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={2}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <View style={styles.recipeContainer}>
                <Text style={styles.recipeTitle}>{item.title}</Text>
                <Image
                  source={{ uri: item.image }}
                  style={styles.recipeImgContainer}
                />
              </View>
              <Pressable
                style={styles.recipeInfoButton}
                onPress={() =>
                  navigation.navigate("RecipeInfo", { ItemId: item.id })
                }
              >
                <Text>Press to see detailed instructions</Text>
              </Pressable>
              <Text style={styles.sectionText}>Missed Ingredients: </Text>
              <FlatList
                data={item.missedIngredients}
                renderItem={({ item }) => (
                  <Item
                    name={item.name}
                    amount={item.amount}
                    units={item.unit}
                  />
                )}
              ></FlatList>
              <Text style={styles.sectionText}>Used Ingredients: </Text>
              <FlatList
                data={item.usedIngredients}
                renderItem={({ item }) => (
                  <Item
                    name={item.name}
                    amount={item.amount}
                    units={item.unit}
                  />
                )}
              ></FlatList>
              <Text style={styles.sectionText}>Unused Ingredients: </Text>
              <FlatList
                data={item.unusedIngredients}
                renderItem={({ item }) => (
                  <Item
                    name={item.name}
                    amount={item.amount}
                    units={item.unit}
                  />
                )}
              ></FlatList>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};
export default RecipesbyIngredients;

