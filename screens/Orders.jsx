import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";

import { colors } from "../styles/style";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

const orders = [
  {
    _id: "bilaakjhf",
    createdAt: "2015-03-25",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: "$10000",
    shoppingInfo: {
      address: "876-K SRA Colony Multan",
      city: "Multan",
      country: "Pakistan",
      pinCode: "60000",
    },
  },
  {
    _id: "bilaakerrrjhf",
    createdAt: "2015-03-25",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: "$10000",
    shoppingInfo: {
      address: "876-K SRA Colony Multan",
      city: "Multan",
      country: "Pakistan",
      pinCode: "60000",
    },
  },
  {
    _id: "bilaakfarjhf",
    createdAt: "2015-03-25",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: "$10000",
    shoppingInfo: {
      address: "876-K SRA Colony Multan",
      city: "Multan",
      country: "Pakistan",
      pinCode: "60000",
    },
  },
  {
    _id: "bilaakjcgsdhf",
    createdAt: "2015-03-25",
    orderStatus: "Processing",
    paymentMethod: "Online",
    totalAmount: "$40000",
    shoppingInfo: {
      address: "876-K SRA Colony Multan",
      city: "Multan",
      country: "Pakistan",
      pinCode: "60000",
    },
  },
];
const Orders = () => {
  const loading = false;
  return (
    <View
      style={{
        padding: 10,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            color: colors.color2,
            backgroundColor: colors.color3,
            padding: 5,
            borderRadius: 8,
            margin: 10,
          }}
        >
          Orders
        </Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  payment={item.paymentMethod}
                  orderedOn={item.createdAt}
                  address={`${item.shoppingInfo.address}, ${item.shoppingInfo.city}, ${item.shoppingInfo.country} 
                  ${item.shoppingInfo.pinCode}`}
                  // admin={true}
                  // loading={true}
                />
              ))
            ) : (
              <Headline
                style={{
                  textAlign: "center",
                }}
              >
                No Orders Yet
              </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
