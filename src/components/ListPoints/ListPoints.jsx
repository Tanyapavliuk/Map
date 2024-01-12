import { useContext } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { ActivePointContext, VisibleDataContext } from 'Providers';
import { PointItem } from 'components/PointItem';
import { Text, Wrapper } from './ListPoints.styled';

export const ListPoints = () => {
  const { visibleData } = useContext(VisibleDataContext);
  const { activePoint } = useContext(ActivePointContext);

  return (
    <Wrapper>
      <Text>Знайдені оголошення на видимій території</Text>
      <SimpleGrid
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
        style={{ height: 500, overflow: 'auto', width: '100%' }}
        className="scroll"
      >
        {!activePoint
          ? visibleData.map(({ properties }) => (
              <PointItem data={properties} key={properties.id} />
            ))
          : visibleData.map(
              el =>
                el.properties.id === activePoint && (
                  <PointItem data={el.properties} key={el.properties.id} />
                )
            )}
      </SimpleGrid>
    </Wrapper>
  );
};
