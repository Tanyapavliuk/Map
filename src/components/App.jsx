import { Header } from './Header';
import { ListPoints } from './ListPoints';
import { MapComponent } from './MapComponent';

import { BodyWrap, Main, Wrapper } from './App.styled';
import { Footer } from './Footer';
export const App = () => {
  return (
    <BodyWrap>
      <Header />
      <Wrapper>
        <Main>
          <MapComponent />
          <ListPoints />
        </Main>
      </Wrapper>
      <Footer />
    </BodyWrap>
  );
};
