
import { StyleSheet, View, Text, Button } from 'react-native';

function Contact() {

  return (
    <View style={styles.container}>
        <Text>Contact Screen</Text>
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

export default Contact;