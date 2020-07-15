/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import LifeCycle from './LifeCycle';

export class  App extends React.Component {


  constructor(props){
    super(props)

    console.log('App', "constructor");

    this.state = {
      isChildVisible: false,
      childName: "Mike",
      childAge: 10,
    }
  }


  static getDerivedStateFromProps(props, state){
      console.log('App', "getDerivedStateFromProps");       
      
      return null; 
  }

  componentDidMount(){
      console.log('App', "componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
      console.log('App', "shouldComponentUpdate");
      return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('App', "getSnapshotBeforeUpdate");

      return null;
  }

  componentDidUpdate(){
      console.log('App', "componentDidUpdate");
  }

  componentWillUnmount(){
      console.log('App', "componentWillUnmount");
  }

  showChildComponent(){
   this.setState({isChildVisible: true})
 }
 
  hideChildComponent(){
    this.setState({isChildVisible: false});
  }

  changeProps(){
    this.setState({childName: "Peter", childAge: 12});
  }

  render(){
    console.log('App', "render");
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Hello {this.state.name} Welcome to the React Native World</Text>
        
        
        <TouchableOpacity style={styles.customButton} onPress={()=> this.showChildComponent()}>
          <Text style={[styles.buttonText, {color: "white"}]}>Show Child Component</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.customButton, {backgroundColor: 'orange'}]} onPress={()=> this.hideChildComponent()}>
          <Text style={[styles.buttonText, {color: "black"}]}>Hide Child Component</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.customButton, {backgroundColor: 'green'}]} onPress={()=> this.changeProps()}>
          <Text  style={[styles.buttonText, {color: "white"}]}>Change Props</Text>
        </TouchableOpacity>

        {
          this.state.isChildVisible != "" &&
          <View style={{marginTop: 50}}>
            <LifeCycle name={this.state.childName} age={this.state.childAge}/>
          </View>
        }
      </View>
      );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 22,
    color: 'red',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10
  },
  button: {
    marginTop:20
  },
  customButton: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    marginTop: 20
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default App;
