import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defultStyle } from "../styles/style";
import Header from "../components/Header";
import { Avatar } from "react-native-paper";

export default function Home() {
  return (
    <View style={defultStyle}>
      <Header />
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={"gray"}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
