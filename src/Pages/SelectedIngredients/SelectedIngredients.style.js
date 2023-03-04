import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    ingredientCard:{ 
      flexDirection: 'row', 
      alignItems:'center',
      justifyContent:'space-between',
      padding:5,
      margin:5,
      backgroundColor:'#f4511e',
      borderRadius:5
    },
    emptyListMessage:{
        alignSelf:'center',
        padding:5,
        fontSize:15,
        color:'grey',
        fontWeight:'bold',
    },
    AddIngredientsButton:{
      alignItems:'center',
      backgroundColor:'#f4511e',
      padding:10,
      borderRadius:15,
      marginHorizontal:30,
      marginVertical:30
    },
    AddIngredientsButtonText:{
      color:'white',
    }
})