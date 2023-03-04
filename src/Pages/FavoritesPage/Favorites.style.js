import { StyleSheet,Dimensions } from "react-native";
const styles = StyleSheet.create({
    item: {
    backgroundColor: "#f4511e",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 5,
    maxWidth:Dimensions.get('screen').width
  },
  title: {
    fontSize: 15,
    padding: 5,
    margin: 5,
    color: "white",
  },
  logo: {
    width: 250,
    height: 200,
    alignSelf: "center",
    borderRadius: 5,
  },
});
export default styles;
