import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { colors, defultStyle } from "../styles/style";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);
  const isCarousel = useRef(null);

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
        }}
      ></View>
      <Text>Bilal</Text>
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
});

export default ProductDetails;
