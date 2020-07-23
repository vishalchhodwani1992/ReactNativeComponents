import React from 'react';
import {View, Text} from 'react-native';

export default class ChildComponent extends React.Component{

    constructor(props){
        super(props)
        console.log('ChildComponent', "constructor");
    }

    render(){
        console.log('ChildComponent', "render");
        return(
            <View >
                <Text style={{fontSize: 40, color: 'green', marginTop: 10, padding: 10}}>
                    I am a child component. My name is {this.props.childName} and I am {this.props.childAge} years old
                </Text>
            </View>
        )
    }
}