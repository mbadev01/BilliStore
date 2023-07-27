import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../styles/style";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading";
import { products } from "../Home";
import ProductListItem from "../../components/ProductListItem";
import Chart from "../../components/Chart";
import { useNavigation } from "@react-navigation/native";

const AdminPanel = () => {
  const navigation = useNavigation();
  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminorders");
        break;
      case "Product":
        navigation.navigate("newproduct");
        break;

      default:
        navigation.navigate("adminorders");
        break;
    }
  };
  const deleteProductHandler = (id) => {
    console.log(`delete with ID:${id}`);
  };
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
          Admin Panel
        </Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color3,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Chart inStock={12} outOfStock={2} />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                icon={"plus"}
                text={"Product"}
                handler={navigationHandler}
              />
              <ButtonBox
                icon={"format-list-bulleted-square"}
                text={"All Orders "}
                handler={navigationHandler}
              />
              <ButtonBox
                icon={"plus"}
                text={"Category"}
                handler={navigationHandler}
              />
            </View>
          </View>
          <ProductListHeading />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {products.map((item, index) => (
                <ProductListItem
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.price}
                  name={item.name}
                  stock={item.stock}
                  category={item.category}
                  imgSrc={item.images[0].url}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;
