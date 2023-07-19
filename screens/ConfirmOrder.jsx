import { View, Text, StatusBar } from "react-native";
import React from "react";

import Header from "../components/Header";
import { colors } from "../styles/style";
const ConfirmOrder = () => {
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
      <View
        style={{
          paddingTop: 70,
          marginLeft: 35,
        }}
      >
        <Text
          style={{
            fontSize: 35,
          }}
        >
          Confirm
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 900,
          }}
        >
          Order
        </Text>
      </View>
    </View>
  );
};

export default ConfirmOrder;
