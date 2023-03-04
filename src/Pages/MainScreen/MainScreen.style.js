import { StyleSheet, StatusBar,Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttoncontainer: {
    justifyContent: "center",
    top:80
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  Recipecontainer: {
    height:Dimensions.get('screen').height/2,
    width:Dimensions.get('screen').width,
  },
  item: {
    backgroundColor: "#f4511e",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
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
