import {View, Text} from 'react-native';
import React from 'react';
import {
  Common,
  Headers,
  ScrollViews,
  Spacer,
  Texts,
  Wrapper,
} from '../../../components';
import {goBack} from '../../../navigation/rootNavigation';

export default function Index() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum orci sed erat feugiat, et consequat justo ullamcorper. Vivamus interdum, ante at iaculis tempor, nunc massa imperdiet dui, non maximus lorem risus volutpat nibh. Maecenas neque dui, placerat et dictum vitae, venenatis id neque. Cras at ultricies magna, eget maximus risus. Duis sit amet mauris eu justo tincidunt euismod. Integer aliquam hendrerit quam consequat cursus. Vivamus nibh ligula, rhoncus in tristique vitae, pellentesque eu nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sit amet orci erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque tempor commodo nisl. \n Curabitur rutrum, lorem et euismod lacinia, tellus risus porttitor erat, vel ultrices turpis odio et quam. Fusce pretium ante id justo viverra pretium. Suspendisse euismod sed dolor nec cursus. Etiam lacus erat, efficitur sit amet orci ut, auctor suscipit tellus. Aliquam congue tincidunt eleifend. In hac habitasse platea dictumst. Fusce lectus nisi, sodales et nibh at, vehicula tincidunt nulla. Vivamus ultricies odio non nisl luctus maximus. Pellentesque cursus a sem sed fermentum. Donec egestas dolor ut vestibulum venenatis. Vivamus hendrerit nisi tincidunt felis maximus, non commodo lectus lacinia. In varius ligula ac tincidunt suscipit. \n Ut molestie ac odio sit amet sodales. Integer auctor justo vel lectus auctor malesuada. Nulla accumsan velit sit amet viverra convallis. Aenean lacinia commodo mi, non eleifend magna sagittis consequat. Curabitur bibendum lectus sit amet imperdiet cursus. Donec consectetur feugiat interdum. Nullam dolor magna, elementum a nisl ut, sagittis posuere libero. Donec lobortis, eros ut ultrices placerat, velit nisi imperdiet neque, et venenatis libero dolor eu sapien. Fusce euismod dictum justo, et egestas nunc laoreet sit amet. Aenean nec risus vitae libero gravida euismod sit amet ac sem. Vestibulum rutrum vestibulum ullamcorper. Aenean rutrum, lorem eu fringilla condimentum, ligula metus porttitor elit, eu pellentesque diam nibh ut turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lobortis tortor, sed mattis nibh. Fusce varius massa est, eget bibendum nulla dapibus et.\n \n Integer vitae maximus orci. Donec malesuada bibendum elit nec ullamcorper. In non libero eget nulla dignissim feugiat. Integer vel tellus scelerisque, aliquet nunc nec, malesuada erat. Duis dictum consequat leo vel auctor. Donec risus risus, auctor sed imperdiet at, commodo condimentum lorem. Cras sapien enim, egestas nec varius consequat, volutpat eu mauris. Maecenas id mollis lacus, volutpat consectetur velit. Curabitur eget porttitor leo. Nulla facilisi. Sed lacus libero, sodales commodo bibendum vel, auctor aliquam mauris. Etiam tristique augue leo, hendrerit viverra odio hendrerit sed. Aenean iaculis ex vel elit tempus blandit. Aenean hendrerit, quam at fermentum maximus, risus eros commodo ante, rhoncus volutpat arcu lacus eget augue. Aliquam arcu nulla, tristique vitae facilisis facilisis, cursus sed justo. Aenean interdum vestibulum est non gravida.\n Fusce et mi ex. Quisque facilisis tempor elit, eu ultricies nisl porta non. Pellentesque eu cursus sapien. Maecenas sagittis lobortis blandit. Cras felis justo, pharetra quis nibh vitae, aliquam sagittis velit. Vivamus vitae risus nec felis consequat dapibus eget at lacus. Donec vel viverra urna. Proin quis fermentum nisi. Fusce dapibus massa ut felis rhoncus, sit amet pulvinar est vestibulum. Quisque rutrum vestibulum eros pulvinar ultrices. Duis eu eros pharetra, varius ligula ac, auctor erat';
  return (
    <Wrapper isMain>
      <Headers.Primary onPressBack={goBack} title={'Terms of Service'} />
      <Common.BgImageWrapper>
        <ScrollViews.KeyboardAvoiding>
          <Spacer isLarge />
          <Wrapper marginHorizontalBase>
            <Texts isMedium colorPrimary>
              {text}
            </Texts>
          </Wrapper>
          <Spacer isLarge />
        </ScrollViews.KeyboardAvoiding>
      </Common.BgImageWrapper>
    </Wrapper>
  );
}
