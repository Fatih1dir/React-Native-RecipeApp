import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Favorites.style";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Favorites = ({navigation}) => {
  const Item = ({ title, imgSource, onPress, itemData }) => {
    return (
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
  };

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function onPressRecipe(ItemId) {
    navigation.navigate("RecipeInfo", { ItemId: ItemId });
  }

  const getFavorites = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const promises = keys.map(key => AsyncStorage.getItem(key));
        const values = await Promise.all(promises);
        const parsedValues = values.map(value => JSON.parse(value));
      setFavorites(parsedValues);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            imgSource={item.image}
            onPress={() => onPressRecipe(item.id)}
            itemData={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default Favorites;
