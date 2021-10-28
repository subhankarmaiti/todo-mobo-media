import { BackHandler, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getTodoBasedOnPage, isMoreDataPresent } from 'utils/todoHelper';
import { getTodos, nextPage, previousPage } from 'store/actions/TodoAction';
import { useDispatch, useSelector } from 'react-redux';

import AddIcon from 'patterns/atoms/AddIcon';
import Header from 'patterns/atoms/Header';
import Loader from 'patterns/atoms/Loader';
import Styles from './Home.styles';
import TodoCard from 'patterns/molecules/TodoCard';
import TodoModal from 'patterns/organisms/TodoModal';
import { useTheme } from 'native-base';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, list, page, updating } = useSelector(state => state.todo);
  const todos = Object.values(list);
  const [displayAddModal, setDisplayAddModal] = useState(false);
  const { colors } = useTheme();
  const styles = Styles(colors);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    const backAction = () => {
      if (page > 1) {
        onBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [page]);

  const dismissAddModal = () => setDisplayAddModal(false);
  const openAddModal = () => setDisplayAddModal(true);

  const loadTodos = () => dispatch(getTodos());
  const onNext = () => dispatch(nextPage());
  const onBack = () => dispatch(previousPage());
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={page > 1 ? `Todo List ${page}` : 'Todo'}
        enableNext={isMoreDataPresent(todos, page)}
        onPressNext={onNext}
        enableBack={page > 1}
        onPressBack={onBack}
      />
      <FlatList
        data={getTodoBasedOnPage(todos, page)}
        keyExtractor={item => item.id}
        renderItem={props => <TodoCard {...props} />}
        onRefresh={page === 1 ? loadTodos : null}
        refreshing={loading}
        numColumns={2}
      />
      {(loading || updating) && <Loader />}
      <AddIcon onPress={openAddModal} />
      {displayAddModal && <TodoModal onDismiss={dismissAddModal} />}
    </SafeAreaView>
  );
};
export default Home;
