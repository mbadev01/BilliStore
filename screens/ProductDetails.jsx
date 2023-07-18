import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { colors, defultStyle } from "../styles/style";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);
  const incrementQty = () => {
    if (stock <= quantity) return;
    setquantity((prev) => prev + 1);
  };
  const addToCardHandler = () => {
    if (quantity === 0)
      return Toast.show({
        type: "error",
        text1: "Out OF Stock",
      });
    Toast.show({
      type: "success",
      text1: `${name} added to cart`,
    });
  };
  const decremenQqty = () => {
    if (quantity < 1) return;
    setquantity((prev) => prev - 1);
  };
  const isCarousel = useRef(null);
  const name = "Magic Pen";
  const price = 300;
  const stock = 5;
  const [quantity, setquantity] = useState(1);
  const description =
    "sigig kjhioutf uiogfuhfsukdhf kljaopyt ioaugfugauf jklggihig iltuotytyidyu  55ig jkftyd klggh jkhfkhgg kjgjkathuyt abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys abcdefghijklmnopqrstuvwxys";
  const iamges = [
    {
      id: "hgkjgtkrhgtrt",
      url: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "hgkjgtkrhgtrtxadfsdag",
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
    },
  ];
  return (
    <View
      style={{
        ...defultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />
      <Carousel
        layout="tinder"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={iamges}
        renderItem={CarousalCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 25,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 900,
          }}
        >
          ${price}
        </Text>
        <Text
          numberOfLines={8}
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15,
          }}
        >
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: colors.color3,
              fontWeight: "100",
            }}
          >
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decremenQqty}>
              <Avatar.Icon
                icon={"minus"}
                size={20}
                style={{
                  backgroundColor: colors.color5,
                  borderRadius: 5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                backgroundColor: colors.color4,
                width: 25,
                height: 25,
                textAlignVertical: "center",
                textAlign: "center",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: colors.color5,
              }}
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon
                icon={"plus"}
                size={20}
                style={{
                  backgroundColor: colors.color5,
                  borderRadius: 5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={addToCardHandler}>
          <Button icon={"cart"} style={Style.btn} textColor={colors.color2}>
            Add To Card
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const CarousalCardItem = ({ item, index }) => (
  <View style={Style.container} key={index}>
    <Image source={{ uri: item.url }} style={Style.image} />
  </View>
);

const Style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 60,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
