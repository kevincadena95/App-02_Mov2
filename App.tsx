import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImcScreen from './screens/ImcScreen';
import FormularioScreen from './screens/FormularioScreen';

export default function App() {
  return (
   /*  <FormularioScreen/> */
    <ImcScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
