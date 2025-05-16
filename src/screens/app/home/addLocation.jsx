import {View, Text, TextInput} from 'react-native';
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
const AddLocation = ({isVisible, toggle}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggle} style={{margin: 0}}>
      <Wrapper backgroundColor1 isColored>
        <Wrapper alignItemsCenter style={{marginTop: -width(17.5)}}>
          <Icons.Button
            customIcon={AppIcons.location_2}
            buttonSize={width(25)}
            iconSize={width(12.5)}
          />
        </Wrapper>
        <Spacer isSmall />
        <Texts isMedium font2Medium alignCenter>
          Add Location
        </Texts>
        <Spacer isSmall />
        <TextInputs.ColoredSecondary placeholder="Search here" />
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Buttons.ColoredGradient
            title={'Submit'}
            gradientColors={colors.appGradiant3}
            titleStyle={[
              appStyles.textRegular,
              appStyles.textFont2Regular,
              appStyles.textWhite,
            ]}
            gradientStyle={{height: height(5), paddingHorizontal: width(10)}}
            onPress={toggle}
          />
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};

export default AddLocation;
