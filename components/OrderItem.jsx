import { View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/style";
import { Button } from "react-native-paper";

const OrderItem = ({
  id,
  price,
  address,
  orderedOn,
  status,
  payment,
  updateHandler,
  loading,
  admin = false,
  i = 0,
}) => {
  return (
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        backgroundColor: i % 2 === 0 ? "#028090" : "#2ec4b6",
      }}
    >
      <Text
        style={{
          backgroundColor: colors.color1,
          color: colors.color2,
          fontSize: 16,
          fontWeight: "900",
          marginHorizontal: -20,
          marginTop: -20,
          marginBottom: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        ID- #{id}
      </Text>
      <TextBox title={"Address"} value={address} i={i} />
      <TextBox title={"Order On"} value={orderedOn} i={i} />
      <TextBox title={"Price"} value={price} i={i} />
      <TextBox title={"Status"} value={status} i={i} />
      <TextBox title={"Payment Method"} value={payment} i={i} />
      {admin && (
        <Button
          icon={"update"}
          mode={"contained"}
          style={{
            width: 120,
            alignSelf: "center",
            marginTop: 10,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      )}
    </View>
  );
};
const TextBox = ({ title, value, i }) => (
  <Text
    style={{
      marginVertical: 6,
      color: i % 2 === 0 ? colors.color3 : colors.color2,
    }}
  >
    <Text style={{ fontWeight: "900" }}>{title} - </Text>
    {value}
  </Text>
);
export default OrderItem;
