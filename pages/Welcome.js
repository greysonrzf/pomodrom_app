import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import bannerImg from '../assets/banner.png'

// import { Container } from './styles';

function Welcome() {
  const navigation = useNavigation()

  function navigateToTimer() {
    navigation.navigate('Timer')
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#222', '#000']}
      style={styles.container}
    >
      <Image style={styles.banner} source={bannerImg} />
      <Text style={styles.title}>Staying focused at work isn't easy!</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToTimer}>
        <MaterialIcons name="chevron-right" size={36} color="#FFF" />
      </TouchableOpacity>
    </LinearGradient>

  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 40,
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    maxWidth: 240,
  },
  button: {
    width: 72,
    height: 72,
    backgroundColor: '#b80000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})