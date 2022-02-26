import React from "react";
// Heder Button
import { HeaderButton } from "react-navigation-header-buttons";
// Icons
import { Ionicons } from "@expo/vector-icons";
// Color
import Color from "../../constant/Color";
import { Platform } from "react-native";

const customHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Color.primary}
    />
  );
};

export default customHeaderButton;
