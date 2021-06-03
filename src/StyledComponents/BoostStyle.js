import styled from "styled-components";
import { Button } from "./NavigationStyle";

export const BoostDiv = styled.div`
  background-color: #3b3054;
  height: 150px;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 250px;
  @media (max-width: 375px) {
    margin: 5px;
}
`;

export const BoostSVGImg = styled.img`
  alt: "*";
  width: 100%;
  height: 100%;
`;

export const BoostTitle = styled.p`
  color: white;
  font-size: 26px;
  font-weight: bold;
  margin-top: -130px;
  text-align: center;
  @media (max-width: 375px) {
    font-size: 22px;
}
`;

export const GetLinkButton = styled(Button)`
  background-color: #2acfcf;
  padding: 10px 30px;
  margin-left: 43%;

`;
