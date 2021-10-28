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
