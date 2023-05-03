
import { ScrollView, View, Text, Image } from 'react-native';
import { globalStyles } from '../Styles/global';
import { bestsellerStyles } from '../Styles/bestsellerstyles';

function BestSellers() {
  const bookMarkedImg = require('../assets/bookmarked.png');

  return (
    <ScrollView>
      <View style={globalStyles.container}>
          <Text style={globalStyles.heading}>Best Sellers</Text>
          <View style={bestsellerStyles.bestSellerContainer}>
            <Image style={bestsellerStyles.bestSellerImg} source={bookMarkedImg} />
            <View style={bestsellerStyles.bookCol}>
              <Text style={bestsellerStyles.bookTitle}>The Little Tree</Text>
              <Text style={bestsellerStyles.bookAuthor}>Jacob Teller</Text>
              <Text style={bestsellerStyles.bookDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
          </View>
          <View style={bestsellerStyles.bestSellerContainer}>
            <Image style={bestsellerStyles.bestSellerImg} source={bookMarkedImg} />
            <View style={bestsellerStyles.bookCol}>
              <Text style={bestsellerStyles.bookTitle}>A New Day</Text>
              <Text style={bestsellerStyles.bookAuthor}>Joe Best</Text>
              <Text style={bestsellerStyles.bookDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
          </View>
          <View style={bestsellerStyles.bestSellerContainer}>
            <Image style={bestsellerStyles.bestSellerImg} source={bookMarkedImg} />
            <View style={bestsellerStyles.bookCol}>
              <Text style={bestsellerStyles.bookTitle}>Scarlet's Brunch</Text>
              <Text style={bestsellerStyles.bookAuthor}>Terry Jay</Text>
              <Text style={bestsellerStyles.bookDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
          </View>
          <View style={bestsellerStyles.bestSellerContainer}>
            <Image style={bestsellerStyles.bestSellerImg} source={bookMarkedImg} />
            <View style={bestsellerStyles.bookCol}>
              <Text style={bestsellerStyles.bookTitle}>What A World</Text>
              <Text style={bestsellerStyles.bookAuthor}>Samantha Loveday</Text>
              <Text style={bestsellerStyles.bookDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
          </View>
          <View style={bestsellerStyles.bestSellerContainer}>
            <Image style={bestsellerStyles.bestSellerImg} source={bookMarkedImg} />
            <View style={bestsellerStyles.bookCol}>
              <Text style={bestsellerStyles.bookTitle}>Best Desserts</Text>
              <Text style={bestsellerStyles.bookAuthor}>Allie Martin</Text>
              <Text style={bestsellerStyles.bookDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
          </View>
          <View style={bestsellerStyles.bestSellerContainer}>
            <Image style={bestsellerStyles.bestSellerImg} source={bookMarkedImg} />
            <View style={bestsellerStyles.bookCol}>
              <Text style={bestsellerStyles.bookTitle}>100 Travel Destinations</Text>
              <Text style={bestsellerStyles.bookAuthor}>Erick Timber</Text>
              <Text style={bestsellerStyles.bookDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
          </View>
      </View>
    </ScrollView>
  )
}

export default BestSellers;