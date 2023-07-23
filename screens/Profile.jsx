import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/style";
import { Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const user = {
    name: "Muhammad Bilal Azhar",
    email: "sample.com@gmail.com",
  };
  const navigate = useNavigation;
  const [avatar, setAvatar] = useState(null);
  return (
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
          Profile
        </Text>
      </View>
      <View
        style={{
          elevation: 7,
          backgroundColor: colors.color3,
          padding: 30,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Avatar.Image
          size={100}
          source={{
            uri: avatar,
          }}
          style={{
            backgroundColor: colors.color1,
          }}
        />
        <TouchableOpacity
          onPress={() => navigate.navigate("camera", { updateProfile: true })}
        >
          <Button textColor={colors.color1}>Change Photo</Button>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            marginTop: 10,
            color: colors.color2,
          }}
        >
          {user?.name}
        </Text>
        <Text
          style={{
            fontWeight: "300",
            color: colors.color2,
          }}
        >
          {user?.email}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      ></View>
    </View>
  );
};

export default Profile;