import styled from 'styled-components';
import { Form as FormBst } from 'react-bootstrap';
import { BORDER_COLOR, SECUNDARY_COLOR } from '../../config/colors';

export const Wrapper = styled.div`
  margin: auto;
  width: 320px;
  height: 320px;
  border: 1px solid ${BORDER_COLOR};
  background-color: ${SECUNDARY_COLOR};
`;

export const Form = styled(FormBst)`
    padding: 20px;
`;
