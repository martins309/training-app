import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <View>
      <Text>This is the navigation portion of the app</Text>
    </View>
  );
}

const Stack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigtaion>
        <Stack.Screen
          name= 'HomePage'
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
