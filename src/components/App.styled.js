import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 14400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;
