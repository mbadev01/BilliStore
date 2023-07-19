import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/style";
import { Avatar } from "react-native-paper";

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
      >
        <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
          <Avatar.Icon
            icon={"minus"}
            size={20}
            style={{
              borderRadius: 5,
              backgroundColor: colors.color5,
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            backgroundColor: colors.color4,
            height: 25,
            width: 25,
            textAlignVertical: "center",
            textAlign: "center",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: colors.color5,
          }}
        >
          {qty}
        </Text>
        <TouchableOpacity onPress={() => incrementHnadler(id, qty, stock)}>
          <Avatar.Icon
            icon={"plus"}
            size={20}
            style={{
              borderRadius: 5,
              backgroundColor: colors.color5,
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
