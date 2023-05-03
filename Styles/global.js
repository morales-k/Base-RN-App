import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export const colors = {
  white: "#F2F2F2",
  purple: "#40405F",
  gray: "#3A3A3D",
  lightgray: "#D1D1D1",
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
    padding: 10,
    backgroundColor: colors.lightgray,
    paddingBottom: windowWidth > 1023 ? '5%' : '30%',
  },
  rowContainer: {
    maxWidth: windowWidth > 1023 ? 900 : 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
    paddingTop: windowWidth > 1023 ? '10%' : 5,
    backgroundColor: colors.lightgray,
  },
  rowDescription: {
    flex: 1,
    maxWidth: windowWidth > 1023 ? 880 : 350,
    fontSize: 20,
    textAlign: 'left',
  },
  heading: {
    fontSize: 30,
    marginTop: 50,
    borderBottomColor: colors.purple,
    borderBottomWidth: 4,
  },
  description: {
    maxWidth: windowWidth > 1023 ? '40%' : '90%',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  img: {
    width: windowWidth > 1023 ? 500 : 300,
    height: windowWidth > 1023 ? 500 : 300,
    marginTop: 20,
    marginBottom: 20,
    borderColor: colors.gray,
    borderWidth: 2,
  },
  imgSm: {
    width: windowWidth > 1023 ? 450 : 180,
    height: windowWidth > 1023 ? 400 : 200,
    marginBottom: 20,
    marginRight: 20,
    borderColor: colors.gray,
    borderWidth: 2,
  },
  imgLg: {
    width: windowWidth > 1023 ? 700 : 300,
    height: windowWidth > 1023 ? 500 : 250,
    marginTop: 20,
    marginBottom: 20,
    borderColor: colors.gray,
    borderWidth: 2,
  },
  contactBtn: {
    backgroundColor: colors.purple,
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  contactBtnText: {
    fontSize: 18,
    color: colors.white,
  }
});