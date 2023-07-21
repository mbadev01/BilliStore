import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        padding: 0,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: colors.color2,
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <Text>Login</Text>
      </View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
