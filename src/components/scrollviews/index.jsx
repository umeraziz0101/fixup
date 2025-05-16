import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';

const KeyboardAvoiding = ({children, ...props}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView showsVerticalScrollIndicator={false} {...props}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {KeyboardAvoiding};
