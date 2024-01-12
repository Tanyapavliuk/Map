import { useContext } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ClickPoint, DataContext } from 'Providers';
import { fillingForm } from 'helpers/fillingForm';

export const AddPoint = () => {
  const { data, setDataValue } = useContext(DataContext);
  const { clickPoint, setClickPointValue } = useContext(ClickPoint);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      image: '',
    },
    onSubmit: ({ name, description, image }) => {
      const newPoint = fillingForm(
        data,
        name,
        description,
        image,
        clickPoint.lat,
        clickPoint.lng
      );
      setDataValue([newPoint, ...data]);
      setClickPointValue(null, null);
      formik.resetForm();
    },
  });
  return (
    <>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          onClick={() => setClickPointValue(null, null)}
          colorScheme="green"
          variant="outline"
        >
          Відмінити дію
        </Button>
        <Button onClick={onOpen} colorScheme="green">
          + Додати оголошення
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Box bg="white" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="password">Заголовок оголошення</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">
                    Опис будівлі, квартири або приміщення
                  </FormLabel>
                  <Input
                    id="description"
                    name="description"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">
                    Посилання на зображеня
                  </FormLabel>
                  <Input
                    id="image"
                    name="image"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                  />
                </FormControl>
                <Button type="submit" colorScheme="green" width="full">
                  Додати
                </Button>
              </VStack>
            </form>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
