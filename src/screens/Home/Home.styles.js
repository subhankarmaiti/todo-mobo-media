import { StyleSheet } from 'react-native';
export default colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light['50'],
    },
  });
