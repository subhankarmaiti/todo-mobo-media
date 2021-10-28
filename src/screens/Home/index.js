import { FlatList, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'patterns/atoms/Loader';
import Styles from './Home.styles';
import TodoCard from 'patterns/molecules/TodoCard';
import { getTodos } from 'store/actions/TodoAction';
import { useTheme } from 'native-base';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, list } = useSelector(state => state.todo);
  console.log(list, 'loading');
  const { colors } = useTheme();
  const styles = Styles(colors);
  console.log(colors);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.values(list)}
        keyExtractor={item => item.id}
        renderItem={props => <TodoCard {...props} />}
        numColumns={2}
      />
      {loading && <Loader />}
    </SafeAreaView>
  );
};
export default Home;
