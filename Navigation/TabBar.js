import { View, Text, Pressable } from 'react-native';
import { tabbarStyles } from '../Styles/tabbar';

const TabBar = ({ state, navigation}) =>{
  return (
    <View style={tabbarStyles.mainContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key = {index} style={tabbarStyles.mainItemContainer}>
            <Pressable
              onPress = {onPress}
              style = {isFocused ? tabbarStyles.focusedRoute : tabbarStyles.unfocusedRoute}>
              <View style={tabbarStyles.textContainer}>
                <Text style={tabbarStyles.routeName}>{route.name}</Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

export default TabBar;