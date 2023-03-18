import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Account from '../Screens/Account';

function Navigation({ state, descriptors, navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"} 
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default Navigation;