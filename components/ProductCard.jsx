import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/style";

const ProductCard = (
  stock,
  name,
  price,
  image,
  id,
  addToCardHandler,
  i,
  navigate
) => {
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("productsdeatils", { id })}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? "#ffafcc" : "#fca311",
        }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: "80%",
            height: 20,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 5,
          }}
        >
          {console.log("image")}
        </Image>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
