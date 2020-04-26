import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView, Dimensions } from 'react-native';
import { theme } from '../core/theme';
const { height } = Dimensions.get('window');
const Carts = ({ children }) => 
<ScrollView style={styles.text}>
  <View style={styles.container}>
    <View style={styles.product}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
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
  container: {
    marginBottom: 50,
  },
  product: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default memo(Carts);