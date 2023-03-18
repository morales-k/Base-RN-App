import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./Navigation/Navigation";

function App() {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "teal"
  }
});

export default App;