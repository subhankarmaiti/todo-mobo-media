import { Button, FormControl, Input, Modal } from 'native-base';
import React, { useEffect, useState } from 'react';

import { createTodo } from 'store/actions/TodoAction';
import { func } from 'prop-types';
import { useDispatch } from 'react-redux';

const NoteModal = ({ onDismiss, todo }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (todo?.title) {
      setTitle(todo.title);
    }
  }, [todo]);

  const onSave = () => {
    const todo = {
      userId: Math.floor(Math.random() * 10) + 1, // generate number from 1 to 10
      completed: false,
      title,
    };
    dispatch(createTodo(todo, onDismiss));
  };

  return (
    <Modal isOpen={true} onClose={onDismiss}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>{todo?.id ? 'Edit Todo' : 'Add Todo'}</Modal.Header>
        <Modal.Body>
          <FormControl.Label>Todo</FormControl.Label>
          <Input isFullWidth size="xl" value={title} onChangeText={setTitle} />
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

NoteModal.propTypes = {
  onDismiss: func,
};

export default NoteModal;
