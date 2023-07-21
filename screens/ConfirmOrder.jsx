import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { CartItem } from "./Cart";

import Header from "../components/Header";
import { colors } from "../styles/style";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
const ConfirmOrder = () => {
  const itemprice = 5000;
  const shippingCharges = 10;
  const tax = 0.25 * itemprice;
  const subTotal = itemprice + shippingCharges + tax;
  const navigate = useNavigation();
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
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {CartItem?.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              price={i.price}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>

      <PriceTag heading={"Subtotal"} value={itemprice} />
      <PriceTag heading={"Shipping"} value={shippingCharges} />
      <PriceTag heading={"Tax"} value={tax} />
      <PriceTag heading={"Total"} value={subTotal} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemprice,
            shippingCharges,
            tax,
            subTotal,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};
const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
      margin: 10,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>${value}</Text>
  </View>
);
export default ConfirmOrder;
