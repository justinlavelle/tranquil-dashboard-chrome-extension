import styled from 'styled-components';

import { fadeIn } from '../../utils/animations';

export const Wrapper = styled.div`
  min-width: 15%;
`;

export const Text = styled.div`
  text-align: right;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const PaneWrapper = styled.div`
  min-height: 120px;
  width: 18%;
  position: absolute;
  right: 3px;
  bottom: 8%;
  width: 290px;
  z-index: 10;
  background: rgba(15, 15, 15, 0.925);
  text-align: left;
  text-shadow: none;
  border-radius: 3px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: 90ms ${fadeIn} ease-in forwards;
`;

export const Heading = styled.div`
  color: #fff;
  font-size: 18px;
`;

export const Body = styled.div`
  text-align: center;
  font-size: 15px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const TodoList = styled.div`
  margin-top: 2px;
  margin-bottom: 18px;
`;

export const TodoListItem = styled.div`
  margin: 3px 0;
`;

export const TodoText = styled.span`
  font-size: 15px;
  margin-left: 5px;
  color: #fff;
`;