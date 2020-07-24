import React from 'react';
import {View, Text, TouchableOpacity,} from 'react-native';
import ChildComponent from './ChildComponent';

export default class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      isVisible: false,
      name: "Mike",
      age: 10,
    }
  }

  showChildComponent(){
    
    this.setState({isVisible: true});
  }

  hideChildComponent(){
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
        <Text style={{color: 'blue', fontSize: 20}}>Welcome to React Naive World</Text>

        <TouchableOpacity onPress={()=> this.showChildComponent()} style={{marginTop: 10, padding: 10, backgroundColor: 'blue', justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Show Child Component</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={()=> this.hideChildComponent()} style={{marginTop: 10, padding: 10, backgroundColor: 'purple', justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Hide Child Component</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={()=> this.changeProps()} style={{marginTop: 10, padding: 10, backgroundColor: 'orange', justifyContent: 'center', alignItems:'center'}}>
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