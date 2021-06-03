import styled from 'styled-components'

export const MainDiv = styled.div `
  display: flex;
  flex-flow: row nowrap;
  margin-right: 50px;
  margin-left: 50px;
  background-color: #35323e;
  height: 200px;
  @media (max-width: 375px) {
    flex-direction: column;
    height: 750px;
}
`;

export const ShortlyDiv = styled.div `
margin-right: 80px;
`;

export const ShortlyText = styled.h2 `
  margin: 30px;
  color: white;
  padding: 20px;
`;

export const FooterDiv = styled.div `
 
 margin: 15px;
 padding: 5px;
 height: 140px;
 width: ${props => props.socialmedia ? "180px" : "120px"};
`;

export const FooterText = styled.p `
color: white;
font-size: ${props => props.title ? "15px" : "11px"};
font-weight: ${props => props.title ? "bold" : "normal"};
&:hover{${props=>props.title ? "cursor:normal" : "cursor:pointer"}};
`;



export const SocialMediaIcon = styled.img `
 max-height: 50px;
 max-width: 50px;
 alt="SM";
 margin:5px;
 &:hover {cursor: pointer;};
`;

