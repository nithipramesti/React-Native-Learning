import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Topic4 from '../styles';

const Topic5 = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [todoInput, setTodoInput] = useState('Hello');

  const SampleComponent = () => {
    useEffect(() => {
      return () => {
        Alert.alert('COMPONENT UNMOUNT');
      };
    }, []);

    return (
      <View>
        <Text>SAMPLE COMPONENT</Text>
      </View>
    );
  };

  //componentDidMount
  useEffect(() => {
    console.log('Hello');
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log('Todo count is updated');
  }, [todoCount]);

  //componentDidUpdate
  useEffect(() => {
    console.log('Todo input is updated');
  }, [todoInput]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Component unmount');
    };
  }, []);

  return (
    <View>
      <Text>Topic 5</Text>
      <Text>TODO COUNT: {todoCount}</Text>
      <TouchableOpacity
        onPress={() => {
          setTodoCount(todoCount + 1);
        }}>
        <Text>Change Todo Count</Text>
      </TouchableOpacity>
      <Text>TODO INPUT: {todoInput}</Text>
      <TouchableOpacity
        onPress={() => {
          setTodoInput('Change');
        }}>
        <Text>Change Todo Input</Text>
      </TouchableOpacity>

      {todoCount === 0 ? <SampleComponent /> : null}
    </View>
  );
};

export default Topic5;
