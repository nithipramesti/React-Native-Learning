import React from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: 'grey',
  },
  textInput: {
    borderRadius: 16,
    marginHorizontal: 32,
    backgroundColor: 'lightgrey',
    marginVertical: 8,
    padding: 12,
  },
});

const KeyboardView = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{...styles.container}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
          <TextInput style={{...styles.textInput}} />
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardView;
