
import { ScrollView, View, Text, Image } from 'react-native';
import { globalStyles } from '../Styles/global';

function Home() {
  const bookImg = require('../assets/books.jpg');
  const bookShelfImg = require('../assets/bookshelf.jpg');

  return (
    <ScrollView>
      <View style={globalStyles.container}>
          <Text style={globalStyles.heading}>Books Plus</Text>
          <Text style={globalStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <Image style={globalStyles.img} source={bookImg} />
          <Text style={globalStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam quisque id diam vel quam elementum pulvinar etiam non. Ut diam quam nulla porttitor massa. Dignissim sodales ut eu sem integer vitae justo eget. Senectus et netus et malesuada fames ac turpis egestas.</Text>
          <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Books of every variety</Text>
            <Image style={globalStyles.img} source={bookShelfImg} />
            <Text style={globalStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam quisque id diam vel quam elementum pulvinar etiam non. Ut diam quam nulla porttitor massa. Dignissim sodales ut eu sem integer vitae justo eget.</Text>
          </View>
      </View>
    </ScrollView>
  )
}

export default Home;