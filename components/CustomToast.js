/**
 * Developed by: Bijoy Mohanta
 * Purpose: to toast 
 * 
 *  ref: https://reactnativecode.com/custom-common-toast-for-both-android-ios-app/
 * 
 *  this.refs.defaultToastBottom.ShowToastFunction('Default Toast Bottom Message.');
 *  this.refs.defaultToastTop.ShowToastFunction('Default Toast Top Message.');
*   this.refs.defaultToastBottomWithDifferentColor.ShowToastFunction('Default Toast Bottom Message With Different Color.');
 *  this.refs.defaultToastTopWithDifferentColor.ShowToastFunction('Default Toast Top Message With Different Color.');

 * 
 *  <CustomToast ref = "defaultToastBottom" position = "bottom"/>
    <CustomToast ref = "defaultToastTop" position = "top"/>
    <CustomToast ref = "defaultToastBottomWithDifferentColor" backgroundColor='#4CAF50' position = "bottom"/>
    <CustomToast ref = "defaultToastTopWithDifferentColor" backgroundColor='#E91E63' position = "top"/>
    
 */


import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

export default class CustomToast extends Component {
  constructor() {
    super();

    this.animateOpacityValue = new Animated.Value(0);
    this.state = {
      ShowToast: false
    }
    this.ToastMessage = '';
  }

  componentWillUnmount() {
    this.timerID && clearTimeout(this.timerID);
  }

  show(message = "Custom React Native Toast", duration = 2000) {
    this.ToastMessage = message;

    this.setState({ ShowToast: true }, () => {
      Animated.timing
        (
        this.animateOpacityValue,
        {
          toValue: 1,
          duration: 500
        }
        ).start(this.hide(duration))
    });

  }

  hide = (duration) => {
    this.timerID = setTimeout(() => {
      Animated.timing
        (
        this.animateOpacityValue,
        {
          toValue: 0,
          duration: 500
        }
        ).start(() => {
          this.setState({ ShowToast: false });
          clearTimeout(this.timerID);
        })
    }, duration);
  }

  render() {
    if (this.state.ShowToast) {
      return (
        <Animated.View style={[styles.animatedToastView, { opacity: this.animateOpacityValue, top: (this.props.position == 'top') ? '10%' : '90%', backgroundColor: this.props.backgroundColor }]}>
          <Text numberOfLines={1} style={[styles.ToastBoxInsideText, { color: this.props.textColor }]}>{this.ToastMessage}</Text>
        </Animated.View>
      );
    }
    else {
      return null;
    }
  }
}


CustomToast.propTypes = {
  backgroundColor: PropTypes.string,
  position: PropTypes.oneOf([
    'top',
    'bottom'
  ]),
  textColor: PropTypes.string
};


CustomToast.defaultProps = {
  backgroundColor: '#fffc00',
  position: 'bottom',
  textColor: '#000',

}


const styles = StyleSheet.create({

  animatedToastView:
  {
    marginHorizontal: 30,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 15,
    //opacity: 0.3,
    //borderWidth: 0.5,
    //borderColor: "#000",
    zIndex: 9999,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  ToastBoxInsideText:
  {
    fontSize: 15,
    alignSelf: 'stretch',
    textAlign: 'center'
  }

});