import { useContext } from 'react';
import { Box, Flex, Spacer, Heading, Container, Tag } from '@chakra-ui/react';
import { ClickPoint } from 'Providers';
import { AddPoint } from 'components/AddPoint';

export const Header = () => {
  const { clickPoint } = useContext(ClickPoint);
  return (
    <Container maxW="container.xl">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Затишний будинок</Heading>
        </Box>
        <Spacer />
        {clickPoint.lat ? (
          <AddPoint />
        ) : (
          <Tag variant="solid" colorScheme="green">
            Обери точку на карті та створи мітку
          </Tag>
        )}
      </Flex>
    </Container>
  );
};
