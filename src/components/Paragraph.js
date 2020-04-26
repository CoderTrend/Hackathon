import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView, Dimensions } from 'react-native';
import { theme } from '../core/theme';
const { height } = Dimensions.get('window');
const Paragraph = ({ children }) => 
<ScrollView style={styles.text}>
  <View style={styles.container}>
    <View style={styles.title}>
      <Text>GIỚI THIỆU</Text>
    </View>
    <View style={styles.logo}>
      <Image source={require('../assets/logo.png')} />
    </View>
    <View style={styles.content}>
      <Text style={styles.heading}>Ecovy là gì?</Text>
      <Text style={styles.subContent}>- Là siêu thị 0 đồng trực tuyến.</Text>
      <Text style={styles.subContent}>- Là nơi những người đang dư thừa tặng đồ cho những người cần đến.</Text>
      <Text style={styles.subContent}>- Là nơi những người nghèo, những người bị ảnh hưởng kinh tế vì dịch bệnh được chia sẻ và hỗ trợ.</Text>
      <Text style={styles.heading}>Ecovy vs Covid-19?</Text>
      <Text style={styles.subContent}>- Góp phần chia sẻ, hỗ trợ những hoàn cảnh khó khăn bị ảnh hưởng bởi dịch bệnh thông qua Siêu thị 0 đồng.</Text>
      <Text style={styles.subContent}>- Góp phần vào việc giãn cách xã hội, giảm tiếp xúc trực tiếp, tránh tụ tập đông người.</Text>
      <Text style={styles.subContent}>- Giúp tiết kiệm chi phí cho người dùng trong cuộc sống, giảm áp lực khó khăn về kinh tế do Đại dịch gây ra.</Text>
    </View>
    <View style={styles.title}>
      <Text>TIN MỚI</Text>
    </View>
    <View style={styles.content}>
      <Image style={styles.image} source={require('../../assets/moitruong.png')} />
      <Text style={styles.h3}>Rác thải khiến nguồn nước ô nhiễm</Text>
    </View>
    <View style={styles.content}>
      <Image style={styles.image} source={require('../../assets/co2.png')} />
      <Text style={styles.h3}>Tận dụng CO2 để tái chế pin</Text>
    </View>
  </View>
</ScrollView>;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
  },
  logo: {
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#eee',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    padding: 10,
    fontSize: 18,
  },
  heading: {
    fontWeight: 'bold',
    paddingTop: 10,
    fontSize: 18,
  },
  subContent: {
    paddingLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20
  },
  container: {
    marginBottom: 50,
  },
  h3: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 15,
  }
});

export default memo(Paragraph);