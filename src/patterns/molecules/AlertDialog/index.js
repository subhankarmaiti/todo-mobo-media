import { AlertDialog, Button, useTheme } from 'native-base';
import React, { useRef } from 'react';

import Styles from './AlertDialog.styles';

const Dialog = ({ onClose = () => null, onSelect = () => null }) => {
  const cancelRef = useRef(null);
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={true}
      onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Delete Todo</AlertDialog.Header>
        <AlertDialog.Body>
          This will remove the todo from the list. Do you want to delete it ?
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}>
              Cancel
            </Button>
            <Button style={styles.deleteButton} onPress={onSelect}>
              Delete
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default Dialog;
