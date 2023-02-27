import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';

function ModalWindow({ isOpen, onClose, note, func }) {
  const [isEmpty, setIsEmpty] = useState({
    body: false,
    importance: false,
  });
  const [data, setData] = useState({
    body: note.body,
    importance: note.importance,
  });

  React.useEffect(() => {
    setData({ body: note.body, importance: note.importance });
  }, [note]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Note name</FormLabel>
            <Input
              placeholder="Note name"
              value={data.body}
              onChange={e => setData({ ...data, body: e.target.value })}
            />
            {!!isEmpty.body && <Text color="red">Name is empty!</Text>}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Note importance</FormLabel>
            <Select
              defaultValue="importance"
              onChange={e => setData({ ...data, importance: e.target.value })}
            >
              <option disabled value="importance">
                Importance...
              </option>
              <option value="minor">Minor</option>
              <option value="normal">Normal</option>
              <option value="critical">Critical</option>
            </Select>
            {!!isEmpty.importance && (
              <Text color="red">Choose Importance!</Text>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="pink"
            mr={3}
            onClick={() => {
              if (data.body === '' || data.importance === '') {
                setIsEmpty({
                  body: !data.body,
                  importance: !data.importance,
                });
              } else {
                func(data);
                setIsEmpty({ body: false, importance: false });
              }
            }}
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalWindow;
