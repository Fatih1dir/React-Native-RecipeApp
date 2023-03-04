import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { INGREDIENTS,API_KEY } from "@env";
import Button from "../../components/Button/Button";
import styles from "./Ingredients.style";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const apiKey = "&number=5&";

function Ingredients({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (text) => {
    setSearchTerm(text);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    if (isSearchButtonPressed) {
      fetchData();
    }
  }, [isSearchButtonPressed]);

  const onSearchButtonPress = () => {
    setIsSearchButtonPressed(true);
    fetchData();
  };
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data: ingredientdata } = await axios.get(
        INGREDIENTS + searchTerm + apiKey + API_KEY
      );
      setData(ingredientdata);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    } finally {
      setIsSearchButtonPressed(false);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const renderIngredient = ({ item }) => (
    <View style={styles.ingredientCard}>
      <Text>{item.name.toUpperCase()}</Text>
      <Button
        onPress={() => onIngredientAdd(item.name)}
        iconName="add"
        styleChoose={"addButton"}
        size={32}
      ></Button>
    </View>
  );

  const onIngredientAdd = (ingredient) => {
    dispatch({ type: "ADD_INGREDIENT2LIST", payload: { name: ingredient } });
    setNewIngredient(ingredient);
    if (!ingredientList.includes(ingredient)) {
      setIngredientList((ingredients) => [...ingredients, ingredient]);
    } else alert(ingredient.toUpperCase() + " is already in the list!!!");
  };

  return (
    <SafeAreaView>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          value={searchTerm}
          onChangeText={handleChange}
          placeholder="Search an ingredient..."
        />
        <Ionicons name="search" size={20} onPress={onSearchButtonPress}></Ionicons>
      </View>
      <View>
        <FlatList data={data} renderItem={renderIngredient} />
      </View>
      <View style={styles.rightArrowContainer}>
        <Button
          iconName="arrow-forward-outline"
          styleChoose={"rightArrow"}
          size={30}
          onPress={() => navigation.navigate("IngredientListStack",{screen:"SelectedIngredients"})}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const ingredients = [
  {
    name: "apple",
    image: "apple.jpg",
    id: 9003,
    aisle: "Produce",
    possibleUnits: [
      "small",
      "large",
      "piece",
      "slice",
      "g",
      "extra small",
      "medium",
      "oz",
      "cup slice",
      "cup",
      "serving",
    ],
  },
  {
    name: "applesauce",
    image: "applesauce.png",
    id: 9019,
    aisle: "Canned and Jarred",
    possibleUnits: ["g", "oz", "cup", "serving", "tablespoon"],
  },
  {
    name: "apple juice",
    image: "apple-juice.jpg",
    id: 9016,
    aisle: "Beverages",
    possibleUnits: [
      "g",
      "drink box",
      "fl oz",
      "oz",
      "teaspoon",
      "cup",
      "serving",
      "tablespoon",
    ],
  },
  {
    name: "apple cider",
    image: "apple-cider.jpg",
    id: 1009016,
    aisle: "Beverages",
    possibleUnits: [
      "g",
      "drink box",
      "fl oz",
      "oz",
      "teaspoon",
      "bottle NFS",
      "cup",
      "serving",
      "tablespoon",
    ],
  },
  {
    name: "apple jelly",
    image: "apple-jelly.jpg",
    id: 10019297,
    aisle: "Nut butters, Jams, and Honey",
    possibleUnits: [
      "g",
      "oz",
      "packet",
      "teaspoon",
      "cup",
      "serving",
      "tablespoon",
    ],
  },
];

export default Ingredients;
