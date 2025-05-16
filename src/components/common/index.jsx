import {ImageBackground, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {appImages, appStyles, colors} from '../../services/utilities';
import {width, height, totalSize} from 'react-native-dimension';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Buttons, Wrapper, Spacer, Texts} from '..';

export function BgImageWrapper({children}) {
  return (
    <ImageBackground
      style={{flex: 1, height: null, width: null}}
      source={appImages.background_1}>
      {children}
    </ImageBackground>
  );
}

export const PopupPrimary = ({
  isVisible,
  toggle,
  title,
  info,
  onPressButton,
  buttonText,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={toggle}
      backdropOpacity={0}
      onBackdropPress={toggle}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <Wrapper
        paddingVerticalLarge
        alignItemsCenter
        backgroundColor1
        style={[
          {borderTopRightRadius: 50, borderTopLeftRadius: 50},
          appStyles.shadowExtraDark,
        ]}>
        <Wrapper style={StyleSheet.absoluteFill}>
          <Image
            source={appImages.background_1}
            style={{
              flex: 1,
              height: null,
              width: null,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
            }}
          />
        </Wrapper>
        <Icon
          name="checkbox-marked-circle-outline"
          color={colors.appColor1}
          size={totalSize(7.5)}
        />
        <Spacer isLarge />
        <Wrapper marginHorizontalLarge>
          <Texts isH5 isWhite alignCenter>
            {title}
          </Texts>
          {info ? (
            <>
              <Spacer isBasic />
              <Texts isH6 isWhite alignCenter font1Medium>
                {info}
              </Texts>
            </>
          ) : null}
        </Wrapper>
        <Spacer isLarge />
        <Wrapper marginHorizontalLarge>
          <Buttons.ColoredGradient
            containerStyle={{paddingHorizontal: 20}}
            title={buttonText || 'Button'}
            onPress={onPressButton}
            // shadowWhite
          />
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};
