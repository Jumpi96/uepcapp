import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Menu from './views/Menu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'stretch'}
          style={{flex: 0.3}}
          source={require('./assets/logo.png')}
        />
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003E94',
    marginTop: 10
  }
});