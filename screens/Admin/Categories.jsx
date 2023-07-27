import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors, inputStyling } from "../../styles/style";
import Header from "../../components/Header";
import { Avatar, Button } from "react-native-paper";
const inputOption = {
  style: inputStyling,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

const categories = [
  {
    name: "Laptop",
    _id: "kjhfiouhy",
  },
  {
    name: "Laptop",
    _id: "kjhfiosfruhy",
  },
  {
    name: "Laptop",
    _id: "kjhfioserrfruhy",
  },
  {
    name: "Laptop",
    _id: "kjhfiosqqfruhy",
  },
  {
    name: "Laptop",
    _id: "kjhfiosfsdfruhy",
  },
  {
    name: "Laptop",
    _id: "kjhfiosfttruhy",
  },
];
const Categories = () => {
  const deleteHandler = (id) => {
    console.log(`Delete Category,${id} `);
  };
  const loading = false;
  const submitHandler = () => {};
  const [category, setCategory] = useState("");
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
          Categories
        </Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color1,
            padding: 20,
            minHeight: 400,
          }}
        >
          {categories.map((i) => (
            <CategoryCard
              name={i.name}
              id={i._id}
              key={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          {...inputOption}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />
        <Button
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color1,
            margin: 20,
            padding: 6,
          }}
          disabled={!category}
          onPress={submitHandler}
          loading={loading}
        >
          Add
        </Button>
      </View>
    </View>
  );
};
const CategoryCard = ({ name, id, deleteHandler }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{
          backgroundColor: colors.color1,
        }}
      />
    </TouchableOpacity>
  </View>
);

export default Categories;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },

  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
