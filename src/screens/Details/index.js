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
import { deleteTodo } from 'store/actions/TodoAction';

const Details = ({ navigation, route }) => {
  const { item } = route.params || {};
  const dispatch = useDispatch();
  const { updating } = useSelector(state => state.todo);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const { colors } = useTheme();
  const styles = Styles(colors);

  const onBack = navigation.goBack;
  const openDeleteModal = () => setDisplayDeleteModal(true);
  const closeDeleteModal = () => setDisplayDeleteModal(false);
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
          <Text style={styles.title}>{item.title}</Text>
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
            leftIcon={<FontAwesome name="edit" size={20} color="white" />}>
            Edit
          </Button>
        </HStack>
      </ScrollView>
      {displayDeleteModal && (
        <AlertDialog onClose={closeDeleteModal} onSelect={onDelete} />
      )}
      {updating && <Loader />}
    </SafeAreaView>
  );
};

export default Details;
