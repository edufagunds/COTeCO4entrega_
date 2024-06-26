import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Login from '../login/Login';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const imageSize = '30%';

const Home = () => {
  const navigation = useNavigation();

  const irparaLogin = () => {
    navigation.navigate('login');
  };
  const irparaCadastro = () => {
    navigation.navigate('cadastro');
  };

  const irparaConhecer = () => {
    navigation.navigate('ConhecaNos')
  };

  console.log('Executanto Home')
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../images/coteco_logo.png')}
          style={styles.imagem}
        />
        <TouchableOpacity onPress={irparaLogin}>
          <View style={[styles.containerPadrao, {width: width * 0.5}]}>
            <Text style={styles.textoEnviar}>SOU CLIENTE</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={irparaCadastro}>
          <View style={[styles.containerPadrao, {backgroundColor: '#333333', marginBottom: height * 0.04}]}>
            <Text style={styles.textoEnviar}>QUERO SER CLIENTE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={irparaConhecer}>
        <View style={[styles.containerConhecer, {marginTop: height * 0.18}]}>
          <Text style={styles.textoPadrao}>CONHECA-NOS</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: width * 0.8,
    alignItems: 'center',
    marginTop: height * 0.3,
  },
  imagem: {
    maxWidth: '53%', 
    maxHeight: '40%', 
    marginBottom: height * 0.01,
  },
  textoTitulo: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.03,
    textAlign: 'left',
  },
  textoPadrao: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.005,
  },
  containerPadrao: {
    width: width * 0.7,
    height: height * 0.07,
    fontSize: width * 0.05,
    borderRadius: 5,
    backgroundColor: '#FFA500',
    marginBottom: height * 0.03,
  },
  textoEnviar: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  containerConhecer : {
    width: width * 1,
    height: height * 0.09,
    fontSize: width * 0.04,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
