import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

import image from "../../assets/login2.png";

const Register = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" enabled>
      <View
        style={{
          backgroundColor: "#d3c0cdff",
          height: "100%",
          alignContent: "center",
        }}
      >
        <SafeAreaView
          style={{
            backgroundColor: "#d3c0cdff",
            // height: "100%",
            alignContent: "center",
          }}
        >
          {/* <View> */}
          <View
            style={{
              backgroundColor: "#d3c0cdff",
              height: "60%",
              marginTop: "3%",
              alignContent: "center",
              top: "5%",
            }}
          >
            <Image source={image} style={{ width: "100%", height: "80%" }} />
          </View>
          <View
            style={{
              backgroundColor: "#d3c0cdff",
              height: "50%",
              marginTop: -30,
              alignContent: "center",
              marginHorizontal: "5%",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 30, fontWeight: "200" }}
            >
              Register
            </Text>
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                width: "100%",
                height: "15%",
                borderRadius: 20,
                marginTop: 20,
                paddingLeft: 20,
              }}
              //   onChangeText={}
              //   value={number}
              placeholder="Email"
            />
            <Text style={{ marginTop: 5, paddingLeft: 20, fontSize: 10 }}>
              By Signing in You agree to our T&C and Privacy Policies{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("registerpassword")}
            >
              <View
                style={{
                  backgroundColor: "#3d3a4bff",
                  height: "30%",
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  marginTop: "5%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    padding: "1%",
                    fontSize: 20,
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  Proceed
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                  <Text style={{ marginTop: 20 }}>
                    Already Have An Account?
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
