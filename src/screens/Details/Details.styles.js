import { StyleSheet } from 'react-native';
export default colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light['50'],
    },
    scrollView: {
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    todoContainer: {
      borderColor: colors.indigo['800'],
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
    },
    buttonContainer: {
      marginVertical: 10,
    },
    deleteButton: {
      backgroundColor: colors.danger['600'],
    },
    title: {
      fontSize: 17,
      lineHeight: 22,
    },
  });
