import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ChildComponent from './ChildComponent';

export default class App extends React.Component {

  constructor(props){
    super(props)

    console.log('App', 'constructor');
    this.state = {
      isVisible: false,
      name: "Mike",
      age: 10,
    }
  }

  onChildComponentShow(){
    this.setState({isVisible: true});
  }

  onChildComponentHide(){
    this.setState({isVisible: false});
  }

  onPropsChanged(){
    this.setState({name: "Peter", age: 12});
  }
  

  render(){
    console.log('App', 'render');
    return(
      <View>
        <Text>Hello Welcome to react native world</Text>

        <TouchableOpacity style={{marginTop:20, backgroundColor: 'blue', padding: 10, justifyContent: 'center', alignItems:'center'}} 
        onPress={()=> this.onChildComponentShow()}>
          <Text style={{color: 'white', fontSize: 18}}>Show ChildComponent</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={{marginTop:20, backgroundColor: 'blue', padding: 10, justifyContent: 'center', alignItems:'center'}} 
        onPress={()=> this.onChildComponentHide()}>
          <Text style={{color: 'white', fontSize: 18}}>Hide ChildComponent</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={{marginTop:20, backgroundColor: 'blue', padding: 10, justifyContent: 'center', alignItems:'center'}} 
        onPress={()=> this.onPropsChanged()}>
          <Text style={{color: 'white', fontSize: 18}}>Change Props</Text>
        </TouchableOpacity>

        {
          this.state.isVisible &&
          <ChildComponent name={this.state.name} age={this.state.age}/>
        }
      </View>
    )
  }
}