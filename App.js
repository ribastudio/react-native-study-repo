import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ComponentTest from './src/ComponentTest';

export default () => (
    <View>
      <ComponentTest />
      <StatusBar style="auto" />
    </View>
  );

