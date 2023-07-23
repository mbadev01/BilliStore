import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colors, defaultImg, inputStyling } from "../styles/style";
import { Avatar, Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    !name || !email || !password || !address || !city || !country || !pinCode;
  return (
    <>
      <View
        style={{
          padding: 0,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex: 1,
          backgroundColor: colors.color2,
        }}
      >
        <View style={{ marginBottom: 20 }}>
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
            Sign Up
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
              minHeight: 200,
            }}
          >
            <Avatar.Image
              size={80}
              source={{
                uri: avatar ? avatar : defaultImg,
              }}
              style={{
                alignSelf: "center",
                backgroundColor: colors.color1,
              }}
            />
            <TouchableOpacity onPress={() => navigate.navigate("camera")}>
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>
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
              placeholder="Password..."
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
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
              Sign Up
            </Button>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "100",
                color: colors.color2,
              }}
            >
              OR
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate.navigate("login")}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 18,
                  textTransform: "uppercase",
                  color: colors.color2,
                  marginHorizontal: 20,
                  marginVertical: 20,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SignUp;
