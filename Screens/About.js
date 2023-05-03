
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import { globalStyles } from '../Styles/global';
const windowWidth = Dimensions.get("window").width;

function About() {
  const storeShelvesImg = require('../assets/storeshelves.jpg');
  const displayImg = require('../assets/display.jpg');

  return (
    <ScrollView>
      <View style={globalStyles.container}>
          <Text style={globalStyles.heading}>About Books Plus</Text>
          <Image style={globalStyles.imgLg} source={storeShelvesImg} />
          <Text style={globalStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Mauris sit amet massa vitae tortor condimentum. Elit at imperdiet dui accumsan sit amet nulla facilisi. Lacus luctus accumsan tortor posuere ac ut consequat semper. Pulvinar etiam non quam lacus. Sit amet mauris commodo quis imperdiet. Risus quis varius quam quisque id. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Dui faucibus in ornare quam viverra orci. Sapien eget mi proin sed libero enim. Convallis posuere morbi leo urna molestie. Ultrices sagittis orci a scelerisque purus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Quam viverra orci sagittis eu volutpat odio facilisis mauris.</Text>
      </View>
      <View style={globalStyles.container}>
        <View style={globalStyles.rowContainer}>
          <Image style={globalStyles.imgSm} source={displayImg} />
          <Text style={globalStyles.rowDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
        <Text style={globalStyles.rowDescription}>Libero volutpat sed cras ornare arcu dui. Mauris sit amet massa vitae tortor condimentum. Elit at imperdiet dui accumsan sit amet nulla facilisi. Lacus luctus accumsan tortor posuere ac ut consequat semper. Pulvinar etiam non quam lacus. Sit amet mauris commodo quis imperdiet. Risus quis varius quam quisque id. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Dui faucibus in ornare quam viverra orci. Sapien eget mi proin sed libero enim. Convallis posuere morbi leo urna molestie. Ultrices sagittis orci a scelerisque purus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Quam viverra orci sagittis eu volutpat odio facilisis mauris.</Text>
      </View>
    </ScrollView>
  )
}

export default About;