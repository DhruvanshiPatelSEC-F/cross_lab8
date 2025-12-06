import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const ProfileScreen = ({navigation}) => {
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Profile Screen</Text>
 <Text style={styles.text}>User: Dhruvanshi patel</Text>
 <Text style={styles.text}>Email: dhruvanshipatel08@gmai.com</Text>
 <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
 </View>
 );
};
const styles = StyleSheet.create({
 container: {
 flex: 1,
 alignItems: 'center',
 justifyContent: 'center',
 padding: 20,
 },
 title: {
 fontSize: 24,
 fontWeight: 'bold',
 marginBottom: 20,
 },
 text: {
 fontSize: 16,
 marginBottom: 10,
 },
});
export default ProfileScreen;