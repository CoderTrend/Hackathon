import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView, Dimensions } from 'react-native';
import { theme } from '../core/theme';
const { height } = Dimensions.get('window');
const Profiles = ({ children }) => 
<ScrollView style={styles.text}>
  <View style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.images} source={require('../../assets/taiche.png')} />
    </View>
    <View style={styles.title}>
      <Text style={styles.title}>Danh mục</Text>
    </View>
    <Text style={styles.category}>Giấy vụn</Text>
    <View style={styles.content}>
      <Image style={styles.images} source={require('../../assets/giayvun.png')} />
    </View>
    <Text style={styles.category}>Đồ cũ</Text>
    <View style={styles.content}>
      <Image style={styles.images} source={require('../../assets/docu.png')} />
    </View>
    <Text style={styles.category}>Đồ nhựa</Text>
    <View style={styles.content}>
      <Image style={styles.images} source={require('../../assets/donhua.png')} />
    </View>
    <Text style={styles.category}>Sắt vụn</Text>
    <View style={styles.content}>
      <Image style={styles.images} source={require('../../assets/satvun.png')} />
    </View>
    <Text style={styles.category}>linh tinh</Text>
    <View style={styles.content}>
      <Image style={styles.images} source={require('../../assets/linhtinh.png')} />
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
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    color: '#6FBE44',
    fontWeight: 'bold',
  },
  images: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  category: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 15
  },
  container: {
    marginBottom: 50,
  }
});

export default memo(Profiles);