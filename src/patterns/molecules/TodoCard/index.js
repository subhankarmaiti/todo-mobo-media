import { Box } from 'native-base';
import React from 'react';
import Styles from './TodoCard.styles';
import { Text } from 'react-native';
import { useTheme } from 'native-base';

const TodoCard = ({ item, index }) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <Box
      key={item.id}
      style={styles.container}
      rounded="lg"
      overflow="hidden"
      shadow={1}>
      <Text>{item.title}</Text>
    </Box>
  );
};
export default TodoCard;
