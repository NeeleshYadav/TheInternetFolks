import styled from 'styled-components';

export const MainDiv = styled.div `
display: flex;
flex-flow: row nowrap;
padding: 15px;
@media (max-width: 375px) {
    flex-direction: column;
}
`;


export const TextArea = styled.div `
flex: 1;      
color: #bfbfbf;
font-size: 20px;
max-width: 550px;
`;

export const ImageArea = styled.div`
   flex: 0 auto;
   width: 200px;
`;

export const Heading = styled.h1 `
 color: black;
 font-size: 45px;
`;
