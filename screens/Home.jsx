import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defultStyle } from "../styles/style";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModel from "../components/SearchModel";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const categories = [
  { category: "Men's", _id: "bilal" },
  { category: "Clothes", _id: "bilalazh" },
  { category: "Shoes", _id: "bilalmomi" },
  { category: "Men's", _id: "bilal12" },
  { category: "Clothes", _id: "bilalazh12" },
  { category: "Shoes", _id: "bilalmomi12" },
];
const products = [
  {
    price: 23214,
    stock: 23,
    name: "sample",
    _id: "Bilalawjkdfhljs",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
];
export default function Home() {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigation();
  const categoryButtonHndler = (id) => {
    setCatagory(id);
  };
  const addToCardHandler = (id) => {
    console.log("Add to Cart ", id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={defultStyle}>
        <Header />
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHndler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
