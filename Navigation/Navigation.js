import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import BestSellers from '../Screens/BestSellers';

function Navigation({state, navigation, platform}) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"} 
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Best Sellers" component={BestSellers} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  )
}

export default Navigation;