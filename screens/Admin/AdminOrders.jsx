import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../styles/style";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import OrderItem from "../../components/OrderItem";
import Orders, { orders } from "../Orders";
const AdminOrders = () => {
  const loading = false;
  const processOrderLoading = false;
  const updateHandler = () => {};
  return (
    <View
      style={{
        padding: 0,
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
          All Orders
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
                  admin={true}
                  loading={processOrderLoading}
                  updateHandler={updateHandler}
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

export default AdminOrders;
