import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "../styles/style";

const CartItem = ({
  name,
  price,
  qty,
  stock,
  index,
  imgSrc,
  id,
  decrementHandler,
  incrementHnadler,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={{
            width: 100,
            height: "100%",
            resizeMode: "contain",
            top: "-2%",
            left: "20%",
          }}
        />
      </View>
      <View
        style={{
          width: "40%",
          paddingHorizontal: 25,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 18,
          }}
        >
          {name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          ${price}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "20%",
          height: 80,
          alignSelf: "center",
          justifyContent: "space-between",
        }}
      ></View>
    </View>
  );
};

export default CartItem;
