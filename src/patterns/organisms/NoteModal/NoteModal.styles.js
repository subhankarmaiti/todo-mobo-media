import { StyleSheet } from 'react-native';
export default colors =>
  StyleSheet.create({
    container: {
      margin: 5,
      padding: 7,
      height: 100,
      overflow: 'hidden',
      flex: 1,
      backgroundColor: 'white',
    },
    labelBar: color => ({
      height: 10,
      backgroundColor: color,
      width: '100%',
    }),
  });