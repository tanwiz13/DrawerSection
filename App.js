import React, {Component}from 'react';
import { createStackNavigator,createDrawerNavigator } from 'react-navigation';
import SectionListComponent from './SectionListComponent';
import DrawerLayoutComponent from './DrawerLayoutComponent';
import MainPage from './MainPage';

 

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = createStackNavigator({
    
  DrawerLayoutComponent: {
    screen: DrawerLayoutComponent
  }

  
});
const RootStack1 = createDrawerNavigator({
    
  DrawerLayoutComponent: {
    screen: SectionListComponent
  }
});