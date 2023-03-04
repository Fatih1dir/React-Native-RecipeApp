import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8E2E2",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
});
export default styles;
