import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/style";

const MyModel = ({ id, deleteHandler, navigate, setOpenModel }) => {
  return (
    <View
      style={{
        elevation: 10,
        width: 200,
        height: 100,
        backgroundColor: "#ffff",
        justifyContent: "center",
        alignSelf: "center",
        zIndex: 100,
        padding: 20,
        borderRadius: 20,
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
        onPress={() => setOpenModel(false)}
      >
        <Avatar.Icon
          icon={"close"}
          size={25}
          style={{
            backgroundColor: colors.color1,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "900",
          textAlign: "center",
          textTransform: "uppercase",
        }}
        onPress={() => navigate.navigate("updateproduct")}
      >
        Edit
      </Text>
      <Text
        style={{
          fontWeight: "900",
          textAlign: "center",
          textTransform: "uppercase",
          color: colors.color1,
        }}
        onPress={() => deleteHandler(id)}
      >
        Delete
      </Text>
    </View>
  );
};

export default MyModel;
