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


export default class ForgotPasswordScreen extends React.Component {
  /* static navigationOptions = {
    header: null,
  }; */
  constructor(props){
    super(props);
    this.state = {
      email:"",
    };
  }
  onResetPassPress =() => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
  .then(() => { Alert.alert("Đã gửi mail về inbox , vui lòng check hộp thư");},
  
  (error) => {
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
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
          />
       
          <View style={{paddingTop:10}}/>

          <View style={{width: 200, height: 40}}>
            <Button title="Gửi Mail" onPress={this.onResetPassPress}/>
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
