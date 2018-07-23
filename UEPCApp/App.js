import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import Menu from './views/Menu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'UEPC Móvil', style: { color: '#fff' } }}
        />
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003E94'
  }
});