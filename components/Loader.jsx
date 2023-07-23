import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  return (
    <ActivityIndicator
      style={{
        top: "50%",
        position: "absolute",
        alignSelf: "center",
      }}
      size={100}
      color="#3f72af"
    />
  );
};

export default Loader;
