import { Button, HStack, Text, useTheme } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AlertDialog from 'patterns/molecules/AlertDialog';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from 'patterns/atoms/Header';
import Loader from 'patterns/atoms/Loader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Styles from './Details.styles';
import TodoModal from 'patterns/organisms/TodoModal';
import { deleteTodo } from 'store/actions/TodoAction';

const Details = ({ navigation, route }) => {
  const { item } = route.params || {};
  console.log(item);
  const dispatch = useDispatch();
  const { updating } = useSelector(state => state.todo);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const { colors } = useTheme();
  const styles = Styles(colors);

  const onBack = navigation.goBack;
  const openDeleteModal = () => setDisplayDeleteModal(true);
  const closeDeleteModal = () => setDisplayDeleteModal(false);

  const openEditModal = () => setDisplayEditModal(true);
  const closeEditModal = () => setDisplayEditModal(false);

  const onDelete = () => {
    dispatch(
      deleteTodo(item.id, () => {
        closeDeleteModal();
        navigation.goBack();
      }),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Todo Details" enableBack onPressBack={onBack} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.todoContainer}>
          <Text
            textDecorationLine={item?.completed ? 'line-through' : null}
            style={styles.title}>
            {item.title}
          </Text>
        </View>
        <HStack space={3} style={styles.buttonContainer}>
          <Button
            flexGrow={1}
            style={styles.deleteButton}
            onPress={openDeleteModal}
            rightIcon={
              <MaterialIcons name="delete-forever" size={25} color="white" />
            }>
            Delete
          </Button>
          <Button
            flexGrow={1}
            onPress={openEditModal}
            leftIcon={<FontAwesome name="edit" size={20} color="white" />}>
            Edit
          </Button>
        </HStack>
      </ScrollView>
      {displayDeleteModal && (
        <AlertDialog onClose={closeDeleteModal} onSelect={onDelete} />
      )}
      {displayEditModal && <TodoModal onDismiss={closeEditModal} todo={item} />}
      {updating && <Loader />}
    </SafeAreaView>
  );
};

export default Details;
