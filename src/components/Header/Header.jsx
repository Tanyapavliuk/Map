import { useContext } from 'react';
import { ClickPoint } from 'Providers';
import { AddPoint } from 'components/AddPoint';
import { HeaderWrapper, Title, Button } from './Header.styled';
import { Wrapper } from 'components/App.styled';

export const Header = () => {
  const { clickPoint } = useContext(ClickPoint);
  return (
    <HeaderWrapper>
      <Wrapper style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title>Обери свій затишний будинок</Title>
        <div>
          {clickPoint.lat ? (
            <AddPoint />
          ) : (
            <Button variant="solid" colorScheme="green">
              + Обери точку на карті та створи оголошення
            </Button>
          )}
        </div>
      </Wrapper>
    </HeaderWrapper>
  );
};
