import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    fontColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1, // kasih border
    borderRadius: 5, // Setiap corner di buat round
    borderColor: "#007aff", // Gray border
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // height shadow
    shadowOpacity: 0.5, // transparansi
    shadowRadius: 10, // kaya borderRadius
    elevation: 1 // Fly effect
  }
};

export { Button };
