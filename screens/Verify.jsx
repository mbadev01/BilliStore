import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, inputStyling } from "../styles/style";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigation();
  const inputOption = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
  };
  const loading = false;
  const submitHandler = () => {
    alert("Yeah");
    navigate.navigate("login");
  };
  return (
    <>
      <View
        style={{
          padding: 0,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex: 1,
          backgroundColor: colors.color2,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              textAlign: "center",
              color: colors.color2,
              backgroundColor: colors.color3,
              padding: 5,
              borderRadius: 8,
              margin: 10,
            }}
          >
            Reset Password
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: colors.color3,
            borderRadius: 10,
            justifyContent: "center",
            elevation: 10,
            margin: 10,
          }}
        >
          <TextInput
            {...inputOption}
            placeholder="OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <TextInput
            {...inputOption}
            placeholder="New Password..."
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={otp === "" || password === ""}
            onPress={submitHandler}
            style={{
              backgroundColor: colors.color1,
              margin: 2,
              padding: 6,
            }}
          >
            Reset
          </Button>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              fontWeight: "100",
              color: colors.color2,
            }}
          >
            OR
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate.navigate("forgetPassword")}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                textTransform: "uppercase",
                color: colors.color2,
                marginHorizontal: 20,
                marginVertical: 20,
              }}
            >
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Verify;
