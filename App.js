import { createAppContainer} from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScree";

const navigator = createStackNavigator({
  Index: IndexScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title:'Blogs'
  }
});

//App JS is expecting at least one component to be returned
//We want to create a wrapper for the navigator by dowing the follwing
const App =  createAppContainer(navigator);

/*
We wrap the navigator into our own component
*/
export default () => {
  return <App />
};