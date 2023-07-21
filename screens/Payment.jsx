import { View, Text, StatusBar } from "react-native";
import React from "react";
import { colors } from "../styles/style";
import Header from "../components/Header";
import { RadioButton } from "react-native-paper";

const Payment = (navigation, route) => {
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
        <RadioButton.Group>
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
    </View>
  );
};

export default Payment;
