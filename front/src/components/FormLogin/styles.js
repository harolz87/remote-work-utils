import styled from 'styled-components';
import { Form as FormBst } from 'react-bootstrap';

export const Wrapper = styled.div`
  margin: auto;
  width: 751px;
  height: 542px;
  box-shadow: 0px 3px 12px #00000029;
  border-radius: 8px;
  background-image: url('src/assets/images/${(props) => (props.isRegisterForm ? 'register' : 'login')}-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Form = styled(FormBst)`
  padding: 20px 7rem;
  height: ${(props) => (props.isRegisterForm ? '100%' : '50%')};
`;
