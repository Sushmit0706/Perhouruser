// import { View, Text } from 'react-native'
// import React from 'react'

// const Login = () => {
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   )
// }


import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native'
// import React from 'react'

import { StyleSheet} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require("./assets/login.png")} /> 
    <StatusBar style="auto" />
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      /> 
    </View> 
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      /> 
    </View> 
    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text> 
    </TouchableOpacity> 
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text> 
    </TouchableOpacity> 
  </View> 
  )
}

export default Login;


// export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height:80,
    width:80,
    marginBottom: 60,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 80,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent:'center',
  },
  TextInput: {
    alignContent:'center',
    height: 50,
    flex: 1,
    padding: 50,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "100%",
    // borderRadius: 85,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});