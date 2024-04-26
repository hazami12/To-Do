import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { auth } from "../firebase";
  import { useNavigation } from "@react-navigation/native";
  import AppLogo from "../components/AppLogo";
  // import { TouchableOpacity } from "react-native-web";
  
  const RegisterScreen = () => {
  
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
  
    const navigation = useNavigation()
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
          });
        }
      })
  
      return unsubscribe
    }, [])
  
    const handleSignUp = () => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Registered with: ",user.email);
      })
      .catch(error => alert(error.message))
    }
  
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
  
        <AppLogo />
        <Text style={{fontSize: 20, marginBottom:40, fontWeight:"700"}}>Register</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
             value= { email }
             onChangeText={ text => setEmail(text)}
            style={styles.input}
          ></TextInput>
          <TextInput
            placeholder="Password"
             value= { password }
             onChangeText={ text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
  
          
          {/* <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity> */}
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  
    inputContainer: {
      width: "80%",
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    buttonContainer: {
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
    },
    button: {
      backgroundColor: "#2D82B5",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
    buttonOutline: {
      backgroundColor: "white",
      marginTop: 5,
      borderColor: "#2D82B5",
      borderWidth: 2,
    },
    buttonOutlineText: {
      color: "#2D82B5",
      fontWeight: "700",
      fontSize: 16,
    },
    signUpText: {
      textAlign: 'center',
      fontSize: 16,
      marginTop: 20,
    },
    linkText: {
      color: '#2D82B5',
      textDecorationLine: 'underline',
    },
  });
  