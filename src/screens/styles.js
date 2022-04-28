import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    inputIconStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop:10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor:'red'
    },
    pluMinusStyle:{
        backgroundColor:'rgba(0,0,0,0.1)',
        flexDirection:'row',
        padding:10
    },
    card:{
        backgroundColor:'white',
        borderRadius:10,
        padding:5,
        margin:5
    }
})