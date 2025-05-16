import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EditProfile,
  Home,
  Menu,
  PrivacyPolicy,
  SelectPriceAndPaymentMethod,
  ShareFeedback,
  TermsOfService,
  VehicleInfo,
} from '../../screens/app';
import {routes} from '../../services';
import {AppIcons, appStyles, colors} from '../../services/utilities';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Octicons';
import {totalSize} from 'react-native-dimension';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={routes.home} component={Home} />
      <HomeStack.Screen name={routes.vehicleInfo} component={VehicleInfo} />
      <HomeStack.Screen
        name={routes.selectPriceAndPaymentMethod}
        component={SelectPriceAndPaymentMethod}
      />
    </HomeStack.Navigator>
  );
};

const MyTabs = () => {
  const [tab, setTab] = useState(routes.home);
  useEffect(() => {
    const unsubscribe = navigationRef?.current?.addListener('state', () => {
      const currentRoute = navigationRef?.current?.getCurrentRoute();
      if (currentRoute) {
        console.log('currentRoute : ', currentRoute);
        setTab(currentRoute?.name);
      }
    });
    return unsubscribe;
  }, []);
  const isEditProfileTab = tab === routes.editProfile;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.appBackgroundColor1,
          borderTopWidth: 0,
          ...appStyles.shadowDark,
        },
        tabBarLabelStyle: [appStyles.textSmall],
      })}>
      <Tab.Screen
        name={routes.home}
        component={HomeNavigation}
        // component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return <Icon name="home" size={totalSize(2.5)} />;
            // <Image source={AppIcons.user} />;
          },
        }}
      />
      <Tab.Screen
        name={routes.editProfile}
        component={EditProfile}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => {
            return (
              <Image
                source={AppIcons.user}
                style={{height: totalSize(2.5), width: totalSize(2.5)}}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={routes.bottomTab} component={MyTabs} />
      {/* <AppStack.Screen name={routes.vehicleInfo} component={VehicleInfo} /> */}
      <AppStack.Screen
        name={routes.menu}
        component={Menu}
        options={{presentation: 'transparentModal'}}
      />
      <AppStack.Screen name={routes.shareFeedback} component={ShareFeedback} />
      <AppStack.Screen
        name={routes.termsOfService}
        component={TermsOfService}
      />
      <AppStack.Screen name={routes.privacyPolicy} component={PrivacyPolicy} />
    </AppStack.Navigator>
  );
};
export default AppNavigation;
