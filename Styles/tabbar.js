import { StyleSheet } from "react-native";
import { colors } from "./global";

export const tabbarStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.purple,
  },
  mainContainerWeb: {
    width: '100vw',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 16,
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10,
  },
  routeName: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  focusedRoute: {
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 10
  },
  unfocusedRoute: {
    backgroundColor: colors.purple,
  }
});