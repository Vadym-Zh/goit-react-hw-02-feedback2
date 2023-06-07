import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  padding-bottom: 30px;
`;

export const StatisticsItem = styled.li`
  padding: 15px 20px;
  color: white;
  background-color: ${({ review }) => {
    switch (review) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'blue';
      case 'bad':
        return 'orangered';
      default:
        return 'red';
    }
  }};
  border-radius: 5px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StatisticsSum = styled.p`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: lightgrey;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
  }

  cursor: pointer;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;
