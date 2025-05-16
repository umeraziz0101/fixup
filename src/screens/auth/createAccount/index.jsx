import {View, Text, Image, Pressable, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {
  Buttons,
  Common,
  Headers,
  Spacer,
  TextInputs,
  Texts,
  Wrapper,
} from '../../../components';
import {AppIcons, colors} from '../../../services/utilities';
import {height, width, totalSize} from 'react-native-dimension';
import Icon from 'react-native-vector-icons/dist/Ionicons';
export default function index({navigation}) {
  const {goBack} = navigation;
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [isChecked, setChecked] = useState(false);
  return (
    <Wrapper isMain>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Headers.Primary title={'Create Account'} onPressBack={goBack} />
      <Wrapper flex={1}>
        <Common.BgImageWrapper>
          <Spacer isBasic />
          <Spacer isSmall />
          <TextInputs.Colored title={'Email'} value={'johnwilliam@gmail.com'} />
          <Spacer isBasic />

          <TextInputs.Colored
            title={'Password'}
            value={'12345678'}
            inputStyle={{letterSpacing: totalSize(0.5)}}
            secureTextEntry={passwordHidden}
            // hidden={passwordHidden}
            right={
              <Pressable onPress={() => setPasswordHidden(prev => !prev)}>
                <Image
                  source={passwordHidden ? AppIcons.eye : AppIcons.eyeOff}
                  style={{height: totalSize(2.5), width: totalSize(2.5)}}
                />
              </Pressable>
            }
          />
          <Spacer isBasic />
          <Pressable onPress={() => setChecked(prev => !prev)}>
            <Wrapper
              flexDirectionRow
              style={{marginHorizontal: width(5), alignItems: 'center'}}>
              <Icon
                name={
                  isChecked
                    ? 'checkmark-circle-sharp'
                    : 'checkmark-circle-outline'
                }
                size={height(2.5)}
                color={
                  isChecked ? colors.appColor1 : colors.appBackgroundColor1
                }
              />
              <Spacer width={width(2.5)} />
              <Texts isSmall isWhite>
                I accept the{' '}
                <Texts colorPrimary font1Bold isSmall>
                  Terms of Services
                </Texts>{' '}
                and{' '}
                <Texts colorPrimary font1Bold isSmall>
                  Privacy Policy
                </Texts>
              </Texts>
            </Wrapper>
          </Pressable>
          <Spacer height={height(10)} />
          <Buttons.ColoredGradient
            title={"Let's go!"}
            containerStyle={{marginHorizontal: width(10)}}
          />
          <Spacer isLarge />
        </Common.BgImageWrapper>
      </Wrapper>
    </Wrapper>
  );
}
