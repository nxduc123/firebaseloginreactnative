import React from 'react';
import { WebBrowser } from 'expo';
import {View, TouchableOpacity} from 'react-native';
import {TestComponent } from '../components/AppComponents';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, watchPersonData } from './../redux/app-redux';
import { Container, Header, Content, Form, Item, Input, Icon, Button, Text, InputGroup, Left, Right, Body, Title } from 'native-base';

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal,
    personData: state.personData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    setFavoriteAnimal: (text) => { dispatch(setFavoriteAnimal(text)) },
    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}
class HomeScreen extends React.Component {
   static navigationOptions = {
    header: null,
  }; 

  constructor(props) {
    super(props);
    this.state = {
      favoriteAnimal: this.props.favoriteAnimal,
    }

    this.props.watchPersonData();
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  onSetFavoriteAnimalPress = () => {
    this.props.setFavoriteAnimal(this.state.favoriteAnimal);
  }
  onMenuPress = () =>{
    this.props.navigation.navigate('DrawerOpen')
  };
  render() {
    return (
    /*   <View style={{paddingTop:20}}>
        <Button title="Signout" onPress={this.onSignoutPress} />
        <Text>{this.props.favoriteAnimal}</Text>

        <TextInput style={{borderWidth:1, width: 200, height: 40}}
          value={this.state.favoriteAnimal}
          onChangeText={(text) => { this.setState({favoriteAnimal: text}) }}
        />
        <Button title="Set Favorite Animal" onPress={this.onSetFavoriteAnimalPress} />

        
      </View> */
      <Container>
      <Content>
        <Header>
          <Left> 
            <Icon title='Menu' name='ios-menu' onPress={() => this.onMenuPress()}/>
          </Left>
          <Body/>
          <Right>
            <Button transparent block onPress={() => this.onSignoutPress()}>
            <Title>Signout</Title>
            <Icon name='ios-exit'  />           
            </Button>
          </Right>
        </Header>

        <View style={{paddingTop:10}}/>
        <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
          <Text>{this.props.favoriteAnimal} </Text>
        </View>
        <View style={{paddingTop:10}}/>
          
          <Item regular>
                  <Input
                  value={this.state.favoriteAnimal} 
                  onChangeText={(text) => { this.setState({favoriteAnimal: text}) }}
                />
          </Item>
          
          <View style={{paddingTop:20}}/>

          <Button iconLeft block onPress={() => this.onSetFavoriteAnimalPress()}>
            <Icon name='ios-appstore'  />
            <Text>Change</Text>         
          </Button>
        
        
      </Content>
    </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)