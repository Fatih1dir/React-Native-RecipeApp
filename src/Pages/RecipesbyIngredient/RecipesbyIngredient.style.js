import { StyleSheet, StatusBar, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.8;
const imageH = imageW * 1.4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "rgba(52, 52, 52, 0.4)",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    maxWidth:width/1.1,
    maxHeight:height
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
  recipeContainer: {
    justifyContent: "center",
    alignItems: "center",
    width,
    padding: 10,
  },
  recipeImgContainer: {
    width: imageW,
    height: imageH,
    resizeMode: "cover",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
  },
  recipeTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 15,
    marginBottom: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionText: {
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    fontWeight: "bold",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    color: "black",
    maxWidth:width,
    maxHeight:height
  },
  recipeInfoButton:{
    backgroundColor: "#f4511e",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    alignItems:'center'
  }
});
export default styles;
