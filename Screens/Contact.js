
import { ScrollView, View, Text, Image, Button, Linking, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Styles/global';

function Contact() {
  const openBookImg = require('../assets/openbook.jpg');

  return (
    <ScrollView>
      <View style={globalStyles.container}>
          <Text style={globalStyles.heading}>Contact Us</Text>
          <Image style={globalStyles.img} source={openBookImg} />
          <Text style={globalStyles.description}>123 Reading Road, Readsville, WA</Text>
          <TouchableOpacity
            style={globalStyles.contactBtn}
            onPress={() => Linking.openURL('mailto:customerservice@booksplus.com?subject=Comments/Questions')}>
            <Text style={globalStyles.contactBtnText}>customerservice@booksplus.com</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.contactBtn}
            onPress={() => Linking.openURL(`tel:${5555555555}`)}>
            <Text style={globalStyles.contactBtnText}>(555) 555-5555</Text>
          </TouchableOpacity>
          <Text style={globalStyles.heading}>Hours</Text>
          <Text style={globalStyles.description}>Monday: 10am-8pm</Text>
          <Text style={globalStyles.description}>Tuesday: 10am-8pm</Text>
          <Text style={globalStyles.description}>Wednesday: 10am-8pm</Text>
          <Text style={globalStyles.description}>Thursday: 10am-8pm</Text>
          <Text style={globalStyles.description}>Friday: 10am-8pm</Text>
          <Text style={globalStyles.description}>Saturday: Closed</Text>
          <Text style={globalStyles.description}>Sunday: Closed</Text>
      </View>
    </ScrollView>
  )
}

export default Contact;