import { Button, FormControl, Input, Modal } from 'native-base';
import React, { useEffect, useState } from 'react';

import { func } from 'prop-types';

const NoteModal = ({ onDismiss, todo }) => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (todo?.title) {
      setTitle(todo.title);
    }
  }, [todo]);
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
            <Button onPress={() => {}}>Save</Button>
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
