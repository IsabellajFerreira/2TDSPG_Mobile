import { RouteProp, useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';

import { RootStackParamList } from '../navigation';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details() {
  const router = useRoute();

  console.log(router.params);

  const email = router.params.email;
  const info = router.params.info;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Details</Text>
        <Text style={styles.subtitle}>{email}</Text>
        <Text style={styles.subtitle}>{info}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
