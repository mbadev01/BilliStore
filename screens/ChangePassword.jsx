import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, inputStyling } from "../styles/style";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigation();
  const inputOption = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
  };
  const loading = false;
  const submitHandler = () => {
    alert("Yeah");
  };
  return (
    <View
      style={{
        padding: 0,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: colors.color2,
      }}
    >
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
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
          Change Password
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
          placeholder="Old Password..."
          secureTextEntry={true}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          {...inputOption}
          placeholder="New Password..."
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={oldPassword === "" || newPassword === ""}
          onPress={submitHandler}
          style={{
            backgroundColor: colors.color1,
            margin: 2,
            padding: 6,
          }}
        >
          Change
        </Button>
      </View>
    </View>
  );
};

export default ChangePassword;
