import { HStack, Text, useTheme } from 'native-base';
import { bool, func, string } from 'prop-types';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import React from 'react';
import Styles from './Header.styles';

const Header = ({
  title,
  enableBack,
  onPressBack = () => null,
  enableNext,
  onPressNext = () => null,
}) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <HStack style={styles.container}>
      {enableBack && (
        <Ionicons
          name="arrow-back"
          size={30}
          style={styles.backIcon}
          color={colors.blue['50']}
          onPress={onPressBack}
        />
      )}
      <Text style={styles.headingText}>{title}</Text>
      {enableNext && (
        <Pressable onPress={onPressNext}>
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      )}
    </HStack>
  );
};

Header.protoTypes = {
  title: string,
  enableBack: bool,
  onPressBack: func,
  enableNext: bool,
  onPressNext: func,
};

export default Header;
