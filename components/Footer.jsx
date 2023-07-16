import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/style";

const Footer = (acttiveRoute = "home") => {
  const navigate = useNavigation();

  const isAuthenticated = true;

  const navigationHandler = (key) => {};
  return (
    <View
      style={{
        backgroundColor: colors.color1,
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
