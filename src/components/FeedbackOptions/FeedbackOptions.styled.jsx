import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const FeedbackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FeedbackBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;

  font-weight: 600;
  padding: 10px 20px;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  :hover {
    background: #80808097;
  }
`;
