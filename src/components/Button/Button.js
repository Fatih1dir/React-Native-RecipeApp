import React from "react";
import { TouchableOpacity, View } from "react-native";
import {Ionicons} from "@expo/vector-icons";

import styles from "./Button.style";

const Button = ({onPress,iconName,styleChoose,size}) => {
  return (
    <View style={styles[styleChoose]}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={iconName} size={size} style={styles.icon}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
