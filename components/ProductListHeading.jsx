import { View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/style";

const ProductListHeading = () => {
  return (
    <View
      style={{
        backgroundColor: colors.color3,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        height: 50,
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          width: 60,
          fontWeight: "900",
          color: colors.color2,
        }}
      >
        Image
      </Text>
      <Text
        style={{
          width: 60,
          fontWeight: "900",
          color: colors.color2,
        }}
      >
        Price
      </Text>
      <Text
        style={{
          width: null,
          maxHeight: 120,
          fontWeight: "900",
          color: colors.color2,
        }}
      >
        Name
      </Text>
      <Text
        style={{
          width: 70,
          fontWeight: "900",
          color: colors.color2,
        }}
      >
        Category
      </Text>
      <Text
        style={{
          width: 40,
          fontWeight: "900",
          color: colors.color2,
        }}
      >
        Stock
      </Text>
    </View>
  );
};

export default ProductListHeading;
