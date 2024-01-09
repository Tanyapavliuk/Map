import { Container, Flex } from '@chakra-ui/react';
import { Header } from './Header';
import { ListPoints } from './ListPoints';
import { MapComponent } from './MapComponent';
export const App = () => {
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container maxW="container.xl" style={{ paddingTop: 20 }}>
        <Flex gap={12}>
          <MapComponent />
          <ListPoints />
        </Flex>
      </Container>
    </div>
  );
};
