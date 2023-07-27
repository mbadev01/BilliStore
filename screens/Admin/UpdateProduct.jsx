import { View, Text, StatusBar, ScrollView, TextInput } from "react-native";
import React from "react";
import { colors, inputStyling } from "../../styles/style";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Button } from "react-native-paper";

import { useState } from "react";
import SelectComponent from "../../components/SelectComponent";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;
  console.log(route.prams);
  // const [id] = useState(route.prams.id);
  const inputOption = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
  };
  const submitHandler = () => {
    // dispatch(updateProduct(id, name, description, price, stock, categoryID));
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "biooo", category: "Laptop" },
    { _id: "biooweo", category: "Cloths" },
    { _id: "bioooqwe", category: "Footwear" },
  ]);
  const [visible, setVisible] = useState(false);
  return (
    <>
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
            Update Product
          </Text>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              margin: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                height: 650,
              }}
            >
              <Button
                onPress={() =>
                  navigation.navigate("productimages", {
                    //id,
                    images: [],
                  })
                }
                textColor={colors.color1}
              >
                Manage Images
              </Button>
              <TextInput
                {...inputOption}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOption}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />
              <TextInput
                {...inputOption}
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOption}
                placeholder="Stock"
                value={stock}
                onChangeText={setStock}
              />
              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  textAlignVertical: "center",
                  borderRadius: 3,
                }}
                onPress={() => setVisible(true)}
              >
                {category}
              </Text>
              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loadingOther}
                disabled={loadingOther}
              >
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>
      <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default UpdateProduct;
