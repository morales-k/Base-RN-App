import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./Navigation/Navigation";
import { globalStyles } from './Styles/global';

function App() {

  return (
    <SafeAreaView>
      <View style={globalStyles.pageBase}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;