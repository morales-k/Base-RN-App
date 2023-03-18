
import { StyleSheet, View, Text, Button } from 'react-native';

function Home() {

  return (
    <View  style={styles.container}>
        <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc"
  }
});

export default Home;