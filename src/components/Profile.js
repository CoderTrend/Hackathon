import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView, Dimensions } from 'react-native';
import { theme } from '../core/theme';
const { height } = Dimensions.get('window');
const Profile = ({ children }) => 
<ScrollView style={styles.text}>
  <View style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.avatar} source={require('../../assets/avatar.png')} />
      <Text style={styles.name}>Người dùng</Text>
      <View style={styles.review}>
        <View style={styles.textReview}>
          <Text>0</Text>
          <Text>Đánh giá</Text>
        </View>
        <View style={styles.textReview}>
          <Text>0</Text>
          <Text>E-point</Text>
        </View>
        <View style={styles.textReview}>
          <Text>0</Text>
          <Text>Xếp hạng</Text>
        </View>
      </View>
    </View>
    <View style={styles.feature}>
      <Image style={styles.icon} source={require('../../assets/gift.png')} />
      <Text style={styles.textF}> Lịch sử cho tặng đồ </Text>
    </View>
    <View style={styles.feature}>
      <Image style={styles.icon} source={require('../../assets/send-gift.png')} />
      <Text style={styles.textF}> Lịch sử mua hàng </Text>
    </View>
    <View style={styles.feature}>
      <Image style={styles.icon} source={require('../../assets/view.png')} />
      <Text style={styles.textF}> Mới xem </Text>
    </View>
    <View style={styles.feature}>
      <Image style={styles.icon} source={require('../../assets/support.png')} />
      <Text style={styles.textF}> Hỗ trợ </Text>
    </View>
    <View style={styles.feature}>
      <Image style={styles.icon} source={require('../../assets/setting.png')} />
      <Text style={styles.textF}> Thiết lập tài khoản </Text>
    </View>
    <View style={styles.feature}>
      <Image style={styles.icon} source={require('../../assets/exit.png')} />
      <Text style={styles.textF}> Đăng xuất </Text>
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
  content: {
    alignItems: 'center',
    backgroundColor: '#eee',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
  },
  review: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  textReview: {
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginBottom: 50,
  },
  feature: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50
  },
  textF: {
    paddingTop: 25,
  }
});

export default memo(Profile);