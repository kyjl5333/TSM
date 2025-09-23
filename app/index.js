import { Stack, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Btnlogin from '../components/btnlogin';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Btnlogin
        onPress={() => router.replace('home')}

      />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default LoginScreen;