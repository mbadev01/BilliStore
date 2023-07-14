import { View, Text } from "react-native";
import React from "react";
import { defultStyle } from "../styles/style";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={defultStyle}>
      <View>
        <Header />
        <Text style={{ fontSize: 25 }}>Our</Text>
        <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
      </View>
    </View>
  );
}
