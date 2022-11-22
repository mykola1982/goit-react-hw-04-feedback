import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const ButtonItem = styled.li``;

export const ButtonOption = styled.button`
  height: 40px;
  width: 150px;
  padding: 8px;
  background-color: orange;
  border-radius: 4px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  transition: background-color 300ms linear, color 300ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    color: orange;
  }
`;
