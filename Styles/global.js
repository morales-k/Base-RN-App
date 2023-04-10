import { StyleSheet } from "react-native";

export const colors = {
  white: "#F2F2F2",
  purple: "#40405F",
  gray: "#3A3A3D",
  lightgray: "#D3D2DC",
};

export const globalStyles = StyleSheet.create({
  pageBase: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightgray,
  },
  font20: {
    fontSize: 20,
  }
});