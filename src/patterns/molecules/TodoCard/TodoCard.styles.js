import { StyleSheet } from 'react-native';
export default colors =>
  StyleSheet.create({
    container: {
      margin: 5,
      padding: 7,
      height: 100,
      overflow: 'hidden',
      width: '50%',
      backgroundColor: 'white',
    },
    title: {
      fontSize: 16,
      lineHeight: 20,
    },
    pressable: {
      flex: 1,
    },
    labelBar: color => ({
      height: 10,
      backgroundColor: color,
      width: '100%',
    }),
  });

// export const typeColors = [
//   '#1665D8',
//   '#172B4D',
//   '#F5C057',
//   '#F85251',
//   '#6F48E2',
//   '#60C255',
//   '#AA44F6',
//   '#ED5AC3',
//   '#E13921',
//   '#01B994',
// ];
