import { View, Text, Pressable, Platform } from 'react-native';
import { tabbarStyles } from '../Styles/tabbar';

const TabBar = (props) => {
 const { state, navigation } = props;
 const platform = Platform.OS;

  return (
    <View style={platform === "web" ? 
        [tabbarStyles.mainContainer, tabbarStyles.mainContainerWeb] : 
        tabbarStyles.mainContainer}>
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
              style = {isFocused ? 
                tabbarStyles.focusedRoute : 
                tabbarStyles.unfocusedRoute}>
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