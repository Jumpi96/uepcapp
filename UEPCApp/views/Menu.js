import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Button } from 'react-native-elements';

class Menu extends React.Component {

  openURL(link) {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            raised
            icon={{name: 'money', type: 'font-awesome', color: 'white'}}
            title='Simulador Salarial'
            backgroundColor='#2387D1'
            color='white'
            onPress={() => this.openURL('http://servicios.uepc.org.ar/NuevoSimulador/Default.aspx')}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 5,
  }
});

export default Menu;
