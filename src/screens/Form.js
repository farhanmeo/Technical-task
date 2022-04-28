import { View, Text, TextInput, TouchableOpacity, ScrollView, LayoutAnimation, UIManager, Platform, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import styles from './styles';

export default function Form() {
    const emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passwordFilter = /^[A-Za-z]\w{7,14}$/;
    const [isVisible, setIsVisible] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const scrollViewRef = useRef()


    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: '',
            email: '',
            password: '',
        },
    ])
    useEffect  (()=>{
        if (Platform.OS === 'android') 
        { 
            UIManager.setLayoutAnimationEnabledExperimental(true) 
        }
    },[])

    const plus = () => {
        let arrayOfEmployee = [...employees]
        arrayOfEmployee.push({ id: arrayOfEmployee.length + 1, name: '', email: '', password: '' })
        setExpanded(!expanded)
        setEmployees(arrayOfEmployee)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setTimeout(() => {
            scrollViewRef.current.scrollToEnd({ animated: true })
        }, 500);
    }
    const minus = () => {
        let arrayOfEmployee = [...employees]
        arrayOfEmployee.pop()
        setEmployees(arrayOfEmployee)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    }
    const setName = (name, index) => {
        let arrayOfEmployee = [...employees]
        arrayOfEmployee[index].name = name
        setEmployees(arrayOfEmployee)
    }

    const setEmail = (email, index) => {
        let arrayOfEmployee = [...employees]
        arrayOfEmployee[index].email = email
        setEmployees(arrayOfEmployee)
    }
    const setPassword = (password, index) => {
        let arrayOfEmployee = [...employees]
        arrayOfEmployee[index].password = password
        setEmployees(arrayOfEmployee)
    }
    const onSubmit = (employee, index) => {
        ToastAndroid.show('Successfully Submitted', ToastAndroid.SHORT)
    }

    return (
        <View style={styles.container}>
                  <Toast  />
            <View style={styles.pluMinusStyle}>
                <TouchableOpacity onPress={minus} style={{ flex: 0.5, backgroundColor: 'red', alignItems: 'center', borderRadius: 10, padding: 10, marginRight: 1 }}>
                    <Icon style={{ marginHorizontal: 10 }} name="minus" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={plus} style={{ flex: 0.5, backgroundColor: 'black', alignItems: 'center', borderRadius: 10, padding: 10, marginLeft: 1 }}>
                    <Icon style={{ marginHorizontal: 10 }} name="plus" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView  
            ref={scrollViewRef} 
                  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                  style={styles.container}>
                <View style={{ margin: 10 }}>
                    {
                        employees.map((employee, index) => {
                            return (
                                <View style={styles.card} key={index}>
                                    <Text style={{ textAlign: 'center' }}>Employee Form {index+1}</Text>
                                    <View style={styles.inputIconStyle}>
                                        <Icon style={{ marginHorizontal: 10 }} name="user" size={20} color="rgba(0,0,0,0.5)" />
                                        <TextInput onChangeText={(text) => setName(text, index)} style={{ flex: 1 }} placeholder='Enter your Name' />
                                        {
                                            employee.name.length < 1 ? null : employee.name.length < 5 ?
                                                <Icon style={{ marginHorizontal: 10 }} name="remove" size={20} color="red" /> :
                                                <Icon style={{ marginHorizontal: 10 }} name="check" size={20} color="green" />
                                        }
                                    </View>
                                    <View style={{ marginHorizontal: 15 }} ><Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)' }} >Must be atleast 5 characters</Text></View>
                                    <View style={styles.inputIconStyle}>
                                        <Icon style={{ marginHorizontal: 10 }} name="envelope-o" size={20} color="rgba(0,0,0,0.5)" />
                                        <TextInput onChangeText={(email) => setEmail(email, index)} style={{ flex: 1 }} placeholder='Enter your Email address' />
                                        {
                                            employee.email.length < 1 ? null : emailFilter.test(employee.email) ?
                                                <Icon style={{ marginHorizontal: 10 }} name="check" size={20} color="green" /> :
                                                <Icon style={{ marginHorizontal: 10 }} name="remove" size={20} color="red" />
                                        }
                                    </View>
                                    <View style={{ marginHorizontal: 15 }} ><Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)' }} >Must be a valid Email address</Text></View>

                                    <View style={styles.inputIconStyle}>
                                        <Icon style={{ marginHorizontal: 10 }} name="key" size={20} color="rgba(0,0,0,0.5)" />
                                        <TextInput onChangeText={(password) => setPassword(password, index)} style={{ flex: 1 }} secureTextEntry={isVisible} placeholder='Enter your Password' />
                                        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                                            {
                                                isVisible ?
                                                    <Icon style={{ marginHorizontal: 10 }} name="eye-slash" size={20} color="rgba(0,0,0,0.5)" /> :
                                                    <Icon style={{ marginHorizontal: 10 }} name="eye" size={20} color="rgba(0,0,0,0.5)" />

                                            }
                                        </TouchableOpacity>
                                        {
                                            employee.password.length < 1 ? null : passwordFilter.test(employee.password) ?
                                                <Icon style={{ marginHorizontal: 10 }} name="check" size={20} color="green" /> :
                                                <Icon style={{ marginHorizontal: 10 }} name="remove" size={20} color="red" />
                                        }
                                    </View>
                                    <View style={{ marginHorizontal: 15 }} ><Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)' }} >8-15 characters & first character must be a letter</Text></View>


                                    <TouchableOpacity disabled={employee.name.length >= 5 && emailFilter.test(employee.email) && passwordFilter.test(employee.password) ? false : true} onPress={() => onSubmit(employee, index)}
                                        style={[styles.buttonStyle, { backgroundColor: employee.name.length >= 5 && emailFilter.test(employee.email) && passwordFilter.test(employee.password) ? 'red' : 'rgba(0,0,0,0.3)' }]}>
                                        <Text style={{ textAlign: 'center', color: 'white' }}>
                                            Submit
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>

    )
}