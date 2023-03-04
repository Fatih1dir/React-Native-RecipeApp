import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ingredientCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 5,
    backgroundColor: "#f4511e",
    borderRadius: 5,
  },
  searchBar: {},
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8E2E2",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  rightArrowContainer: {
    position:'absolute',
    bottom: -200,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4511e",
  },
});
