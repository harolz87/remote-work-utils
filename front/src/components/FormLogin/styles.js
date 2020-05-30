import styled from 'styled-components';
import { Form as FormBst } from 'react-bootstrap';
import { BORDER_COLOR } from '../../config/colors';

export const Wrapper = styled.div`
  margin: auto;
  width: 920px;
  height: 665px;
  border: 1px solid ${BORDER_COLOR};
  box-shadow: 0px 3px 12px #00000029;
  border-radius: 15px;
  background-image: url('src/assets/images/login-background.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Form = styled(FormBst)`
  padding: 20px 7rem;
  height: 50%;
`;
