import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defultStyle } from "../styles/style";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModel from "../components/SearchModel";

const categories = [
  { category: "Men's", _id: "bilal" },
  { category: "Clothes", _id: "bilalazh" },
  { category: "Shoes", _id: "bilalmomi" },
  { category: "Men's", _id: "bilal12" },
  { category: "Clothes", _id: "bilalazh12" },
  { category: "Shoes", _id: "bilalmomi12" },
];
const products = [];
export default function Home() {
  const [category, setcatagory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [seacrhquery, setsearchquery] = useState("");
  const categoryButtonHndler = (id) => {
    setcatagory(id);
  };

  return (
    <>
      <View>
        {activeSearch && (
          <SearchModel
            seacrhquery={seacrhquery}
            setactiveSearch={setActiveSearch}
            setsearchquery={setsearchquery}
            products={products}
          />
        )}
      </View>
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
      </View>
    </>
  );
}
