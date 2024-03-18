import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <TextInput placeholder="Your email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TouchableOpacity
        onPress={() => alert('indo pra tela de dashboard')}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('hello')}>
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
	  <TouchableOpacity onPress={() => alert('hello')}>
	  <Text style={styles.forgotTextSimples}>Don’t have an account? <Text style={styles.forgotText}>Sign Up</Text></Text>
        
      </TouchableOpacity>
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
    fontSize: 16,
  },
  forgotText: {
    color: 'blue',
    marginBottom: 10,
    textAlign: 'right',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  forgotTextSimples:{
	color: 'black',
    marginBottom: 10,
    textAlign: 'right',
    marginVertical: 10,
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
    marginBottom: 24,
  },
  googleButton: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    width: '47%',
	backgroundColor: '#4285F4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
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
