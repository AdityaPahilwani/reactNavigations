/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const App = props => {
  const navigate = () => {
    props.navigation.navigate('Setting');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Pressable onPress={navigate} style={styles.button}>
        <Text style={styles.text}>Navigate</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24,
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#44d9e6',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default App;
