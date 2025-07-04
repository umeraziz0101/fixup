import {createRef} from 'react';

export const navigationRef = createRef();

export const navigate = (route, params) => {
  navigationRef?.current?.navigate(route, params);
};

export const goBack = () => {
  navigationRef?.current?.goBack();
};
