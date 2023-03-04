import { StyleSheet,StatusBar,Dimensions } from "react-native";
const styles = StyleSheet.create({
    ingredientContainer: {
      
    },
    ingredientlist:{
      
    },
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
    imageContainer:{
      padding:5,

    },
    image:{
      height: Dimensions.get('window').height/3,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      resizeMode:'contain',
      backgroundColor:'white',

    },
    recipeNameContainer:{
      padding:5
    },
    recipeTitle:{
      fontWeight:'bold',
      fontSize:20,
    },
    scrollView: {
    },
    favIcon:{
      alignSelf:'center'
    },
    IconContainer:{
      backgroundColor:'#f4511e',
      width:50,
      marginLeft:'auto',
      marginRight:'auto',
      borderRadius:20
    }
  });
  export default styles;