# react-native-customize-toast
React Native customize toast both for android and iOS

# Installation
```js
npm install react-native-customize-toast --save
```

# Properties
```js
backgroundColor={"#4CAF50"}  
textColor={"#fff"}  
position={"top"} //default position={"bottom"} 
```

# ScreenShots
<img src="/screenshot/Screenshot_2.png"  width="520" height="720">

# Usages Example
```js
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CustomToast from 'react-native-customize-toast';

export default class App extends Component {
  componentDidMount() {
    this.refs.appToast.show("Transaction is successfully done.");
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomToast ref="appToast" position={"bottom"} backgroundColor={"#4CAF50"} textColor={"#fff"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
```
