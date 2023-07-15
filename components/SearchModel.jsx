import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/style";
import { SafeAreaView } from "react-native-web";
import { Headline, Searchbar } from "react-native-paper";

const SearchModel = ({
  seacrhquery,
  setactiveSearch,
  setsearchquery,
  products = [],
}) => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setsearchquery(query)}
          value={seacrhquery}
          style={{
            marginTop: 20,
          }}
        />
        <ScrollView>
          <View style={{ paddingHorizontal: 10, paddingVertical: 40 }}>
            {products.map((i) => (
              <SearchItem
                key={i._id}
                imgSrc={i.images[0]?.url}
                name={i.name}
                price={i.price}
                handler={() =>
                  navigate.navigate("Productsdetails", { id: i._id })
                }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const SearchItem = ({ price, name, imgSrc, handler }) => (
  <TouchableOpacity onPress={handler}>
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.color2,
        elevation: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginVertical: 30,
      }}
    >
      <Image
        source={{
          uri: imgSrc,
        }}
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          resizeMode: "contain",
          top: -15,
          left: 10,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <View
        style={{
          width: "80%",
          paddingHorizontal: 30,
        }}
      >
        <Text numberOfLines={1}>{name}</Text>
        <Headline
          numberOfLines={1}
          style={{
            fontWeight: "800",
          }}
        >
          ${price}
        </Headline>
      </View>
    </View>
  </TouchableOpacity>
);

export default SearchModel;
