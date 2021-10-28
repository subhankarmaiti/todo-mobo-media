import { StyleSheet } from 'react-native';
export default colors =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFill,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.7,
      backgroundColor: colors.indigo['300'],
    },
  });
