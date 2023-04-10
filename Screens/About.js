
import { View, Text} from 'react-native';
import { globalStyles } from '../Styles/global';

function About() {

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.font20}>About Screen</Text>
    </View>
  )
}

export default About;