import { Pressable, Text } from 'react-native';

import { Box } from 'native-base';
import React from 'react';
import Styles from './TodoCard.styles';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'native-base';

const TodoCard = ({ item }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = Styles(colors);
  return (
    <Box
      key={item.id}
      style={styles.container}
      rounded="lg"
      overflow="hidden"
      shadow={1}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Details', { item })}>
        <Text numberOfLines={4} style={styles.title}>
          {item.title}
        </Text>
      </Pressable>
    </Box>
  );
};
export default TodoCard;
