import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {
  AppIcons,
  appStyles,
  colors,
  fonts,
  fontSizes,
} from '../../services/utilities';
import {height, width, totalSize} from 'react-native-dimension';
import Wrapper from '../wrapper';

export const Colored = ({
  title,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  inputStyle,
  right,
  containerStyle,
  hidden,
  ...props
}) => {
  return (
    <View
      style={[
        {
          marginHorizontal: width(7.5),
          backgroundColor: colors.appColor1,
          borderRadius: 10,
          paddingHorizontal: width(2.5),
        },
        containerStyle,
      ]}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '75%'}}>
          <Text
            style={{
              fontSize: fontSizes.tiny,
              fontFamily: fonts.appFont1Bold,
              color: colors.appTextColor2,
              paddingTop: height(1),
            }}>
            {title}
          </Text>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            // secureTextEntry={hidden}
            style={[
              {
                height: height(5),
                fontFamily: fonts.appFont1Regular,
                fontSize: fontSizes.small,
              },
              inputStyle,
            ]}
            {...props}
          />
        </View>
        {right && (
          <View
            style={{
              flex: 1,
              // backgroundColor: 'blue',
              flexDirection: 'column',
              justifyContent: 'center',
              // alignSelf: 'flex-end',
              alignItems: 'center',
              // marginRight: 10,
              // padding: 5,
            }}>
            {right}
          </View>
        )}
      </View>
    </View>
  );
};

export const ColoredSecondary = ({containerStyle, inputStyle, ...props}) => {
  return (
    <Wrapper
      style={[
        {
          // backgroundColor: '#cccccc25',
          backgroundColor: colors.appBackgroundColor4,
          borderRadius: 5,
        },
        // appStyles.shadowExtraLight,
        containerStyle,
      ]}>
      <TextInput
        placeholderTextColor={colors.appTextColor5}
        style={[
          {
            height: height(5),
            paddingHorizontal: width(4),
            fontFamily: fonts.appFont2Light,
            fontSize: fontSizes.small,
          },
          inputStyle,
        ]}
        {...props}
      />
    </Wrapper>
  );
};
