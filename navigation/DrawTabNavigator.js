import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, DrawerNavigator} from 'react-navigation';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import FetchScreen from '../screens/FetchScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainTabNavigator from './MainTabNavigator'

export default DrawerNavigator(
    {
        HomeScreen: {
        screen: HomeScreen,
        },
        LinksScreen: {
            screen: LinksScreen,
        },
        SettingsScreen: {
            screen: SettingsScreen,
        },
  
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch (routeName) {
              case 'Test':
                iconName =
                  Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle';
                break;
            }
            return (
              <Ionicons
                name={iconName}
                size={28}
                style={{ marginBottom: -3 }}
                color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
              />
            );
          },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
      },


);
