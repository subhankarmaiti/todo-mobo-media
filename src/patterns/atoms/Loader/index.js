import { Modal, View } from 'react-native';

import React from 'react';
import Spinner from 'react-native-spinkit';
import Styles from './Loader.styles';
import { useTheme } from 'native-base';

const Loader = () => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <Modal transparent>
      <View style={styles.container}>
        <Spinner color={colors.indigo['900']} size={70} type="ThreeBounce" />
      </View>
    </Modal>
  );
};

export default Loader;
