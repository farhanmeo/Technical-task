import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Form() {
    const [employees, setEmployees] = useState([
        {employee:1},
    ])

    const plus = () => {
        let arrayOfEmployee = []
        arrayOfEmployee  = employees
        arrayOfEmployee.push({employee:3})
        setEmployees(arrayOfEmployee)
        console.log(arrayOfEmployee);
    }
    const minus = () => {
        let arrayOfEmployee = []
        arrayOfEmployee  = employees
        arrayOfEmployee.pop()
        setEmployees(arrayOfEmployee)
        console.log(arrayOfEmployee);
    }
    useEffect (()=>{
       console.log('====================================');
       console.log(employees);
       console.log('====================================');

    },[employees])
    return (
        <ScrollView>
            <View style={{ margin: 10 }}>
                <View style={styles.pluMinusStyle}>
                    <TouchableOpacity onPress={minus} style={{flex:0.5, backgroundColor:'red', alignItems:'center', borderRadius:10, padding:10, marginRight:1}}>
                    <Icon style={{marginHorizontal:10}} name="minus" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={plus} style={{flex:0.5, backgroundColor:'black', alignItems:'center', borderRadius:10, padding:10, marginLeft:1}}>
                    <Icon style={{marginHorizontal:10}} name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                {
                    employees.map((employee, index)=>{
                        return(
                            <View key={index}>
                            <Text style={{textAlign:'center'}}>Employee Form1</Text>
                            <View style={styles.inputIconStyle}>                    
                            <Icon style={{marginHorizontal:10}} name="user" size={20} color="rgba(0,0,0,0.5)" />
                            <TextInput style={{flex:1}}  secureTextEntry={true} placeholder='Enter your password' />
                            </View>
        
                            <View style={styles.inputIconStyle}>                    
                            <Icon style={{marginHorizontal:10}} name="envelope-o" size={20} color="rgba(0,0,0,0.5)" />
                            <TextInput style={{flex:1}}  secureTextEntry={true} placeholder='Enter your password' />
                            </View>
        
                            <View style={styles.inputIconStyle}>                    
                            <Icon style={{marginHorizontal:10}} name="key" size={20} color="rgba(0,0,0,0.5)" />
                            <TextInput style={{flex:1}}  secureTextEntry={true} placeholder='Enter your password' />
                            <Icon style={{marginHorizontal:10}} name="eye-slash" size={20} color="rgba(0,0,0,0.5)" />
                            </View>
        
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={{textAlign:'center'}}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>        
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}