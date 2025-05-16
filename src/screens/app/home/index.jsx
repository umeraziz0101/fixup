import {
  View,
  Text,
  StatusBar,
  FlatList,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  Buttons,
  Headers,
  Icons,
  ScrollViews,
  Spacer,
  Texts,
  Wrapper,
} from '../../../components';
import {
  AppIcons,
  appStyles,
  colors,
  fontSizes,
} from '../../../services/utilities';
import {height, width, totalSize} from 'react-native-dimension';
import AddLocation from './addLocation';
import OilType from './oilType';
import {routes} from '../../../services';
const index = ({navigation}) => {
  const days = [
    {
      label: 'Today',
      day: '11',
      month: 'April',
    },
    {
      label: 'Tomorrow',
      day: '12',
      month: 'April',
    },
    {
      label: 'Wed',
      day: '13',
      month: 'April',
    },
    {
      label: 'Thur',
      day: '14',
      month: 'April',
    },
  ];
  const {navigate, goBack} = navigation;
  const [selectedDayIndex, setDayIndex] = useState(0);
  const [hour, setHour] = useState('05');
  const [minute, setMinute] = useState('00');
  const [am, setAm] = useState('am');
  const [isAddLocationPopupVisible, setAddLocationPopupVisibility] =
    useState(false);
  const toggleAddLocationPopup = () =>
    setAddLocationPopupVisibility(prev => !prev);
  const [isOilTypePopupVisible, setOilTypePopupVisibility] = useState(false);
  const toggleOilTypePopup = () => setOilTypePopupVisibility(prev => !prev);
  return (
    <Wrapper isMain>
      <StatusBar barStyle={'light-content'} />
      <Headers.Secondary title={'Schedule Time'} />
      <ScrollViews.KeyboardAvoiding>
        <Spacer isBasic />
        <Spacer isSmall />
        <Texts isH6 alignCenter>
          Please Enter Details
        </Texts>
        <Spacer isBasic />
        <Spacer isSmall />
        {/* Days */}
        <Days
          data={days}
          onPressItem={(item, index) => {
            setDayIndex(index);
          }}
          selectedIndex={selectedDayIndex}
        />
        <Spacer isTiny />
        <Spacer isSmall />
        <Wrapper marginHorizontalBase>
          <Texts font1Bold isSmall textColor2>
            Enter Time
          </Texts>
        </Wrapper>
        <Spacer isBasic />
        {/* Time */}
        <Time
          hour={hour}
          onChangeHour={h => setHour(h)}
          minute={minute}
          onChangeMinute={m => setMinute(m)}
          am={am}
          onPressAm={v => setAm(v)}
        />
        <Spacer isBasic />
        <Pressable onPress={toggleAddLocationPopup}>
          <Wrapper
            isColored
            style={[
              {
                paddingHorizontal: width(4),
                paddingVertical: height(1.5),
              },
              appStyles.shadow,
            ]}>
            <Wrapper flexDirectionRow alignItemsCenter>
              <Wrapper flex={1}>
                <Texts isSmall font1Bold textColor2>
                  Enter Location
                </Texts>
                <Spacer isSmall />
                <Texts isSmall font1Bold style={{color: colors.appTextColor3}}>
                  Please enter your address
                </Texts>
              </Wrapper>
              <Icons.Custom source={AppIcons.location} size={totalSize(3)} />
            </Wrapper>
          </Wrapper>
        </Pressable>
        <Spacer isBasic />
        <Pressable onPress={toggleOilTypePopup}>
          <Wrapper
            isColored
            style={[
              {
                paddingHorizontal: width(4),
                paddingVertical: height(1),
              },
              appStyles.shadow,
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
        </Pressable>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <Buttons.ColoredGradient
            notGradient
            containerStyle={[appStyles.shadow]}
            title={'Lock it in!'}
            onPress={() => navigate(routes.vehicleInfo)}
          />
        </Wrapper>
        <Spacer isBasic />
      </ScrollViews.KeyboardAvoiding>
      <AddLocation
        isVisible={isAddLocationPopupVisible}
        toggle={toggleAddLocationPopup}
      />
      <OilType isVisible={isOilTypePopupVisible} toggle={toggleOilTypePopup} />
    </Wrapper>
  );
};

export default index;

const Days = ({data, onPressItem, selectedIndex}) => {
  return (
    <Wrapper>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <Spacer width={width(5)} />}
        ListFooterComponent={() => <Spacer width={width(5)} />}
        ItemSeparatorComponent={() => <Spacer width={width(4)} />}
        renderItem={({item, index}) => {
          const {label, day, month} = item;
          const itemSize = width(24);
          const isSelected = selectedIndex === index;
          return (
            <Pressable
              key={index}
              onPress={() => onPressItem(item, index)}
              style={[
                {
                  height: itemSize,
                  width: itemSize,
                  backgroundColor: colors.appBackgroundColor1,
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginVertical: height(1),
                  ...appStyles.shadow,
                },
                isSelected && {backgroundColor: colors.appColor2},
              ]}>
              <Wrapper alignItemsCenter>
                <Texts isSmall font1Bold textColor2>
                  {label}
                </Texts>
                <Spacer isSmall />
                <Texts isSmall font1Bold textColor2>
                  {day}
                </Texts>
                <Spacer isTiny />
                <Texts isSmall font1Bold textColor2>
                  {month}
                </Texts>
              </Wrapper>
            </Pressable>
          );
        }}
      />
    </Wrapper>
  );
};

const Time = ({hour, onChangeHour, minute, onChangeMinute, am, onPressAm}) => {
  const isAm = am === 'am';
  const isPm = am === 'pm';
  const InputBox = ({containerStyle, ...props}) => {
    return (
      <Wrapper
        center
        style={[
          {
            height: itemSize,
            width: itemSize,
            backgroundColor: colors.appBackgroundColor1,
            borderRadius: 10,
            ...appStyles.shadow,
          },
          containerStyle,
        ]}>
        <TextInput
          // value={hour}
          // onChangeText={onChangeHour}
          style={{
            textAlign: 'center',
            fontSize: fontSizes.h1,
            color: colors.appTextColor2,
          }}
          {...props}
        />
      </Wrapper>
    );
  };
  const itemSize = height(12.5);
  const OptionButton = ({onPress, label, isActive, containerStyle}) => {
    return (
      <Pressable
        onPress={onPress}
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: !isActive
              ? colors.appBackgroundColor1
              : colors.appColor2,
            paddingHorizontal: width(2.5),
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          containerStyle,
        ]}>
        <Texts isH6 font1Regular>
          {label}
        </Texts>
      </Pressable>
    );
  };
  return (
    <Wrapper marginHorizontalBase>
      <Wrapper flexDirectionRow>
        <Wrapper flex={1} flexDirectionRow justifyContentSpacebetween>
          <InputBox value={hour} onChangeText={onChangeHour} />
          <Wrapper justifyContentCenter>
            <Texts
              font1Bold
              style={{fontSize: totalSize(5), color: colors.appTextColor4}}>
              :
            </Texts>
          </Wrapper>
          <InputBox
            value={minute}
            onChangeText={onChangeMinute}
            containerStyle={{backgroundColor: colors.appColor2}}
          />
        </Wrapper>
        <Spacer width={width(5)} />
        <Wrapper
          marginHorizontalSmall
          style={{
            borderColor: colors.appTextColor1,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <OptionButton
            label="AM"
            isActive={isAm}
            onPress={() => onPressAm('am')}
          />
          <Wrapper
            style={{borderColor: colors.appTextColor1, borderWidth: 0.5}}
          />
          <OptionButton
            label="PM"
            isActive={isPm}
            containerStyle={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            onPress={() => onPressAm('pm')}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
