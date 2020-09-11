import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Vibration } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function formatSeconds(seconds) {
  if (seconds < 60) return `${seconds} seg`

  return `${Math.floor(seconds / 60)} min`
}

function Timer() {
  const timerRef = useRef()

  const [timerEnabled, setTimerEnabled] = useState(false)
  const [secondsEllapsed, setSecondsEllapsed] = useState(0)

  useEffect(() => {
    if (secondsEllapsed === 1500) {
      clearInterval(timerRef.current)
      Vibration.vibrate(2000)
      setSecondsEllapsed(0)
      setTimerEnabled(false)
    }
  }, [secondsEllapsed])

  function toggleTimer() {
    if (timerEnabled) {
      clearInterval(timerRef.current)

      setTimerEnabled(false)
    } else {
      timerRef.current = setInterval(() => {
        setSecondsEllapsed(state => state + 1)
      }, 1000)

      setTimerEnabled(true)
    }
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#222', '#000']}
      style={styles.container}
    >

      <Text style={styles.title}>Pomodrom</Text>

      <AnimatedCircularProgress
        size={300}
        width={12}
        fill={(secondsEllapsed * 100) / 1500}
        rotation={0}
        tintColor="#b80000"
        backgroundColor="#fff">
        {
          () => (
            <Text style={styles.progress}>{formatSeconds(secondsEllapsed)}</Text>
          )
        }
      </AnimatedCircularProgress>


      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <MaterialIcons name={timerEnabled ? "pause" : "play-arrow"} size={36} color="#FFF" />
      </TouchableOpacity>
    </LinearGradient >

  );
}

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 40,
  },
  banner: {
    width: '100%',
    height: 250,
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
  },
  progress: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#b80000',
    textAlign: 'center',
  }
})