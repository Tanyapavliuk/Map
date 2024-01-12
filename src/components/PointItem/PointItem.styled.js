import styled from '@emotion/styled';

export const Card = styled.div`
  width: 190px;
  height: 300px;
  background-image: linear-gradient(163deg, #3db072 0%, #8cd7ae 100%);
  border-radius: 20px;
  border: 1px solid #3db072;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;
export const CardWrap = styled.div`
  padding: 10px 10px;
  width: 190px;
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;

  align-items: center;
  transition: all 0.2s;
  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export const Description = styled.p`
  height: 80px;
  overflow-y: auto;

  font-size: 10px;
  &::-webkit-scrollbar {
    width: 5px;
    padding: 20px 0;
  }
`;
