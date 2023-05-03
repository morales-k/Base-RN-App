import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export const bestsellerStyles = StyleSheet.create({
  bestSellerContainer: {
    maxWidth: windowWidth > 1023 ? '40%' : '90%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  bookCol: {
    maxWidth: windowWidth > 1023 ? '70%' : '90%',
    flexDirection: 'column',
    paddingTop: 10,
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: windowWidth > 1023 ? 5 : 20,
    textAlign: 'left',
  },
  bookAuthor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: windowWidth > 1023 ? 5 : 20,
    textAlign: 'left',
  },
  bookDescription: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: windowWidth > 1023 ? 5 : 20,
    textAlign: 'left',
  },
  bestSellerImg: {
    width: windowWidth > 1023 ? 80 : 40,
    height: windowWidth > 1023 ? 90 : 50,
    marginTop: 20,
    marginBottom: 20,
  }
});