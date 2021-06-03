import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 15px;
`;

export const MenuBar = styled.div `
      flex: 1;   
      color: #bfbfbf;
      font-size: 20px;
      @media (max-width: 375px) {
        display: none;
      }
`;

export const LoginBar = styled.div`
   flex: 0 auto;
   width: 200px;
   @media (max-width: 375px) {
    display: none;
    
  }
`;

export const Button = styled.button `
  padding: 8px 20px;
  background-color: ${props => props.normal? 'white' : '#2acfcf'};
  color: ${props => props.normal? '#bfbfbf' : 'white'};
  border: 0px solid;
  border-radius: 25px;
  font-weight: bold;
  &:hover {cursor: pointer;};
`;

