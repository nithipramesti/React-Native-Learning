import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
  const scrollRef = useRef(null);
  const scrollToView = () => {
    scrollRef.current.scrollIntoView();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView ref={scrollRef}>
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
        <TextInput style={{...styles.textInput}} onFocus={scrollToView} />
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardView;
