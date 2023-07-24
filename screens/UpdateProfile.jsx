import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, inputStyling } from "../styles/style";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
const UpdateProfile = () => {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const navigate = useNavigation();
  const inputOption = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
  };
  const loading = false;
  const submitHandler = () => {
    alert("Yeah");
  };
  const disableBtn =
    !name || !email || !address || !city || !country || !pinCode;
  return (
    <View
      style={{
        padding: 0,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: colors.color2,
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
          Edit Profile
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          margin: 10,
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TextInput
            {...inputOption}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            {...inputOption}
            placeholder="Email..."
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOption}
            placeholder="Full Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            {...inputOption}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            {...inputOption}
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            {...inputOption}
            placeholder="Pin Code"
            keyboardType="phone-pad"
            value={pinCode}
            onChangeText={setPinCode}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={disableBtn}
            onPress={submitHandler}
            style={{
              backgroundColor: colors.color1,
              margin: 2,
              padding: 6,
            }}
          >
            Update
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
