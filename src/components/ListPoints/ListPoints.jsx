import { useContext, useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { ActivePointContext, DataContext, VisibleDataContext } from 'Providers';
import { PointItem } from 'components/PointItem';

export const ListPoints = () => {
  const { visibleData } = useContext(VisibleDataContext);
  const { activePoint } = useContext(ActivePointContext);

  return (
    <div>
      <SimpleGrid
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
        style={{ height: 500, overflow: 'auto' }}
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
    </div>
  );
};
