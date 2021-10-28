import { StyleSheet } from 'react-native';
export default colors =>
  StyleSheet.create({
    AddIcon: {
      position: 'absolute',
      right: 20,
      bottom: 30,
      backgroundColor: colors.indigo['800'],
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      elevation: 3,
    },
  });
