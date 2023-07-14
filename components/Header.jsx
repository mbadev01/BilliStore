import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/style";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Header({ back, emptyCart = false }) {
  const navigate = useNavigation();
  const route = useRoute;
  const emptyCartHanler = () => {
    console.log("Empty Cart");
  };
  return (
    <>
      {back && (
        <TouchableOpacity
          style={{ position: "absolute", top: 40, zIndex: 10 }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{ backgroundColor: colors.color4 }}
            icon={"arrow-left"}
            color={
              route.name === "Productdtails" ? colors.color2 : colors.color3
            }
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{ position: "absolute", right: 0, top: 30, zIndex: 10 }}
        onPress={emptyCart ? emptyCartHanler : () => navigate.navigate("Cart")}
      >
        <Avatar.Icon
          style={{ backgroundColor: colors.color4 }}
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          color={route.name === "Productdtails" ? colors.color2 : colors.color3}
        />
      </TouchableOpacity>
    </>
  );
}
