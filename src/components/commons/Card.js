import React from "react";
import { View, Text } from "react-native";

const Card = ({ children }) => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1, // kasih border
    borderRadius: 2, // Setiap corner di buat round
    borderColor: "#DDD", // Gray border
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // height shadow
    shadowOpacity: 0.1, // transparansi
    shadowRadius: 2, // kaya borderRadius
    elevation: 1, // Fly effect
    marginLeft: 5, // Jarak kiri
    marginRight: 5, // Jarak Kanan
    marginTop: 10 // Jarak atas
  }
};

export { Card };
