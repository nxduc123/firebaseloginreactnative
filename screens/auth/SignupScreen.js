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

export default class SignupScreen extends React.Component {
  /* static navigationOptions = {
    header: null,
  }; */
  constructor(props){
  super(props);
  this.state = {
    email:"",
    password:"",
    passwordConfirm:"",
  };
}
onSignUpPress = () => {
  if (this.state.password !== this.state.passwordConfirm){
    Alert.alert("Password không trùng nhau.!");
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() =>{

    },(error) =>{
      Alert.alert(error.message);


    });


}
onBackToLongin =() => {
  var navActions = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName:"Login"})
    ] 
  });
  this.props.navigation.dispatch(navActions);

}
  render() {
    return (
      <View style={styles.container}>
        <Text>SignupScreen</Text>
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
          
          <TextInput style={{width: 200, height: 40, borderWidth: 2}}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                    placeholder="Xác Thực Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
          />
          <View style={{width: 200, height: 40}}>
            <View style={{paddingTop:10}}/>
            <Button title="Đăng Kí" onPress={this.onSignUpPress}/>
            <View style={{paddingTop:10}}/>
            <Button title="Về Đăng Nhập" onPress={this.onBackToLongin}/>
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
