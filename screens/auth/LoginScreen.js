import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {NavigationActions} from 'react-navigation';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  /* static navigationOptions = {
    header: null,
  }; */

constructor(props){
  super(props);
  this.state = {
    email:"",
    password:"",
  };
}

onLoginPress = () =>{
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
    
  }, (error) => {
    Alert.alert(error.message);
     });
};

onCreateAccountPress = () => {
  var navActions = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName:"SignUp"})
    ] 
  });
  this.props.navigation.dispatch(navActions);
}

onForgetPasswordPress = () =>{
  var navActions = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName:"ForgotPassword"})
    ] 
  });
  this.props.navigation.dispatch(navActions);

}
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
         <TextInput style={{width: 200, height: 40, borderWidth: 2}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder="Nhập Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
          />
          <View style={{paddingTop:10}}/>
          <TextInput style={{width: 200, height: 40, borderWidth: 2}}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text}) }}
                    placeholder="Nhập Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
          />
          <View style={{paddingTop:10}}/>

          <View style={{width: 200, height: 40}}>
            <Button title="Đăng Nhập" onPress={this.onLoginPress}/>
            <View style={{paddingTop:10}}/>
            <Button title="Tạo Tài Khoản" onPress={this.onCreateAccountPress}/>
            <View style={{paddingTop:10}}/>
            <Button title="Quên Mật Khẩu" onPress={this.onForgetPasswordPress}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    
  },
});
