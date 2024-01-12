import { Header } from './Header';
import { ListPoints } from './ListPoints';
import { MapComponent } from './MapComponent';

import { Main, Wrapper } from './App.styled';
export const App = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Main>
          <MapComponent />
          <ListPoints />
        </Main>
      </Wrapper>
    </div>
  );
};
