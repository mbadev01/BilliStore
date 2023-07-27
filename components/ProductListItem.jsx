import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/style";
import MyModel from "./MyModel";

const ProductListItem = ({
  deleteHandler,
  id,
  i,
  price,
  name,
  stock,
  category,
  imgSrc,
}) => {
  const navigate = useNavigation();
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOpenModel((prev) => !prev)}
        onPress={() => navigate.navigate("productdetails", { id })}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
          }}
        >
          <Image
            source={{
              uri: imgSrc,
            }}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
          />
          <Text style={{ color: colors.color2, width: 60 }} numberOfLines={1}>
            ${price}
          </Text>
          <Text
            style={{ color: colors.color2, maxWidth: 120 }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text style={{ color: colors.color2, width: 60 }} numberOfLines={1}>
            {category}
          </Text>
          <Text style={{ color: colors.color2, width: 60 }} numberOfLines={1}>
            {stock}
          </Text>
        </View>
      </TouchableOpacity>
      {openModel && (
        <MyModel
          id={id}
          deleteHandler={deleteHandler}
          navigate={navigate}
          setOpenModel={setOpenModel}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ProductListItem;
