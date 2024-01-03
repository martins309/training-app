import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashBoard } from './components/DashBoard';

export default function App() {
  return (
    <View>
      <Text>This is the navigation portion of the app</Text>
      <DashBoard />

    </View>
  );
}

const Stack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigtaion>
        <Stack.Screen
          name= 'DashBoard'
          component={DashBoard}
        />
      </Stack.Navigtaion>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
