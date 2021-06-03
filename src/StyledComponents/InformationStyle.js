import styled from "styled-components";
import { MainDiv } from "./ShortenStyle";

export const InfoDiv = styled(MainDiv)`
  background-color: #dadada;
  height: 600px;
  margin: -277px 50px;
  padding: 0px;
  z-index: -1;
  border-radius: 3px;
  @media (max-width: 375px) {
    marign: 5px;
    height: 1500px;
}
`;

export const Title = styled.h1`
  color: black;
  font-size: 30px;
  text-align: center;
  margin: 150px;
  padding-top: 9rem;
`;

export const Description = styled.h3`
  color: #9e9aa7;
  text-align: center;
  margin: -130px 200px;
`;

export const FeaturesDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 200px 10px 10px 10px;
  height: 250px;
  @media (max-width: 375px) {
    margin: 5px;
    flex-flow: column;
    height: 1200px;
}
`;

export const BrandRecogDiv = styled.div`
  background-color: white;
  height: 150px;
  width: 200px;
  margin: 20px 0px 20px 120px;
  padding: 5px;
  border-radius: 3px;
  @media (max-width: 375px) {
    margin: 10px;
}
`;

export const DetailedRecordsDiv = styled(BrandRecogDiv)`
  margin-top: 40px;
  margin-left: 50px;
  @media (max-width: 375px) {
    margin: 10px;
}
`;

export const FullyCustomisableDiv = styled(BrandRecogDiv)`
  margin-top: 60px;
  margin-left: 50px;
  @media (max-width: 375px) {
    margin: 10px;
}
`;

export const BrandingLogoDiv = styled.div`
  background-color: #3b3054;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-top: -30px;
`;

export const ImageBox = styled.img`
  height: 60%;
  width: 60%;
  alt: *;
  padding-top: 9px;
  padding-left: 10px;
`;

export const DescriptionTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  margin: 20px 0px 0px 40px;
`;

export const TitleDescription = styled.p`
  color: #9e9aa7;
  font-size: 11px;
  margin: 50px 8px 0px 8px;
  height: 100px;
  width: 180px;
`;
