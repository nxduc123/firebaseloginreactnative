import React, {Component} from 'react';
import { FlatList } from "react-native";
import {AppRegistry, SectionList, StyleSheet,Text,View,Alert,Platform,ListItem,Title } from 'react-native';
//const apiGetAllCoin = 'https://api.coinmarketcap.com/v1/ticker/';
const apiGetAllCoin = 'https://facebook.github.io/react-native/movies.json';
async function getCoinFromServer() {
    try {
        let reponse = await fetch(apiGetAllCoin);
        let reponseJson = await reponse.json();
        return reponseJson.movies;
        
        } catch (error){
            console.error(`Error IS : ${error}`);
        }
}

export {getCoinFromServer};