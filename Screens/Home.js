
import { View, Text} from 'react-native';
import { globalStyles } from '../Styles/global';

function Home() {

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.font20}>Home Screen</Text>
    </View>
  )
}

export default Home;