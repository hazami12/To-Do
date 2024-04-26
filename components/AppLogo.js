import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react'

const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/flowcrastinate-logo.png')}
      />
    </View>
  )
}

export default AppLogo

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    height: 150,
    width: 280,
    marginTop: 5,
  },
});