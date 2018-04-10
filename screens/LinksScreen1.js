import React from 'react';
import { Platform,View, Text, FlatList } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Icon, Button, Text, InputGroup, Left, Right, Body, Title} from 'native-base';
import {getCoinFromServer} from '../networking/server'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props){
    super(props);
      super(props);
      this.state = ({
        coinFromServer:[]
      });
  }
  
  refreshDataFromServer = () => {
    getCoinFromServer().then((coins) => {
      this.setState({ coinFromServer: coins});
    }).catch((error)=>{
        this.setState({coinFromServer: [] });
    });
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  onMenuPress = () =>{
    this.props.navigation.navigate('DrawerOpen')
  };

  render() {
    return (
      <Container>
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
      <Content>     
      </Content>
    </Container>
    
      
    );
  }
}
