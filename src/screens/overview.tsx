import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation();
  const router = useRoute();

  // ESTADO: tudo que pode vir a mudar na tela

  // FUNÇÕES: tudo que pode ser executado na tela

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // CHAMA A API
    // SE DER CERTO, VAI PRA TELA DE DASHBOARD

    // fetch('https://api.example.com/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       navigation.navigate('details');
    //     } else {
    //       alert('Email ou senha inválidos');
    //     }
    //   })
    //   .catch(() => {
    //     alert('Erro ao fazer login');
    //   });

    navigation.replace('Details', { email, info: 'info hello' });
  };

  const validateEmail = (str: string) => {
    // validando se o email é válido
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str);
  };

  const validatePassword = (str: string) => {
    // validando se a senha é válida
    return str.length > 5;
  };

  const isButtonDisabled = () => {
    // true e true = true
    // true e false = false
    // false e true = false
    // false e false = false
    return !validateEmail(email) || !validatePassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>

      <TextInput
        placeholder="Your email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginButton}
        disabled={isButtonDisabled()}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.forgotText}>Forgot password</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => alert('indo pra tela de dashboard')}
          style={styles.googleButton}>
          <Text style={styles.loginButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('indo pra tela de dashboard')}
          style={styles.facebookButton}>
          <Text style={styles.loginButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotText: {
    color: 'blue',
    marginBottom: 10,
    textAlign: 'right',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  dividerText: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  googleButton: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '47%',
  },
  facebookButton: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '47%',
  },
});
