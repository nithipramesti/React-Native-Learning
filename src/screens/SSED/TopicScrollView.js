import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const TodoItem = ({todoActivity}) => {
  return (
    <View style={{...todoItemStyle.todoItemContainer}}>
      <Text>{todoActivity}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          style={{backgroundColor: 'green', ...todoItemStyle.todoBtn}}
          activeOpacity={0.8}
          underlayColor="white"
          onPress={() => null}>
          <Text style={{color: 'white'}}>Done</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={{backgroundColor: 'red', ...todoItemStyle.todoBtn}}>
          <Text style={{color: 'white'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const todoItemStyle = StyleSheet.create({
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 4,
    alignItems: 'center',
  },
  todoBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
});

const TopicScrollView = () => {
  const todoData = [
    {
      todoActivity: 'Make bed',
    },
    {
      todoActivity: 'Wash face',
    },
    {
      todoActivity: 'Breakfast',
    },
    {
      todoActivity: 'Coding web',
    },
    {
      todoActivity: 'Read book',
    },
    {
      todoActivity: 'Coding mobile',
    },
    {
      todoActivity: 'Lunch',
    },
    {
      todoActivity: 'Take a nap',
    },
    {
      todoActivity: 'Drink juice',
    },
    {
      todoActivity: 'Finish UI design',
    },
    {
      todoActivity: 'Exercise',
    },
    {
      todoActivity: 'Shower',
    },
    {
      todoActivity: 'Cook for dinner',
    },
    {
      todoActivity: 'Watch Netflix',
    },
    {
      todoActivity: 'Read light book',
    },
    {
      todoActivity: 'Light yoga',
    },
    {
      todoActivity: 'Skin care',
    },
    {
      todoActivity: 'Meditation',
    },
    {
      todoActivity: 'Write journal',
    },
    {
      todoActivity: 'Sleep',
    },
  ];

  const renderTodos = () => {
    return todoData.map((val, id) => {
      return <TodoItem key={id} todoActivity={val.todoActivity} />;
    });
  };

  const renderTodoFlatlist = ({item}) => {
    return <TodoItem todoActivity={item.todoActivity} />;
  };

  return (
    <View>
      {/* {renderTodos()} */}
      <FlatList
        keyExtractor={item => item.todoActivity}
        data={todoData}
        // renderItem={({item, index}) => (
        //   renderTodoFlatlist(item.todoActivity)
        // )}
        renderItem={renderTodoFlatlist}
      />
    </View>
  );
};

export default TopicScrollView;
