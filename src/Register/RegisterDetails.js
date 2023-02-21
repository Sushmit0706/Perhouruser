import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";

const RegisterDetails = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View>
        <SafeAreaView
          style={{
            backgroundColor: "wheat",
            width: "100%",
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View style={{ margin: 20, height: "25%" }}>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 80,
                fontSize: 30,
                fontWeight: "300",
              }}
            >
              Basic Details
            </Text>
            <Text
              style={{
                alignSelf: "center",
                //   marginTop: 80,
                fontSize: 12,
                fontWeight: "300",
              }}
            >
              We Just want to know you better
            </Text>
          </View>
          <View
            style={{
              height: "75%",
              backgroundColor: "white",
              borderRadius: 40,
            }}
          >
            <View style={{ marginHorizontal: 30 }}>
              <Text style={{ marginTop: 10 }}>Name</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 5,
                  paddingLeft: 20,
                }}
                onChangeText={(value) => {
                  // setdata((data) => ({ ...data, name: value })),
                  setname(value);
                  // setdata((data) => ({ ...data, ...props.route.params })),
                  // showdata;
                }}
                //   value={number}
                placeholder="Name"

                //   keyboardType="numeric"
              />
              <Text style={{ marginTop: 10 }}>Country</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 5,
                  paddingLeft: 20,
                }}
                //   onChangeText={}
                //   value={number}
                placeholder="Country"
                //   keyboardType="numeric"
                onChangeText={(value) => {
                  setcountry(value);
                  // setdata((data) => ({ ...data, country: value })), showdata;
                }}
              />

              <Text style={{ marginTop: 10 }}>Address</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 5,
                  paddingLeft: 20,
                }}
                //   onChangeText={}s
                //   value={number}
                placeholder="Address"
                onChangeText={(value) => {
                  setaddress(value);
                  // setdata((data) => ({ ...data, address: value })), showdata;
                }}

                //   keyboardType="numeric"
              />
              <Text style={{ marginTop: 10 }}>Username</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 5,
                  paddingLeft: 20,
                }}
                //   onChangeText={}
                //   value={number}
                placeholder="Username"
                //   keyboardType="numeric"
                onChangeText={(value) => {
                  //   setusername(value);
                  // setdata((data) => ({ ...data, username: value })), showdata;
                }}
              />
              {/* {usernameerror ? (
                <Text style={{ color: "red" }}>Username Occupied</Text>
              ) : (
                <View></View>
              )} */}
              <Text style={{ marginTop: 10 }}>Phone Number</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 5,
                  paddingLeft: 20,
                }}
                //   onChangeText={}
                //   value={number}
                maxLength={10}
                placeholder="Phone Number"
                keyboardType="numeric"
                onChangeText={(value) => {
                  setphonenumber(value);
                  // setdata((data) => ({ ...data, phonenumber: value })),
                  // showdata;
                }}
              />

              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "#3d3a4bff",
                  height: 40,
                  borderRadius: 12,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                  //   onPress={handlesubmit}
                >
                  Start Working
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterDetails;
