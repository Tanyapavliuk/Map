import styled from '@emotion/styled';

export const Card = styled.div`
  width: 190px;
  height: 254px;
  background-image: linear-gradient(163deg, #3db072 0%, #8cd7ae 100%);
  border-radius: 20px;
  border: 1px solid #3db072;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;
export const CardWrap = styled.div`
  width: 190px;
  height: 254px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;
