// import {View, Text, StatusBar} from 'react-native';
// import React from 'react';
// import Wrapper from '../wrapper';
// import Texts from '../texts';
// import {colors} from '../../services/utilities';

// export const Primary = ({title, statusBarLight}) => {
//   return (
//     <View
//       style={{
//         // flex: 1,
//         paddingTop: 60,
//         paddingBottom: 20,
//         backgroundColor: 'white',
//       }}>
//       {statusBarLight && (
//         <StatusBar
//           barStyle={'dark-content'}
//           backgroundColor={'transparent'}
//           translucent={true}
//         />
//       )}
//       <Texts font2Bold isH6 alignCenter>
//         {title}
//       </Texts>
//     </View>
//   );
// };

import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';
import {AppIcons, appImages, colors} from '../../services/utilities';
import Texts from '../texts';
import Icon from 'react-native-vector-icons/dist/Octicons';

import React from 'react';
import Wrapper from '../wrapper';

export const Primary = ({
  containerStyle,
  title,
  titleStyle,
  statusBarLight,
  onPressBack,
  backIconColor,
}) => {
  return (
    <View
      style={[
        {
          // flex: 1,
          paddingTop: height(5),
          paddingBottom: width(2),
          backgroundColor: colors.appBackgroundColor1,
        },
        containerStyle,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 0.2}}>
          {onPressBack ? (
            <Pressable onPress={onPressBack} style={{marginLeft: 20}}>
              <Icon
                name="chevron-left"
                size={totalSize(2.8)}
                color={backIconColor}
              />
              {/* <Image
                source={AppIcons.left}
                style={{width: totalSize(3), height: totalSize(3)}}
              /> */}
            </Pressable>
          ) : null}
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Texts font1Bold isLarge style={titleStyle}>
            {title}
          </Texts>
        </View>
        <View style={{flex: 0.2}}></View>
      </View>
    </View>
  );
};

export const Secondary = ({title}) => {
  return (
    <Wrapper style={{height: height(20)}}>
      <Wrapper style={StyleSheet.absoluteFill}>
        <Image
          source={appImages.background_1}
          style={{
            flex: 1,
            height: null,
            width: null,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
          }}
        />
      </Wrapper>
      <Wrapper flex={1} center>
        <Texts isH5 font1Medium isWhite>
          {title}
        </Texts>
      </Wrapper>
    </Wrapper>
  );
};
