import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import Styles from './AddIcon.styles';
import { View } from 'react-native';
import { func } from 'prop-types';
import { useTheme } from 'native-base';

const AddIcon = ({ onPress = () => null }) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <View style={styles.AddIcon}>
      <AntDesign
        name="plus"
        color={colors.blue['50']}
        size={30}
        onPress={onPress}
      />
    </View>
  );
};

AddIcon.propTypes = {
  onPress: func,
};

export default AddIcon;
