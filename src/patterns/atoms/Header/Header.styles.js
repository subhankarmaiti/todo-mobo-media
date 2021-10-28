import { StyleSheet } from 'react-native';
export default colors =>
  StyleSheet.create({
    container: {
      height: 50,
      paddingHorizontal: 10,
      backgroundColor: colors.indigo['800'],
      alignItems: 'center',
      elevation: 2,
    },
    headingText: {
      flex: 1,
      color: colors.blue['50'],
      fontSize: 20,
      lineHeight: 24,
      fontWeight: 'bold',
    },
    backIcon: {
      marginRight: 20,
    },
    nextText: {
      color: colors.blue['50'],
      fontSize: 16,
      lineHeight: 18,
    },
  });
