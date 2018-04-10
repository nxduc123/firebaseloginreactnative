import React from "react";
import { FlatList,View } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title, Item } from "native-base";
import {getCoinFromServer} from '../networking/server'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      coinsFromServer: [],
    });
  }
  componentDidMount(){
    this.refreshDataFromServer();
  }

  refreshDataFromServer = () => {
    getCoinFromServer().then((coins) => {
      this.setState({ coinFromServer: coins});
    }).catch((error)=>{
        this.setState({coinFromServer: [] });
    });
  }
  
  refreshFlatlist = (activeKey) => {
    this.setState((prevState) => {
      return {
        deleteRowKey: activeKey

      };
    });
    this.refs.FlatList.scrollToEnd();
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
      <FlatList
          data={this.state.coinsFromServer}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
        </View>
    );
  }
}