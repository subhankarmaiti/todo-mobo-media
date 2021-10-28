import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Modal,
  useTheme,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { createTodo, updateTodo } from 'store/actions/TodoAction';

import Styles from './TodoModal.styles';
import { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const TodoModal = ({ onDismiss, todo }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = Styles(colors);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todo?.title) {
      setTitle(todo.title);
    }
    if (todo?.completed) {
      setCompleted(todo.completed);
    }
  }, [todo]);

  const onSave = () => {
    const todoObj = {
      userId: Math.floor(Math.random() * 10) + 1, // generate number from 1 to 10
      completed: false,
      title,
    };

    if (todo?.id) {
      todoObj.id = todo.id;
      todoObj.userId = todo.userId;
      todoObj.completed = completed;
      console.log(todoObj);
      dispatch(
        updateTodo(todoObj, () => {
          onDismiss();
          navigation.goBack();
        }),
      );
      return;
    }

    dispatch(createTodo(todoObj, onDismiss));
  };

  return (
    <Modal isOpen={true} onClose={onDismiss}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>{todo?.id ? 'Edit Todo' : 'Add Todo'}</Modal.Header>
        <Modal.Body>
          <FormControl.Label>Todo</FormControl.Label>
          <Input isFullWidth size="xl" value={title} onChangeText={setTitle} />
          {todo?.id && (
            <Box marginTop="5">
              <Checkbox
                style={styles.checkbox}
                isChecked={completed}
                onChange={() => setCompleted(val => !val)}>
                Completed
              </Checkbox>
            </Box>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onDismiss}>
              Cancel
            </Button>
            <Button onPress={onSave}>{todo?.id ? 'Update' : 'Save'}</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

TodoModal.propTypes = {
  onDismiss: func,
};

export default TodoModal;
