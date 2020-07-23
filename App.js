import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ChildComponent from './ChildComponent';

export default class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      name: "Mike",
      age: "10",
      isVisible: false,
    }
  }

  onShow(){
    this.setState({isVisible: true});
  }

  onHide(){
    this.setState({isVisible: false});
  }

  changeProps(){

    this.setState({
      name: 'Peter',
      age: 12
    })
  }

  render(){
    return(
      <View>
        <Text style={{color: 'red', fontSize: 20}}>Welcome to React Naive World</Text>

        <TouchableOpacity onPress={() => this.onShow()} style={{marginTop:10, backgroundColor: 'blue', justifyContent:'center', alignItems:'center', padding: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Show Child Component</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => this.onHide()} style={{marginTop:10, backgroundColor: 'orange', justifyContent:'center', alignItems:'center', padding: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Hide Child Component</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => this.changeProps()} style={{marginTop:10, backgroundColor: 'purple', justifyContent:'center', alignItems:'center', padding: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Change Props</Text>
        </TouchableOpacity>


      {
        this.state.isVisible &&
        <ChildComponent childName={this.state.name} childAge={this.state.age} /> 
      }

      </View>
    );
  }
}