import {View, Text} from 'react-native';
import React from 'react';
import {
  Buttons,
  Common,
  Icons,
  Spacer,
  Texts,
  Wrapper,
} from '../../../components';
import {AppIcons, appStyles, colors} from '../../../services/utilities';
import {width, height, totalSize} from 'react-native-dimension';
import {routes} from '../../../services';

export default function Index({navigation}) {
  const {navigate} = navigation;
  return (
    <Wrapper isMain>
      <Wrapper flex={1} center style={{backgroundColor: colors.appColor1}}>
        <Icons.Button
          customIcon={AppIcons.thumbs_up}
          buttonColor={colors.appColor2}
          // buttonColor={colors.appBackgroundColor1}
          // containerStyle={[appStyles.shadow]}
          buttonSize={width(50)}
          iconSize={width(35)}
          buttonStyle={{borderRadius: 100}}
        />
      </Wrapper>
      <Wrapper flex={1}>
        <Common.BgImageWrapper>
          <Wrapper flex={1} paddingVerticalLarge justifyContentSpaceevenly>
            <Texts isH4 isWhite alignCenter>
              Thank You!
            </Texts>
            <Wrapper marginHorizontalBase>
              <Texts isWhite isLarge alignCenter>
                Thanks for using our app, We hope you like it and use it again
              </Texts>
            </Wrapper>
            <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
              <Icons.Custom size={totalSize(5)} source={AppIcons.facebook} />
              {/* <Spacer isHorizontal isBasic /> */}
              <View style={{marginHorizontal: 10}} />
              <Icons.Custom size={totalSize(5)} source={AppIcons.instagram} />
            </Wrapper>
            <Wrapper style={{marginHorizontal: width(20)}}>
              <Buttons.ColoredGradient
                title={'Go Home'}
                onPress={() => {
                  navigate(routes.homeTab, {screen: routes.home});
                }}
              />
            </Wrapper>
          </Wrapper>
        </Common.BgImageWrapper>
      </Wrapper>
    </Wrapper>
  );
}
