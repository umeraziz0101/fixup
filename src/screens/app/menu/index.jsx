import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Icons, Texts, Wrapper} from '../../../components';
import {routes} from '../../../services';
import {width, height, totalSize} from 'react-native-dimension';
import {AppIcons, appStyles, colors} from '../../../services/utilities';

export default function Index({navigation}) {
  const {navigate, goBack, replace} = navigation;

  const options = [
    {
      label: 'Edit Profile',
      value: 'editProfile',
      route: routes.editProfile,
    },
    {
      label: 'Share Your Feedback',
      value: 'shareFeedback',
      route: routes.shareFeedback,
    },
    {
      label: 'Terms of Service',
      value: 'termsOfService',
      route: routes.termsOfService,
    },
    {
      label: 'Privacy Policy',
      value: 'privacyPolicy',
      route: routes.privacyPolicy,
    },
    {
      label: 'About Us',
      value: 'aboutUs',
      route: routes.shareFeedback,
    },
    {
      label: 'Logout',
      value: 'logout',
      route: null,
    },
  ];
  const handleOptionPress = (item, index) => {
    const {label, value, route} = item;
    const isLogout = value === 'logout';
    if (isLogout) {
      //logout logic
      // replace(routes.auth);
    }
    if (value === 'editProfile') {
      navigate(route);
    } else {
      replace(route);
    }
  };
  return (
    <Wrapper flex={1} style={{justifyContent: 'flex-end'}}>
      <Wrapper style={StyleSheet.absoluteFill}>
        <Pressable onPress={() => goBack()} style={{flex: 1}} />
      </Wrapper>
      <Wrapper
        backgroundColor1
        paddingVerticalLarge
        style={[
          {borderTopRightRadius: 50, borderTopLeftRadius: 50},
          appStyles.shadowExtraDark,
        ]}>
        <Wrapper
          isBordered
          paddingHorizontalZero
          paddingVerticalZero
          style={{borderRadius: 20, borderColor: colors.appBackgroundColor5}}>
          {options.map((item, index) => {
            const {label, value} = item;
            const isLogout = value === 'logout';
            return (
              <Pressable
                // key={index}
                onPress={() => handleOptionPress(item, index)}>
                <Wrapper
                  flexDirectionRow
                  paddingVerticalSmall
                  marginHorizontalBase
                  style={{paddingVertical: height(1.75)}}>
                  <Wrapper flex={1}>
                    <Texts
                      isMedium
                      font1Bold={isLogout}
                      style={{
                        color: !isLogout
                          ? colors.appTextColor7
                          : colors.appTextColor1,
                      }}>
                      {label}
                    </Texts>
                  </Wrapper>
                  <Icons.Custom source={AppIcons.right} size={totalSize(2)} />
                </Wrapper>
                <Wrapper
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.appBackgroundColor5,
                  }}
                />
              </Pressable>
            );
          })}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}
