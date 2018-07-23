import React from 'react';
import { View, ImageBackground, StyleSheet, Linking } from 'react-native';
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
      <View style={{flex: 1}}>
        <ImageBackground
          resizeMode={'stretch'}
          style={{flex: 1}}
          source={require('../assets/background.png')}
        >
          <View style={styles.button}>
            <Button
              raised
              icon={{name: 'money', type: 'font-awesome'}}
              title='Simulador salarial'
              backgroundColor='#437CF5'
              onPress={() => this.openURL('http://servicios.uepc.org.ar/NuevoSimulador/Default.aspx')}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    marginTop: 5,
  }
});

export default Menu;
