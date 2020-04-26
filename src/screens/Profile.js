import React, { memo } from 'react';
import Background from '../components/Main';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { AppRegistry, StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity, Image, } from 'react-native';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Button from '../components/Button';

const Profiles = ({ navigation }) => (
  <Background>
    <Menu />
    <Header>Trang cá nhân</Header>
    <Profile />
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.toolbarButton}>
        <Image style={styles.icon} source={require('../../assets/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SupperMarket')} style={styles.toolbarButton}>
        <Image style={styles.icon} source={require('../../assets/suppermarket.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Love')} style={styles.toolbarButton}>
        <Image style={styles.icon} source={require('../../assets/love.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.toolbarButton}>
        <Image style={styles.icon} source={require('../../assets/profile.png')} />
      </TouchableOpacity>
    </View>
  </Background>
);
const styles = StyleSheet.create({
  toolbar:{
    position: 'absolute',
    bottom: 0,
    backgroundColor:'#fff',
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolbarButton:{
    width: 50,
    color:'#fff',
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    width: 50,
    height: 50
  },
});
export default memo(Profiles);
