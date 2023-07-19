import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defultStyle } from "../styles/style";
import Header from "../components/Header";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { id } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
const cartItems = [
  {
    name: "MacBook",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    stock: 3,
    quantity: 2,
    product: "jkhdgflhuiobh",
  },
  {
    name: "Shoes",
    price: 5500,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
    stock: 3,
    quantity: 5,
    product: "khhiuhyjjl",
  },
];
const incrementHnadler = () => {};
const decrementHandler = () => {};

const Cart = () => {
  return (
    <View
      style={{
        ...defultStyle,
        padding: 0,
      }}
    >
      <Header back={true} emptyCart={true} />
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
          Shopping
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 900,
          }}
        >
          Cart
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              price={i.price}
              qty={i.quantity}
              imgSrc={i.image}
              index={index}
              incrementHnadler={incrementHnadler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5</Text>
      </View>
      <TouchableOpacity>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
