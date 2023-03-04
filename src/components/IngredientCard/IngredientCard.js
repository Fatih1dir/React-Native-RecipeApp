import React from "react";
import styles from "./IngredientCard.style";
export default IngredientCard = ({ item }) => {
  return (
    <View style={styles.ingredientCard}>
      <Text>{item.name.toUpperCase()}</Text>
      <Button onPress={null} iconName="add"></Button>
    </View>
  );
};
