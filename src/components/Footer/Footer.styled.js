import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
  min-height: 80px;
  background-color: #c6ebd7;
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.p`
  max-width: 700px;
  padding: 10px 0;
  font-size: 10px;

  @media screen and (min-width: 1400px) {
    font-size: 16px;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
