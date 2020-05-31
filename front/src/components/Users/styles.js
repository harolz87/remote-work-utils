import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 300px;
  width: 340px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0px 3px 9px #2B75B56E;
  margin-top: 50px;
  ${(props) => (props.clickable ? 'cursor: pointer;' : '')}
`;

export const CardFooter = styled.div`
  height: 25%;
  background: ${(props) => (props.disabled ? '#969696' : '#1C7CD5')} 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 10px 10px;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: 0px 3px 16px #0069C338;
  border-radius: 100%;
  ${(props) => (props.disabled ? `
    filter: grayscale(100%);
    opacity: 0.7;
  ` : '')}
`;
