import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  Buttons,
  Icons,
  Spacer,
  TextInputs,
  Texts,
  Wrapper,
} from '../../../components';
import {
  AppIcons,
  appStyles,
  colors,
  fonts,
  fontSizes,
} from '../../../services/utilities';
import {height, width, totalSize} from 'react-native-dimension';
const OilType = ({isVisible, toggle}) => {
  const options = [
    'Manufacturers Recommendation',
    '0w-20',
    '5w-20',
    '5w-30',
    '10w-30',
    '10w-40',
  ];
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggle} style={{margin: 0}}>
      <Wrapper
        isColored
        style={[
          {
            paddingHorizontal: totalSize(1),
            paddingVertical: totalSize(1),
          },
        ]}>
        <Wrapper
          isColored
          marginHorizontalZero
          style={[
            {
              paddingHorizontal: width(4),
              paddingVertical: height(1),
            },
            appStyles.shadowLight,
          ]}>
          <Wrapper flexDirectionRow alignItemsCenter>
            <Wrapper flex={1}>
              <Texts isSmall font1Bold textColor2>
                Oil type
              </Texts>
              <Spacer isTiny />
              <Texts isSmall font1Bold style={{color: colors.appTextColor3}}>
                Please select Oil type from here
              </Texts>
              <Texts isSmall style={{color: colors.appTextColor3}}>
                All Oil High Quality Synthetic
              </Texts>
            </Wrapper>
            <Icons.Custom source={AppIcons.arrowDown} size={totalSize(3)} />
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        <Wrapper
          isColored
          marginHorizontalZero
          paddingVerticalZero
          paddingHorizontalZero
          style={[appStyles.shadowLight]}>
          {options.map((item, index) => {
            return (
              <View key={index}>
                <Pressable key={`pressable-${index}`} onPress={() => toggle()}>
                  <Wrapper paddingVerticalSmall paddingHorizontalBase>
                    <Texts isMedium textColor2>
                      {item}
                    </Texts>
                  </Wrapper>
                </Pressable>
                {index != options.length - 17 ? (
                  <Wrapper
                    key={`border-${index}`}
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: colors.appBackgroundColor6,
                    }}
                  />
                ) : null}
                {index === 0 ? (
                  <>
                    <Wrapper paddingVerticalSmall paddingHorizontalBase>
                      <Texts isMedium textColor2 alignCenter>
                        ------ OR ------
                      </Texts>
                    </Wrapper>
                    <Wrapper
                      key="or-divider"
                      style={{
                        borderBottomWidth: 0.5,
                        borderColor: colors.appBackgroundColor6,
                      }}
                    />
                  </>
                ) : null}
              </View>
            );
          })}
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};

export default OilType;
