import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  margin: 0 auto;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 2px solid orange;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.33;
`;
