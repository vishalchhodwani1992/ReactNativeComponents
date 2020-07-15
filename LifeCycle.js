import React from 'react';
import {View, Text} from 'react-native';

export default class LifeCycle extends React.Component{


    constructor(props){
        super(props)

        console.log('LifeCycle', "constructor");
    }


    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle', "getDerivedStateFromProps");    
        return null;    
    }

    componentDidMount(){
        console.log('LifeCycle', "componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('LifeCycle', "shouldComponentUpdate");
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle', "getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycle', "componentDidUpdate");
    }

    componentWillUnmount(){
        console.log('LifeCycle', "componentWillUnmount");
    }

    render(){
        console.log('LifeCycle', "render");
        return(
            <View >
                <Text style={{fontSize: 40, color: 'green', marginTop: 10, padding: 10}}>
                    I am a child component. My name is {this.props.name} and I am {this.props.age} years old
                </Text>
            </View>
        )
    }
}