import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 235px;
  width: 257px;
  background: #FFFFFF ;
  border-radius: 6px;
  box-shadow: 0px 3px 9px #2B75B56E;
  margin-top: 50px;
  margin-right:5px;
  ${(props) => (props.clickable ? 'cursor: pointer;' : '')}
`;

export const CardFooter = styled.div`
  height: 59px;
  background-color: ${(props) => (props.disabled ? '#969696' : '#007bff')};
  border-radius: 0px 0px 6px 6px;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 92px;
  height: 92px;
  box-shadow: 0px 3px 16px #0069C338;
  border-radius: 100%;
  ${(props) => (props.disabled ? `
    filter: grayscale(100%);
    opacity: 0.7;
  ` : '')}
`;

export const Paragraph = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ParagraphTitle = styled(Paragraph)`
  margin-top: 15px
`;

export const AppsCircles = styled.div`
  border-radius:50px;
  background-color: ${(props) => (props.disabled ? '#c4c4c4' : '#0163cc')};
  height:22px;
  width:22px;
  margin-right:5px;
`;
