import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/style";
import Header from "../components/Header";
import { Button, RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const isAuthenticated = false;
  const navigate = useNavigation();
  const redirectToLogin = () => {
    navigate.navigate("login");
  };
  const codHandler = () => {};
  const onlineHandler = () => {};
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
          Payment
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 900,
          }}
        >
          Method
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.color3,
          padding: 50,
          borderRadius: 10,

          margin: 30,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                textTransform: "uppercase",
                color: colors.color2,
              }}
            >
              Cash On Delivery
            </Text>
            <RadioButton color={colors.color2} value={"COD"} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                textTransform: "uppercase",
                color: colors.color2,
              }}
            >
              Online
            </Text>
            <RadioButton color={colors.color2} value={"ONLINE"} />
          </View>
        </RadioButton.Group>
      </View>
      <TouchableOpacity
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : paymentMethod === "COD"
            ? () => codHandler()
            : onlineHandler
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            margin: 10,
            padding: 5,
          }}
          textColor={colors.color2}
          icon={
            paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }
        >
          {paymentMethod === "COD" ? "Place Order" : "Pay"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
