import styled from 'styled-components'
import {Button} from './NavigationStyle'


export const MainDiv = styled.div `
  dispaly: flex;
  flex-flow: row nowrap;
  margin: 30px 150px;
  background-color: #3b3054;
  border-radius: 8px;
  position: relative;
`;

export const ShortenButton = styled(Button)`
  border-radius: 5px;
  padding: 11px 28px;
  position: relative;
  
`;

export const ShortenURLInput = styled.input `
   text-size: 20px;
   padding: 10px;
   margin: 30px 15px 30px 50px;
   border: none;
   border-radius: 5px;
   width: 500px;
   position: relative;
   required;
`;

export const ResultDiv = styled.div `
  padding: 12px;
  margin: 10px 150px;
  background-color: white;
  border-radius: 8px;
`;

export const MainUrl = styled.label `
  font-size: 16px;
  color: black;
  // font-weight: bold;
`;

export const ShortUrl = styled(MainUrl) `
  color: #2acfcf;
  float: right;
  margin-right: 10px;
`;

export const CopyButton = styled(ShortenButton) `
   float: right;
   padding: 5px 10px;

`;

