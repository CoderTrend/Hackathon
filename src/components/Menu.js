import React, { memo } from 'react';
import { AppRegistry, StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity, Image, } from 'react-native';
import { theme } from '../core/theme';
const Menu = ({ children }) => 
<View>
  <Text style={styles.stayHome}>#StayHome - Ecovy</Text>
  <View style={styles.toolbar}>
    <TouchableOpacity style={styles.toolbarButton}>
      <Image style={styles.icon} source={require('../../assets/menu.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.toolbarTitle}>
      <TextInput style={styles.search} placeholder={'Tìm kiếm...'} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.toolbarButton}>
      <Image style={styles.icon} source={require('../../assets/cart.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.toolbarButton}>
      <Image style={styles.icon} source={require('../../assets/avatar.png')} />
    </TouchableOpacity>
  </View>
</View>;

const styles = StyleSheet.create({
  stayHome: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    color:'#333',
    textAlign:'center',
    fontWeight:'bold',
  },
  toolbar:{
    backgroundColor:'#fff',
    flexDirection:'row'    //Step 1
  },
  toolbarButton:{
    width: 50,            //Step 2
    color:'#fff',
    textAlign:'center'
  },
  toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //Step 3
  },
  icon: {
    width: 50,
    height: 50
  },
  search: {
    paddingLeft: 20,
    height: 40,
    borderWidth: 0,
    marginTop: 5,
    borderRadius: 30,
    backgroundColor: '#eee'
  },
});

export default memo(Menu);
